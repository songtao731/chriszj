import {
  defineComponent,
  reactive,
  ref,
  unref,
  Ref,
  watchEffect,
  onMounted,
} from "vue";
import "../style/search.scss";
//存的屏幕最小宽度
import variables from "@/assets/scss/global.module.scss";
import {
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElSelect,
  ElOption,
  ElCascader,
  ElDatePicker,
  ElIcon,
} from "element-plus";
export default defineComponent({
  props: ["filter", "searchSize", "labelPosition", "searchData"],
  emits: ["getParams", "resetFn"],

  setup(props, { emit, expose, slots }) {
    const formData: any = reactive({});
    //filter:过滤条件,searchSize:查询条件框的大小 labelPosition:查询条件label的位置
    const { filter, searchSize, labelPosition } = props;

    const screenWidth = ref();
    const isShow = ref(false);
    const showName = ref("展开");
    //判断是否展示 展开按钮
    const getNum = (width: number, num: number) => {
      if (width > +variables.maxwidth.replace(/[^\d]/gi, "")) {
        isShow.value = num > 4;
      } else {
        isShow.value = num > 3;
      }
    };
    //获取屏幕可视化宽度
    onMounted(() => {

      screenWidth.value = document.body.clientWidth;
      const searchDataLength=slots?.search()[0].children?.length as number||0;
      getNum(screenWidth.value, searchList.value.length+searchDataLength);
      //实时改变浏览器宽度和高度
      window.onresize = () => {
        return (() => {
          screenWidth.value = document.body.clientWidth;
          getNum(screenWidth.value, searchList.value.length+searchDataLength);
        })();
      };
    });

    const searchList: Ref<any[]> = ref([]);

    watchEffect(() => {
      searchList.value = filter.map((el: any) => {
        //目前值接收字符串类型的赋值
        if (typeof el.value === "string") {
          formData[el.prop] = el.value;
        }

        if (typeof el.filter === "string") {
          return {
            prop: el.prop,
            label: el.label,
            placeholder: el.label,
            type: el.filter,
          };
        } else {
          return {
            prop: el.filter.prop || el.prop,
            label: el.filter.label || el.label,
            placeholder: el.filter.placeholder || el.label,
            type: el.filter.type,
            options: el.filter.options,
            showAllLevels: el.filter.showAllLevels,
          };
        }
      });
    });
    //初始化新的传参
    const newFormData: any = ref({});
    const getParams = () => {
      Object.keys(formData).forEach((el) => {
        if (/,/.test(el)) {
          el.split(",").forEach((ele, index) => {
            newFormData.value[ele] = formData[el] ? formData[el][index] : null;
          });
        } else {
          newFormData.value[el] = formData[el] || null;
        }
      });
          //添加自定义搜索条件
      if(props.searchData){
        newFormData.value=Object.assign(newFormData.value,unref(props.searchData))
      }

      emit("getParams", { ...newFormData.value});
    };
    const searchForm = ref();
    const searchFormRef = ref();
    //重置查询条件
    const resetFn = () => {
      Object.keys(formData).forEach((el) => {
        formData[el] = "";
      });
      Object.keys(newFormData.value).forEach((el) => {
        newFormData.value[el] = "";
      });
      searchFormRef.value.resetFields();

      emit("resetFn");
    };
    //控制展开按钮 文字
    const changeName = () => {
      showName.value = showName.value === "展开" ? "收起" : "展开";
    };
    expose({
      formData,
      newFormData,
      searchForm,
      searchFormRef,
      isShow,
      showName,
      changeName,
      slots,
    });
    return () => (
      <>
        <div class="chris-table-search">
          <ElForm
            model={formData}
            ref={searchFormRef}
            label-position={labelPosition}
            class={[
              {
                active: showName.value === "展开",

                "chris-table-search-form": true,
              },
            ]}
          >
            {Array.isArray(searchList.value) &&
              searchList.value.map((el) => {
                let element = null;
                switch (el.type) {
                  case "input":
                    element = (
                      <ElFormItem label={`${el.label}:`}>
                        <ElInput
                          class="item-content"
                          clearable={true}
                          v-model={formData[el.prop]}
                          size={searchSize}
                          placeholder={`请输入${el.placeholder}`}
                        />
                      </ElFormItem>
                    );
                    break;
                  case "select":
                    element = (
                      <ElFormItem label={`${el.label}:`}>
                        <ElSelect
                          class="item-content select"
                          clearable={true}
                          v-model={formData[el.prop]}
                          placeholder={`请选择${el.placeholder}`}
                          size={searchSize}
                        >
                          {Array.isArray(unref(el.options)) &&
                            unref(el.options).map((el: any, index: any) => {
                              return (
                                <ElOption
                                  key={index}
                                  label={el.label}
                                  value={el.value}
                                />
                              );
                            })}
                        </ElSelect>
                      </ElFormItem>
                    );
                    break;
                  case "cascader":
                    element = (
                      <ElFormItem label={`${el.label}:`}>
                        <ElCascader
                          class="item-content"
                          clearable={true}
                          options={el.options}
                          show-all-levels={el.showAllLevels}
                          v-model={formData[el.prop]}
                          props={el.props}
                          placeholder={`请选择${el.placeholder}`}
                          size={searchSize}
                        ></ElCascader>
                      </ElFormItem>
                    );
                    break;
                  case "date":
                    element = (
                      <ElFormItem label={`${el.label}:`}>
                        <ElDatePicker
                          class="item-content"
                          clearable={true}
                          v-model={formData[el.prop]}
                          props={el.props}
                          placeholder={`请选择${el.placeholder}`}
                          size={searchSize}
                          value-format="YYYY-MM-DD"
                        ></ElDatePicker>
                      </ElFormItem>
                    );
                    break;
                  case "dateTime":
                    element = (
                      <ElFormItem label={`${el.label}:`}>
                        <ElDatePicker
                          class="item-content"
                          clearable={true}
                          v-model={formData[el.prop]}
                          props={el.props}
                          placeholder={`请选择${el.placeholder}`}
                          size={searchSize}
                          type="datetime"
                          value-format="YYYY-MM-DD HH:mm:ss"
                        ></ElDatePicker>
                      </ElFormItem>
                    );
                    break;
                  case "dateRange":
                    element = (
                      <ElFormItem label={`${el.label}:`}>
                        <ElDatePicker
                          class="item-content"
                          clearable={true}
                          v-model={formData[el.prop]}
                          props={el.props}
                          start-placeholder={`${
                            Array.isArray(el.placeholder)
                              ? el.placeholder[0]
                              : "起始日期"
                          }`}
                          end-placeholder={`${
                            Array.isArray(el.placeholder)
                              ? el.placeholder[1]
                              : "结束日期"
                          }`}
                          size={searchSize}
                          type="daterange"
                          value-format="YYYY-MM-DD"
                        ></ElDatePicker>
                      </ElFormItem>
                    );
                    break;
                  case "dateTimeRange":
                    element = (
                      <ElFormItem label={`${el.label}:`}>
                        <ElDatePicker
                          class="item-content"
                          clearable={true}
                          v-model={formData[el.prop]}
                          props={el.props}
                          start-placeholder={`${
                            Array.isArray(el.placeholder)
                              ? el.placeholder[0]
                              : "起始日期"
                          }`}
                          end-placeholder={`${
                            Array.isArray(el.placeholder)
                              ? el.placeholder[1]
                              : "结束日期"
                          }`}
                          size={searchSize}
                          type="datetimerange"
                          value-format="YYYY-MM-DD HH:mm:ss"
                        ></ElDatePicker>
                      </ElFormItem>
                    );
                    break;
                  case "inputrange":
                    element = (
                      <ElFormItem
                        label={`${el.label}:`}
                        class="el-form-item-min"
                      >
                        <ElInput
                          class="item-content"
                          clearable={true}
                          size={searchSize}
                          v-model={formData[el.prop[0]]}
                          placeholder={`${
                            Array.isArray(el.placeholder)
                              ? el.placeholder[0]
                              : "最小值"
                          }`}
                        />

                        <span>-</span>
                        <ElInput
                          class="item-content"
                          clearable={true}
                          size={searchSize}
                          v-model={formData[el.prop[1]]}
                          placeholder={`${
                            Array.isArray(el.placeholder)
                              ? el.placeholder[1]
                              : "最大值"
                          }`}
                        />
                      </ElFormItem>
                    );
                    break;
                }
                return element;
              })}

            {slots?.search()}
          </ElForm>
          {searchList.value.length ? (
            <div class="chris-table-search-btns">
              <ElButton type="primary" onClick={getParams}>
                查询
              </ElButton>
              <ElButton onClick={resetFn}>重置</ElButton>
              {isShow.value && (
                <ElButton type="success" onClick={changeName}>
                  {showName.value}
                </ElButton>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </>
    );
  },
});
