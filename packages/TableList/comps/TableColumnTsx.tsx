import { ElButton } from "element-plus";
import { defineComponent, unref } from "vue";
import { formatPrice, formatTime } from "../utils/format";
import { ButtonProps } from "./Button";
import { labelEnum,searchTree } from "../../utils";


export default defineComponent({
  props: ["data", "column"],
  setup(props) {
    const parseValue = (data: any, column: any) => {
      const { formatType, prop, dictData, buttons,dictOptions } = column;
  //初始化字典 tree参数
  const options = labelEnum(dictOptions);
      let result;
      if (props.data[prop] === 0) {
        result = 0;
      } else if (props.data[prop]) {
        result = props.data[prop];
      } else {
        result = "_ _";
      }

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
      // if (dictData && dictData.length) {
      //   console.log(dictData,'ddduu',options)
      //   const findData = dictData.find((el: any) => {
      //     return el.value == props.data[prop];
      //   });
      //   result = findData && findData["label"]||'--'
      // }
        //处理枚举 字典
  if (dictData && unref(dictData).length) {
    const findData = searchTree(unref(dictData), result, options);
    result = (findData && findData[options.useDictLabel]) || "--";

  }
      //处理操作按钮


      if (buttons && typeof buttons === "object" && buttons.length) {
        result = buttons

          .filter((ele: ButtonProps) => {
            return typeof ele.hide === "function" ? !ele.hide(data) : !ele.hide;
          })
          .map((el: ButtonProps) => {
            return (
              <ElButton
                {...el}
                onClick={(e: any) => {
                  e.stopPropagation();
                  if(el.onClick){
                     el.onClick(data);

                  }else if( el.click){
                    el.click(data);
                  }
           
                }}
              >
                {el.content}
              </ElButton>
            );
          });
      } else if (buttons && typeof buttons === "function") {

        const buttonsList = buttons(data);
        if (buttonsList  && buttonsList.length) {

          result = buttonsList
            .filter((ele: ButtonProps) => {
              return typeof ele.hide === "function"
                ? !ele.hide(data)
                : !ele.hide;
            })
            .map((el: ButtonProps) => {
              return (
                <ElButton
                  {...el}
                  onClick={(e: any) => {
                    e.stopPropagation();
                    if(el.onClick){
                       el.onClick(data);
  
                    }else if( el.click){
                      el.click(data);
                    }
             
                  }}
                >
                  {el.content}
                </ElButton>
              );
            });
        }
      }

      return result;
    };
    return () => <>{parseValue(props.data, props.column)}</>;
  },
});
