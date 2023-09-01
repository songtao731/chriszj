import { ElButton } from "element-plus";
import { computed, defineComponent, unref } from "vue";
import { formatPrice, formatTime } from "../../TableList/utils/format";
import { ButtonProps } from "../../BaseComps/buttons";
import { desItem } from "./useDescriptions";

export default defineComponent({
  props: ["item", "formData"],
  setup(props) {
    const item = computed(() => props.item);
    const formData = computed(() => props.formData);

    const parseValue = (formData: { [key: string]: any }, item: desItem) => {
      const { formatType, prop, dictData } = item;

      console.log( "dics",formData);

      let result = formData[prop as string] || "--";
      //处理枚举 字典
      if (dictData && unref(dictData).length) {
        const findData = unref(dictData).find((el: any) => {
          console.log(el.value,'999',result)
          return el.value == result;
        });
        console.log(findData, "ddata");
        result = findData && findData["label"];
      }

      return result;
    };

    return () => <>{parseValue(formData.value, item.value)}</>;
  },
});
