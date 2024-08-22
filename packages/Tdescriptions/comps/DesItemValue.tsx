import { computed, defineComponent } from "vue";

import Timgs from "../../Timgs";
import { parseValue } from "../untils/index";

export default defineComponent({
  props: ["item", "formData", "resData"],
  setup(props) {
    const item = computed(() => props.item);
    const formData = computed(() => props.formData);
    const resData = computed(() => props.resData);
    return () => (
      <>
        {item.value.type === "prew" ? (
          <Timgs
            fileList={parseValue(formData.value, item.value, resData.value)}
            width={item.value?.prew?.width}
            height={item.value?.prew?.height}
            showName={item.value?.prew?.showName}
          ></Timgs>
        ) : (
          parseValue(formData.value, item.value, resData.value)
        )}
      </>
    );
  },
});
