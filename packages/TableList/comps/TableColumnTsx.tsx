import { ElButton } from "element-plus";
import { defineComponent } from "vue";
import { formatPrice, formatTime } from "../utils/format";
import { ButtonProps } from "./Button";

export default defineComponent({
  props: ["data", "column"],
  setup(props) {


    const parseValue = (data: any, column: any) => {
      const { formatType, prop, dictData, buttons } = column;

      let result = props.data[prop] || "--";

      //格式化数字
      if (formatType) {
        switch (formatType) {
          case "price":
            result = formatPrice(props.data[prop], { thousands: true });
            break;
          case "priceChinese":
            result = formatPrice(props.data[prop], { chinaPrice: true });
            break;
          case "date":
            result = formatTime(props.data[prop], "Y-M-D");
            break;
          case "dateTime":
            result = formatTime(props.data[prop]);
          default:
            break;
        }
      }
      //处理枚举 字典
      if (dictData && dictData.length) {
        const findData = dictData.find((el: any) => {
          return el.value == props.data[prop];
        });
        result = findData && findData["label"];
      }
      //处理操作按钮

      if (buttons && buttons.length) {
        result = buttons.map((el: ButtonProps) => {
          return (
            <ElButton
              {...el}
              onClick={(e: any) => {
                e.stopPropagation();
                el.click && el.click(data);
              }}
            >
              {el.content}
            </ElButton>
          );
        });
      }

      return result;
    };
    return () => <>{parseValue(props.data, props.column)}</>;
  },
});
