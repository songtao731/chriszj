import { ElButton } from "element-plus";
import { computed, defineComponent, unref } from "vue";
import { formatPrice, formatTime } from "../../TableList/utils/format";
import { desItem } from "./useDescriptions";
import { searchTree } from "../../utils";

export default defineComponent({
  props: ["item", "formData", "resData"],
  setup(props) {
    const item = computed(() => props.item);
    const formData = computed(() => props.formData);
    const resData = computed(() => props.resData);

    const parseValue = (formData: { [key: string]: any }, item: desItem) => {
      const { formatType, prop, dictData, dictOptions, formatData } = item;

      //初始分页入参
      const { useDictLabel, useDictValue, useDictChildren } = {
        useDictLabel: dictOptions?.label || "label",
        useDictValue: dictOptions?.value || "value",
        useDictChildren: dictOptions?.children || "children",
      };
      const options = {
        useDictLabel,
        useDictValue,
        useDictChildren,
      };
      //prop存在 赋值不存在返回null  结局space站位符的作用
      let result = prop ? formData[prop as string] || "--" : null;

      //处理枚举 字典
      if (dictData && unref(dictData).length) {
        const findData = searchTree(unref(dictData), result, options);
        result = (findData && findData![useDictLabel]) || "--";
      }
      //格式化数字
      if (formatType) {
        switch (formatType) {
          case "price":
            result = formatPrice(result, { thousands: true });
            break;
          case "priceChinese":
            result = formatPrice(result, { chinaPrice: true });
            break;
          case "date":
            result = formatTime(result, "Y-M-D");
            break;
          case "dateTime":
            result = formatTime(result);
          default:
            break;
        }
      }
      if (formatData) {
        result = formatData(resData.value);
      }

      return result;
    };

    return () => <>{parseValue(formData.value, item.value)}</>;
  },
});
