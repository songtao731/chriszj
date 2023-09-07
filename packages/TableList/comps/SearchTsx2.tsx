import {
  defineComponent,
  reactive,
  ref,
  unref,
  Ref,
  watchEffect,
  onMounted,
  computed,
} from "vue";
import "../style/search.scss";
//存的屏幕最小宽度
import variables from "../../style/global.module.scss";

import { Filter } from "./TableColumnItem";
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
  ElRow,
  ElCol,
  ElCheckboxGroup,
  ElRadioGroup,
  ElCheckbox,
  ElRadio,
  ElRate,
  ElSwitch,
  ElSlider,
} from "element-plus";
import { CheckBoxItem } from "chriszj/BaseComps/checkBox";
import { RadioItem } from "chriszj/BaseComps/radio";
export default defineComponent({
  props: ["filter", "size", "labelPosition", "searchData", "gutter", "column"],
  emits: ["getParams", "resetFn"],

  setup(props, { emit, expose, slots }) {

    //filter:过滤条件,searchSize:查询条件框的大小 labelPosition:查询条件label的位置
    const { filter } = props;


    const screenWidth = ref();
    const isShow = ref(false);
    const showName = ref("展开");
    //可视搜索条件宽度大于1500就展示4个
    const isShowMax = ref(false);
    //一行展示几个
    const span = computed(() => {
      return (props.column && 24 / +props.column) || 6;
    });

    //判断是否展示 展开按钮
    const getNum = (width: number, num: number) => {
      isShowMax.value = width > +variables.maxwidth.replace(/[^\d]/gi, "");

      if (width > +variables.maxwidth.replace(/[^\d]/gi, "")) {
        isShow.value = num > 4;
      } else {
        isShow.value = num > 3;
      }
    };
        const formData: any = reactive({zds:'1'});
    //获取屏幕可视化宽度
    onMounted(() => {});

    const searchList: Ref<any[]> = ref([]);
    //初始化新的传参
    const newFormData: any = ref({});
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
            type: el.filter,
          };
        } else {
          return {
            ...el.filter,
            prop: el.filter.prop || el.prop,
            label: el.filter.label || el.label,
            type: el.filter.type,
          };
        }
      });
    });

    const getParams = () => {

      
      Object.keys(formData).forEach((el) => {
        console.log(el,'eeee')
        if (/,/.test(el)) {
          el.split(",").forEach((ele, index) => {
            newFormData.value[ele] = formData[el] ? formData[el][index] : null;
          });
        } else {
          newFormData.value[el] = formData[el] || null;
        }
      });

      console.log(newFormData.value);
      emit("getParams", { ...newFormData.value });
    };
    //格式化搜索条件的格式
    const formatDataFn = (data: Filter) => {
      let placeholderValue = "";
      let options = unref(data.select?.options) ||unref(data.checkBox?.options)||unref(data.radio?.options)|| [];
      switch (data.type) {
        case "input":
          if (data.input) {
            placeholderValue = data.input.placeholder || `请输入${data.label}`;
          } else {
            placeholderValue = `请输入${data.label}`;
          }
          break;
        case "select":
          if (data.select) {
            placeholderValue = data.select.placeholder || `请选择${data.label}`;

            //处理传入的options是自定义label和value key值的
            if (data.select.dictOptions) {
              options = options.map((el: any) => {
                return {
                  label: el[data.select?.dictOptions?.label as string],
                  value: el[data.select?.dictOptions?.value as string],
                };
              });
            }
          }
          break;
        case "date":
          placeholderValue = data.date?.placeholder || `请选择${data.label}`;
          if (data.date) {
            data.date.startPlaceholder =
              data.date.startPlaceholder || "请选择开始时间";
            data.date.endPlaceholder =
              data.date.endPlaceholder || "请选择结束时间";
          }
          break;
        case "cascader":
          if (data.cascader) {
            placeholderValue =
              data.cascader.placeholder || `请选择${data.label}`;
          }
          break;
        case "checkBox":
          if (data.checkBox) {

            //处理传入的options是自定义label和value key值的
            if (data.checkBox.dictOptions) {

              options = options.map((el: any) => {
                return {
                  label: el[data.checkBox?.dictOptions?.label as string],
                  value: el[data.checkBox?.dictOptions?.value as string],
                };
              });
            }
          }
          break;
      }

      return {
        placeholder: placeholderValue.replace(":", ""),

        options,
      };
    };
    const searchForm = ref();
    const formRef = ref();
    //重置查询条件
    const resetFn = () => {
      Object.keys(formData).forEach((el) => {
        formData[el] = "";
      });
      Object.keys(newFormData.value).forEach((el) => {
        newFormData.value[el] = "";
      });
      formRef.value.resetFields();

      emit("resetFn");
    };
    //控制展开按钮 文字
    const changeName = () => {
      showName.value = showName.value === "展开" ? "收起" : "展开";
    };

    console.log(searchList,'searchListsearchList',slots,formData)
    expose({
      formData,
      newFormData,
      searchForm,
      formRef,
      isShow,
      showName,
      changeName,
      slots,
      isShowMax,
    });
    return () => (
      <>
        <div class="chris-table-search">
          <ElForm ref={formRef} {...props} model={formData} class={"w-full"}>
            <ElRow gutter={props.gutter}>
              {Array.isArray(searchList.value) &&
                searchList.value.map((el, index) => {
                  let element = null;
                  switch (el.type) {
                    case "space":
                      element = (
                        <ElCol span={el.nospan}>
                          <ElFormItem></ElFormItem>
                        </ElCol>
                      );
                      break;
                    case "custom":
                      element = !(el.hide || el.deepHide) ? (
                        <ElCol span={span.value}>
                          <ElFormItem
                            {...el}
                            rules={el.rules?.rules}
                            class="w-full"
                          >
                            {slots[el.slotName] &&
                              slots[el.slotName]({ scope: formData })}
                          </ElFormItem>
                        </ElCol>
                      ) : (
                        ""
                      );
                      break;
                    case "input":
                      element = !(el.hide || el.deepHide) ? (
                        <ElCol span={span.value}>
                          <ElFormItem
                            {...el}
                            prop={el.prop}
                            rules={el.rules?.rules}
                            class="w-full"
                          >
                            <ElInput
                              clearable={true}
                              v-model={formData[el.prop as string]}
                              {...el.input}
                              placeholder={formatDataFn(el).placeholder}
                            />
                          </ElFormItem>
                        </ElCol>
                      ) : (
                        ""
                      );
                      break;
                    case "inputrange":

                      element = !(el.hide || el.deepHide) ? (
                        <ElCol span={span.value}>
                          {el.columns && (
                            <ElFormItem label={el.label} {...el} class="w-full">
                              <ElCol span={11} class="!pr-0 !pl-0">
                                <ElFormItem
                                  rules={el.columns[0].rules?.rules}
                                  prop={el.columns[0].prop}
                                  class="w-full"
                                >
                                  <ElInput
                                    clearable={true}
                                    v-model={
                                      formData[el.columns[0]!.prop as string]
                                    }
                                    placeholder={
                                      el.columns[0].placeholder ||
                                      `请输入${el.label}最小值`
                                    }
                                    {...el.columns[0]!.input}
                                  />
                                </ElFormItem>
                              </ElCol>
                              <ElCol class="text-center !pr-0 !pl-0" span={1}>
                                <span class="text-gray-500">-</span>
                              </ElCol>
                              <ElCol span={12} class="!pr-0 !pl-0">
                                <ElFormItem
                                  class="w-full"
                                  rules={
                                    el.columns && el.columns[1].rules?.rules
                                  }
                                  prop={el.columns && el.columns[1].prop}
                                >
                                  <ElInput
                                    clearable={true}
                                    v-model={
                                      formData[el.columns[1]!.prop as string]
                                    }
                                    placeholder={
                                      el.columns[1].placeholder ||
                                      `请输入${el.label}最大值`
                                    }
                                    {...el.columns[1]!.input}
                                  />
                                </ElFormItem>
                              </ElCol>
                            </ElFormItem>
                          )}
                        </ElCol>
                      ) : (
                        ""
                      );
                      break;
                    case "select":
                      element = !(el.hide || el.deepHide) ? (
                        <ElCol span={span.value}>
                          <ElFormItem
                            {...el}
                            rules={el.rules?.rules}
                            class="w-full"
                          >
                            <ElSelect
                              clearable={true}
                              v-model={formData[el.prop as string]}
                              class="w-full"
                              {...el.select}
                              placeholder={formatDataFn(el).placeholder}
                            >
                              {formatDataFn(el).options.map(
                                (ele: any, index: any) => {
                                  return (
                                    <ElOption
                                      key={index}
                                      label={ele.label}
                                      value={
                                        el.select?.values ? ele : ele.value
                                      }
                                    />
                                  );
                                }
                              )}
                            </ElSelect>
                          </ElFormItem>
                        </ElCol>
                      ) : (
                        ""
                      );
                      break;
                    case "date":
                      element = !(el.hide || el.deepHide) ? (
                        <ElCol span={span.value}>
                          <ElFormItem
                            {...el}
                            rules={el.rules?.rules}
                            class="w-full"
                          >
                            <ElDatePicker
                              clearable={true}
                              class="!w-full"
                              v-model={formData[el.prop as string]}
                              value-format="YYYY-MM-DD"
                              editable={false}
                              placeholder={formatDataFn(el).placeholder}
                              {...el.date}
                            ></ElDatePicker>
                          </ElFormItem>
                        </ElCol>
                      ) : (
                        ""
                      );
                      break;
                    case "cascader":
                      element = !(el.hide || el.deepHide) ? (
                        <ElCol span={span.value}>
                          <ElFormItem
                            {...el}
                            rules={el.rules?.rules}
                            class=" w-full"
                          >
                            <ElCascader
                              clearable={true}
                              class="w-full"
                              v-model={formData[el.prop as string]}
                              placeholder={formatDataFn(el).placeholder}
                              {...el.cascader}
                            ></ElCascader>
                          </ElFormItem>
                        </ElCol>
                      ) : (
                        ""
                      );
                      break;
                    case "checkBox":
                      element = !(el.hide || el.deepHide) ? (
                        <ElCol span={span.value}>
                          <ElFormItem
                            {...el}
                            rules={el.rules?.rules}
                            class="w-full"
                          >
                            <ElCheckboxGroup
                              v-model={formData[el.prop as string]}
                              {...el.checkBox}
                            >
                              {formatDataFn(el).options.map(
                                  (ele: CheckBoxItem) => {
                                    return (
                                      <ElCheckbox {...ele} label={ele.value}>
                                        {ele.label}
                                      </ElCheckbox>
                                    );
                                  }
                                )}
                            </ElCheckboxGroup>
                          </ElFormItem>
                        </ElCol>
                      ) : (
                        ""
                      );
                      break;
                     case "radio":
                      element = !(el.hide || el.deepHide) ? (
                        <ElCol span={span.value}>
                          <ElFormItem
                            {...el}
                            rules={el.rules?.rules}
                            class="w-full"
                          >
                            <ElRadioGroup
                              v-model={formData[el.prop as string]}
                              {...el.radio}
                            >
                              {formatDataFn(el).options.map(
                                  (ele: RadioItem) => {
                                    return (
                                      <ElRadio {...ele} label={ele.value}>
                                        {ele.label}
                                      </ElRadio>
                                    );
                                  }
                                )}
                            </ElRadioGroup>
                          </ElFormItem>
                        </ElCol>
                      ) : (
                        ""
                      );
                      break;
                    case "rate":
                      element = !(el.hide || el.deepHide) ? (
                        <ElCol span={span.value}>
                          <ElFormItem
                            {...el}
                            rules={el.rules?.rules}
                            class="w-full"
                          >
                            <ElRate
                              v-model={formData[el.prop as string]}
                              clearable={true}
                              {...el.rate}
                            ></ElRate>
                          </ElFormItem>
                        </ElCol>
                      ) : (
                        ""
                      );
                      break;
                    case "switch":
                      element = !(el.hide || el.deepHide) ? (
                        <ElCol span={span.value}>
                          <ElFormItem
                            {...el}
                            rules={el.rules?.rules}
                            class="w-full"
                          >
                            <ElSwitch
                              v-model={formData[el.prop as string]}
                              {...el.switch}
                            ></ElSwitch>
                          </ElFormItem>
                        </ElCol>
                      ) : (
                        ""
                      );
                      break;
                    case "slider":
                      element = !(el.hide || el.deepHide) ? (
                        <ElCol span={span.value}>
                          <ElFormItem
                            {...el}
                            rules={el.rules?.rules}
                            class="w-full"
                          >
                            <ElSlider
                              v-model={formData[el.prop as string]}
                              {...el.slider}
                            ></ElSlider>
                          </ElFormItem>
                        </ElCol>
                      ) : (
                        ""
                      );
                      break;
                  }
                  return element;
                })}
            </ElRow>
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
