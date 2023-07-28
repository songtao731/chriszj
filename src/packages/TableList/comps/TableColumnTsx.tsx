import { ElButton } from "element-plus";
import { defineComponent, ref } from "vue";
import { formatPrice, formatTime } from "../utils/format";
import { ButtonProps } from "./Button";

export default defineComponent({
  props: ["data", "column"],
  setup(props) {
    const data = props.data;
    const column = props.column;

    const parseValue = (data: any, column: any) => {
      const { formatType, prop, dictData, buttons } = column;
      let result = data[prop] || "--";
      //格式化数字
      if (formatType) {
        switch (formatType) {
          case "price":
            result = formatPrice(data[prop], { thousands: true });
            break;
          case "priceChinese":
            result = formatPrice(data[prop], { chinaPrice: true });
            break;
          case "date":
            result = formatTime(data[prop], "Y-M-D");
            break;
          case "dateTime":
            result = formatTime(data[prop]);
          default:
            break;
        }
      }
      //处理枚举 字典
      if (dictData.length) {
        const findData = dictData.find((el: any) => {
          return el.value == data[prop];
        });
        result = findData && findData["label"];
      }
      //处理操作按钮
      if (buttons.length) {
        result = buttons.map((el: ButtonProps) => {
          return <ElButton {...el} onClick={(e:any)=>{
            e.stopPropagation();
            el.click&&el.click(data)
          }}>{el.content}</ElButton>;
        });
      }

      return result;
    };
    return () => <>{parseValue(data, column)}</>;
  },
});
