import { defineComponent, ref, watchEffect } from 'vue';
import { ElPagination } from 'element-plus';
import '../style/search.scss';

export default defineComponent({
  name: 'pagination',
  inheritAttrs: true,
  emits: ['getPage'],
  props: ['total','layout','pageSizes','currentPage'],
  setup(props, { emit }) {
    const currentPage = ref(1);
    const pageSize = ref(10);
    const handleSizeChange = (val: number): void => {
      currentPage.value = 1;
      pageSize.value = val;
      emit('getPage', { pageSize, currentPage });
    };
    const handleCurrentChange = (val: number): void => {
      currentPage.value = val;
      emit('getPage', { pageSize, currentPage });
    };
    watchEffect(()=>{
      currentPage.value=props.currentPage
    })

    return {
      handleCurrentChange,
      handleSizeChange,
      pageSize,
      currentPage,
      props,
    };
  },
  render() {
    return (
      <div class="paginaton">
        <ElPagination
          onUpdate:current-page={this.handleCurrentChange}
          onUpdate:page-size={this.handleSizeChange}
          currentPageSync={this.currentPage}
          pageSizes={this.props.pageSizes}
          pageSize={this.pageSize}
          layout={this.props.layout}
          total={+this.props.total}
        ></ElPagination>
      </div>
    );
  }
});
