import { defineComponent } from 'vue';
import './index.scss';
import {
  ElCard
} from "element-plus";

export default defineComponent({
  props: {
    // 卡片的标题
    title: String
  },
  setup(props, { slots }) {
    const slot = {
      header: props.title ? () => <div>{props.title}</div> : slots.header,
      default: slots.default
    };

    return () => (
      <ElCard class="v-card" shadow="never">
        {slot}
      </ElCard>
    );
  },
  name: "Card"

});
