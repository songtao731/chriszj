import {
  defineComponent,
  reactive,
  ref,
  unref,
  Ref,
  watchEffect,
  onMounted,
  computed,
  watch,
} from "vue";

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
} from "element-plus";
import { formProps } from "./form";
import { dataItem } from "../../Tform/comp/useForm";
import "../../style/index.scss";

export default defineComponent({
  props: formProps,
  emits: ["getParams"],

  setup(props, { emit, expose, slots }) {
    const formData: any = reactive({});
    //filter:过滤条件,searchSize:查询条件框的大小 labelPosition:查询条件label的位置

    console.log(props, "os", slots);
    const { column, gutter } = props;

    //初始化数据
    let isBclick = true;

    const resetFn = (el: dataItem) => {
      switch (el.type) {
        case "input":
          formData[el.prop as string] = "";
          break;
        case "custom":
          formData[el.prop as string] = "";
          break;
        default:
          formData[el.prop as string] = "";
      }
    };
    const dataList = computed(() => {
      switch ("" + column) {
        case "1":
          props.dataList.forEach((el) => {
            el.nospan = 24;
          });
          break;
        case "2":
          props.dataList.forEach((el) => {
            el.nospan = (el.span && +el.span * 12) || 12;
          });
          break;
        case "3":
          props.dataList.forEach((el) => {
            el.nospan = (el.span && +el.span * 8) || 8;
          });
          break;
      }
      if (props.dataList.length) {
        props.dataList.forEach((el) => {
          //初始化值 只走一遍
          if (isBclick) {
            resetFn(el);
          }
          //处理栅格布局
          el.nospan = el.nospan && el.nospan > 24 ? 24 : el.nospan;
          el.placeholder = el.placeholder
            ? el.placeholder
            : el.label && el.label.replace(":", "");

          if (el.value || el.value === 0) {
            formData[el.prop as string] = el.value;
          }

          //深度隐藏 清楚数据
          if (el.deepHide) {
            formData[el.prop as string] = "";
          }
        });
        isBclick = false;
      }

      console.log("数据驱动", formData);

      return unref(props.dataList);
    });

    const buttons = computed(() => unref(props.buttons));

    //获取屏幕可视化宽度
    onMounted(() => {});
    //操作placeholder展示
    const changePlaceHolderFn = (
      outPlaceholder?: boolean,
      innerPlaceholder?: boolean,
      placeholderText?: string
    ) => {
      let str;
      if (outPlaceholder) {
        str = "";
      } else {
        str = placeholderText;
      }
      if (innerPlaceholder) {
        str = placeholderText;
      }

      return str;
    };

    const formRef = ref();

    expose({
      formData,
      formRef,
    });
    return () => (
      <>
        <div class="chris-form">
          <ElForm ref={formRef} {...props} model={formData}>
            <ElRow gutter={gutter}>
              {Array.isArray(dataList.value) &&
                dataList.value.map((el, index) => {
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
                      element = (
                        <ElCol span={el.nospan}>
                          <ElFormItem {...el} rules={el.rules?.rules}>
                            {slots[el.slotName] &&
                              slots[el.slotName]({ scope: formData })}
                          </ElFormItem>
                        </ElCol>
                      );
                      break;
                    case "input":
                      element = !(el.hide || el.deepHide) ? (
                        <ElCol span={el.nospan}>
                          <ElFormItem
                            {...el}
                            prop={el.prop}
                            rules={el.rules?.rules}
                          >
                            <ElInput
                              clearable={true}
                              v-model={formData[el.prop as string]}
                              placeholder={changePlaceHolderFn(
                                props.closePlaceholder,
                                el.showPlaceholder,
                                "请输入" + el.placeholder
                              )}
                              {...el.input}
                            />
                          </ElFormItem>
                        </ElCol>
                      ) : (
                        ""
                      );
                      break;
                    case "select":
                      element = (
                        <ElCol span={el.nospan}>
                          <ElFormItem {...el} rules={el.rules?.rules}>
                            <ElSelect
                              clearable={true}
                              v-model={formData[el.prop as string]}
                              placeholder={changePlaceHolderFn(
                                props.closePlaceholder,
                                el.showPlaceholder,
                                "请选择" + el.placeholder
                              )}
                              {...el.select}
                            >
                              {Array.isArray(unref(el.options)) &&
                                unref(el.options).map(
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
                      );
                      break;
                    case "date":
                      element = (
                        <ElCol span={el.nospan}>
                          <ElFormItem {...el} rules={el.rules?.rules}>
                            <ElDatePicker
                              clearable={true}
                              class="wid100"
                              v-model={formData[el.prop as string]}
                              value-format="YYYY-MM-DD"
                              placeholder={changePlaceHolderFn(
                                props.closePlaceholder,
                                el.showPlaceholder,
                                "请选择" + el.placeholder
                              )}
                              {...el.date}
                            ></ElDatePicker>
                          </ElFormItem>
                        </ElCol>
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
                          ></ElCascader>
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
            </ElRow>
            <ElFormItem>
              <div style={`width:100%;text-align:${props.buttonsAlign}`}>
                {buttons.value.map((el) => {
                  return <ElButton {...el}>{el.content}</ElButton>;
                })}
              </div>
            </ElFormItem>
          </ElForm>
        </div>
      </>
    );
  },
});
