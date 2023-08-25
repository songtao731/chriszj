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
  ElCheckbox,
  ElCheckboxGroup,
  ElRadio,
  ElRadioGroup,
  ElRate,
} from "element-plus";
import { formProps } from "./form";
import { dataItem } from "../../Tform/comp/useForm";
import "../../style/index.scss";
import { CheckBoxItem } from "../../BaseComps/checkBox";
import { RadioItem } from "../../BaseComps/radio";

import { Tupload } from "../../index";

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
        case "checkBox":
          formData[el.prop as string] = [];
          break;
        case "rate":
          formData[el.prop as string] = 0;
          break;
        case "upload":
          formData[el.prop as string] = [];
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
        case "4":
          props.dataList.forEach((el) => {
            el.nospan = (el.span && +el.span * 6) || 6;
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
                        <ElCol span={el.nospan}>
                          <ElFormItem {...el} rules={el.rules?.rules}>
                            <ElCascader
                              clearable={true}
                              class="w-full"
                              v-model={formData[el.prop as string]}
                              placeholder={changePlaceHolderFn(
                                props.closePlaceholder,
                                el.showPlaceholder,
                                "请选择" + el.placeholder
                              )}
                              {...el.cascader}
                            ></ElCascader>
                          </ElFormItem>
                        </ElCol>
                      );
                      break;
                    case "checkBox":
                      element = (
                        <ElCol span={el.nospan}>
                          <ElFormItem {...el} rules={el.rules?.rules}>
                            <ElCheckboxGroup
                              v-model={formData[el.prop as string]}
                              {...el.checkBox}
                            >
                              {unref(el!.checkBox!.options).length &&
                                unref(el!.checkBox!.options).map(
                                  (ele: CheckBoxItem, index: any) => {
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
                      );
                      break;
                    case "radio":
                      element = (
                        <ElCol span={el.nospan}>
                          <ElFormItem {...el} rules={el.rules?.rules}>
                            <ElRadioGroup
                              v-model={formData[el.prop as string]}
                              {...el.checkBox}
                            >
                              {unref(el!.radio!.options).length &&
                                unref(el!.radio!.options).map(
                                  (ele: RadioItem, index: any) => {
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
                      );
                      break;
                    case "rate":
                      element = (
                        <ElFormItem {...el} rules={el.rules?.rules}>
                          <ElRate
                            v-model={formData[el.prop as string]}
                            clearable={true}
                            {...el.rate}
                          ></ElRate>
                        </ElFormItem>
                      );
                      break;
                    case "upload":
                      element = (
                        <ElFormItem {...el} rules={el.rules?.rules}>
                          <Tupload
                            v-model:fileList={formData[el.prop as string]}
                            {...el.upload}
                          ></Tupload>
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
