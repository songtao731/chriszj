import {
  defineComponent,
  reactive,
  ref,
  unref,
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
  ElRow,
  ElCol,
  ElCheckbox,
  ElCheckboxGroup,
  ElRadio,
  ElRadioGroup,
  ElRate,
  ElSwitch,
  ElSlider,
  ElInputNumber,
} from "element-plus";
import { formProps } from "./form";
import { dataItem } from "../../Tform/comp/useForm";
import "../../style/index.scss";
import { CheckBoxItem } from "../../BaseComps/checkBox";
import { RadioItem } from "../../BaseComps/radio";

import { Tupload } from "../../index";
import { getPath } from "../../utils/index";
import DesItemValue from "../../Tdescriptions/comps/DesItemValue";

export default defineComponent({
  props: formProps,
  emits: ["getParams"],

  setup(props, { emit, expose, slots }) {
    const formData: any = ref({});
    //filter:过滤条件,searchSize:查询条件框的大小 labelPosition:查询条件label的位置
    const { column, gutter, request } = props;

    //初始化数据 对象的
    const requestObj = computed(() => unref(props.request));
    //初始化静态数据
   const getData=()=>{
    if (typeof requestObj === "object") {
      Object.keys(formData.value).forEach((el) => {
        if (requestObj.value[el] || requestObj.value[el] === 0) {
          formData.value[el] = requestObj.value[el];

        }
      });

    }

   }
    watch(requestObj, (newObj: { [key: string]: any }) => {
      if (typeof newObj === "object") {
        Object.keys(formData.value).forEach((el) => {
          if (newObj[el] || newObj[el] === 0) {
            formData.value[el] = newObj[el];
          }
        });
      }
    },{deep:true});

    //初始化函数的
    let path = props.path || "data";

    const getDataList = async () => {
      let objData: { [key: string]: any } = {};
      if (typeof request === "function") {
        const res = await request!();
        objData = getPath(res, path);

        Object.keys(formData.value).forEach((el) => {
          if (objData[el]) {
            formData.value[el] = objData[el];
          }
        });

        if (props.parseData) {
          let objData = props.parseData(formData.value);
          Object.keys(objData).forEach((el) => {
            formData.value[el] = objData[el];
          });
        }
      }
    };
    //设置默认值
    const isReset = ref(false);
    const resetFn = (el: dataItem) => {
      switch (el.type) {
        case "checkBox":
          formData.value[el.prop as string] = [];
          break;
        case "rate":
          formData.value[el.prop as string] = 0;
          break;
        case "upload":
          formData.value[el.prop as string] = [];

          break;
        case "switch":
          formData.value[el.prop as string] = true;
          break;
        case "slider":
          formData.value[el.prop as string] = 0;
          break;
        case "range":
          el.columns && (formData.value[el.columns[0].prop as string] = "");
          el.columns && (formData.value[el.columns[1].prop as string] = "");
          break;
        case "inputNumber":
          formData.value[el.prop as string] = 0;
          break;
        //额外处理动态表单
        case "domains":
          if (!props.edit) {
            formData.value[el.keys as string] = [];
          } else {
            formData.value[el.keys as string] = el.domains;
          }
          el.domains &&
            el.domains.forEach((ele, index) => {
              let propKeys: { [key: string]: any } = {};
              if(ele.item){

              ele.item.forEach((els: dataItem) => {
                if (els.prop) {
                  propKeys[els.prop] = els.value || "";
                  switch (els.type) {
                    case "checkBox":
                      propKeys[els.prop] = els.value || [];
                      break;
                    case "upload":
                      propKeys[els.prop] = els.value || [];
                      break;
                    case "rate":
                      propKeys[els.prop] = els.value || 0;
                      break;
                    case "switch":
                      propKeys[els.prop] = els.value || true;
                      break;
                    case "slider":
                      propKeys[els.prop] = els.value || 0;
                      break;
                    case "inputNumber":
                      propKeys[els.prop] = els.value || 0;
                      break;
                    default:
                  }
                }
              });
            }

              formData.value[el.keys as string].push(propKeys);
              formData.value[el.keys as string][index]["chriskey"] =
                ele.chriskey;
            });

          break;
        //东条表单处理结束
        default:
          if (el.prop) {
            formData.value[el.prop as string] = "";
          }
      }
    };
    //获取循环的表单对象
    const dataList = computed(() => {
      return unref(props.dataList).filter((el) => {
        //深度隐藏 清楚数据
        if (el.deepHide) {
          formData.value[el.prop as string] = "";

          el.columns && (formData.value[el.columns[0].prop as string] = "");
          el.columns && (formData.value[el.columns[1].prop as string] = "");
        }

        return !(el.hide || el.deepHide);
      });
    });

    //初始化表单对象的数据
    watchEffect(() => {
      //接收转进来的栅格布局 数据转换24格

      if (dataList.value.length) {
        dataList.value.forEach((el) => {
          el.nospan = (el.span && +el.span * (24 / +column)) || 24 / +column;
          el.nospan = el.nospan && el.nospan > 24 ? 24 : el.nospan;

          el.placeholder = el.placeholder
            ? el.placeholder
            : el.label && el.label.replace(":", "");
          //单独处理日期范围
          if (el?.date) {
            el.date.startPlaceholder =
              el.date.startPlaceholder || "请选择开始时间";
            el.date.endPlaceholder = el.date.endPlaceholder || "请选择结束时间";
          }
          if (Array.isArray(el.columns)) {
            el.columns[0].placeholder =
              el.columns[0]?.placeholder || "请输入最小值";
            el.columns[1].placeholder =
              el.columns[1]?.placeholder || "请输入最大值";
          }
          if (el.type === "upload" && el.upload) {
            // el.upload.fileList = formData.value[el.prop as string];
          }

          //额外处理动态表单
          if (el.type === "domains") {
            if (formData.value[el.keys as string]) {
              //添加的逻辑
              if (
                el.domains &&
                el.domains.length > formData.value[el.keys as string].length
              ) {
                el.domains.forEach((ele, index) => {
                  if (
                    formData.value[el.keys as string].every(
                      (ela: any) => ela.chriskey != ele.chriskey
                    )
                  ) {
                    let propKeys: { [key: string]: any } = {};
                    ele.item.forEach((elb: any) => {
                      if (elb.prop) {
                        switch (elb.type) {
                          case "checkBox":
                            propKeys[elb.prop] = elb.value || [];
                            break;
                          case "upload":
                            propKeys[elb.prop] = elb.value || [];
                            break;
                          case "rate":
                            propKeys[elb.prop] = elb.value || 0;
                            break;
                          case "switch":
                            propKeys[elb.prop] = elb.value || true;
                            break;
                          case "slider":
                            propKeys[elb.prop] = elb.value || 0;
                            break;
                          case "inputNumber":
                            propKeys[elb.prop] = elb.value || 0;
                            break;
                          default:
                            propKeys[elb.prop] = elb.value || "";
                            break;
                        }
                      }
                    });

                    formData.value[el.keys as string].push({
                      ...propKeys,
                      chriskey: ele.chriskey,
                    });
                  }
                });
              } else if (
                el.domains &&
                el.domains.length < formData.value[el.keys as string].length
              ) {
                //删除的逻辑
                formData.value[el.keys as string].forEach(
                  (elc: any, ind: number) => {
                    if (
                      el.domains &&
                      el.domains.every((eld) => eld.chriskey !== elc.chriskey)
                    ) {
                      formData.value[el.keys as string].splice(ind, 1);
                    }
                  }
                );
              } else {
              }
            }

            el.domains &&
              el.domains.forEach((ela) => {
                if(ela.item){
                ela.item.forEach((el: any) => {
                  el.nospan =
                    (el.span && +el.span * (24 / +column)) || 24 / +column;
                  el.nospan = el.nospan && el.nospan > 24 ? 24 : el.nospan;

                  el.placeholder = el.placeholder
                    ? el.placeholder
                    : el.label && el.label.replace(":", "");
                  //单独处理日期范围
                  if (el?.date) {
                    el.date.startPlaceholder =
                      el.date.startPlaceholder || "请选择开始时间";
                    el.date.endPlaceholder =
                      el.date.endPlaceholder || "请选择结束时间";
                  }
                  if (Array.isArray(el.columns)) {
                    el.columns[0].placeholder =
                      el.columns[0]?.placeholder || "请输入最小值";
                    el.columns[1].placeholder =
                      el.columns[1]?.placeholder || "请输入最大值";
                  }
                  if (el.type === "upload" && el.upload) {
                    // el.upload.fileList = formData.value[el.prop as string];
                  }
                });
              }
              });
          }
          //动态表单处理结束
        });
      }
    });

    const buttons = computed(() => unref(props.buttons));

    //获取屏幕可视化宽度
    onMounted(() => {

      // console.log(dataList.value,requestObj.value)
      //dataList.value.length && requestObj.value   这个逻辑代推敲
      if (dataList.value.length) {
        dataList.value.forEach((el) => {
          //处理栅格布局
          resetFn(el);
          if (el.type === "range") {
            if (
              (el.columns && el?.columns[0].value) ||
              (el?.columns && el?.columns[0].value === 0)
            ) {
              formData.value[el.columns[0].prop as string] =
                el.columns[0].value;
            }
            if (
              (el?.columns && el?.columns[1].value) ||
              (el?.columns && el?.columns[1].value === 0)
            ) {
              formData.value[el.columns[1].prop as string] =
                el.columns[1].value;
            }
          } else if (el.value || el.value === 0) {
            formData.value[el.prop as string] = el.value;
          }
        });
      }

      if (typeof props.request === "function") {
        props.request && getDataList();
      }else if(typeof props.request === "object"){
            getData()
      }
      isReset.value = true;

      // 在这里可以加判断 第一次进页面 不加载数据,暂时不处理这个逻辑
    });
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
      dataList,
    });
    return () => (
      <>
        <div class="chris-form">
          {isReset.value ? (
            <ElForm ref={formRef} {...props} model={formData.value}>
              <ElRow gutter={gutter}>
                {Array.isArray(dataList.value) &&
                  dataList.value.map((el, index) => {

                    let element = null;
                    switch (el.type) {
                      case "space":
                        element = (
                          <ElCol span={el.nospan} key={el.label}>
                            <ElFormItem></ElFormItem>
                          </ElCol>
                        );
                        break;
                      case "custom":
                        element = (
                          <ElCol span={el.nospan} key={el.label}>
                            <ElFormItem
                              {...el}
                              rules={el.rules?.rules}
                              class="w-full"
                            >
                              {slots[el.slotName] &&
                                slots[el.slotName]({ scope: formData.value })}
                            </ElFormItem>
                          </ElCol>
                        );
                        break;
                      case "domains":
                        {
                          element =
                            el.domains &&
                            el.domains.map((ela, index) => {
                               if(ela.item){

                              return ela.item.map((ele: dataItem) => {
                                let newElement = null;
                                switch (ele.type) {
                                  case "space":
                                    newElement = (
                                      <ElCol
                                        span={ele.nospan}
                                        key={ela.chriskey + "chris"}
                                      >
                                        <ElFormItem></ElFormItem>
                                      </ElCol>
                                    );
                                    break;
                                  case "custom":
                                    newElement = (
                                      <ElCol
                                        span={ele.nospan}
                                        key={ela.chriskey + "chris"}
                                      >
                                        <ElFormItem
                                          {...ele}
                                          rules={ele.rules?.rules}
                                          class="w-full"
                                        >
                                          {slots[ele.slotName] &&
                                            slots[ele.slotName]({
                                              scope: {
                                                ...formData.value[el.keys][
                                                  index
                                                ],
                                                index,
                                              },
                                            })}
                                        </ElFormItem>
                                      </ElCol>
                                    );
                                    break;

                                  case "input":
                                    newElement = (
                                      <ElCol
                                        span={ele.nospan}
                                        key={+ela.chriskey + index + "input"}
                                      >
                                        <ElFormItem
                                          {...ele}
                                          key={ela.chriskey + "chris2"}
                                          rules={ele.rules?.rules}
                                          prop={
                                            el.keys +
                                            "." +
                                            index +
                                            "." +
                                            ele.prop
                                          }
                                          class="w-full"
                                        >
                                          <ElInput
                                            clearable={true}
                                            placeholder={changePlaceHolderFn(
                                              props.closePlaceholder,
                                              ele.showPlaceholder,
                                              "请输入" + ele.placeholder
                                            )}
                                            {...ele.input}
                                            v-model={
                                              formData.value[el.keys as string][
                                                index
                                              ][ele.prop as string]
                                            }
                                          />
                                        </ElFormItem>
                                      </ElCol>
                                    );
                                    break;
                                  case "inputNumber":
                                    newElement = (
                                      <ElCol
                                        span={ele.nospan}
                                        key={
                                          +ela.chriskey + index + "inputNumber"
                                        }
                                      >
                                        <ElFormItem
                                          {...ele}
                                          key={ela.chriskey + "chris2"}
                                          rules={ele.rules?.rules}
                                          prop={
                                            el.keys +
                                            "." +
                                            index +
                                            "." +
                                            ele.prop
                                          }
                                          class="w-full"
                                        >
                                          <ElInputNumber
                                            class="w-full"
                                            placeholder={changePlaceHolderFn(
                                              props.closePlaceholder,
                                              ele.showPlaceholder,
                                              "请输入" + ele.placeholder
                                            )}
                                            {...ele.inputNumber}
                                            v-model={
                                              formData.value[el.keys as string][
                                                index
                                              ][ele.prop as string]
                                            }
                                          />
                                        </ElFormItem>
                                      </ElCol>
                                    );
                                    break;
                                  case "select":
                                    newElement = (
                                      <ElCol
                                        span={ele.nospan}
                                        key={+ela.chriskey + index + "select"}
                                      >
                                        <ElFormItem
                                          {...ele}
                                          key={ela.chriskey + "chris2"}
                                          rules={ele.rules?.rules}
                                          prop={
                                            el.keys +
                                            "." +
                                            index +
                                            "." +
                                            ele.prop
                                          }
                                          class="w-full"
                                        >
                                          <ElSelect
                                            clearable={true}
                                            v-model={
                                              formData.value[el.keys as string][
                                                index
                                              ][ele.prop as string]
                                            }
                                            placeholder={changePlaceHolderFn(
                                              props.closePlaceholder,
                                              ele.showPlaceholder,
                                              "请选择" + ele.placeholder
                                            )}
                                            class="w-full"
                                            {...ele.select}
                                          >
                                            {ele.select &&
                                              Array.isArray(
                                                unref(ele.select.options)
                                              ) &&
                                              unref(ele.select.options).map(
                                                (els: any, index: any) => {
                                                  return (
                                                    <ElOption
                                                      key={el.label}
                                                      label={els.label}
                                                      value={
                                                        ele.select?.values
                                                          ? els
                                                          : els.value
                                                      }
                                                      disabled={ele.disabled}

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
                                    newElement = (
                                      <ElCol
                                        span={ele.nospan}
                                        key={+ela.chriskey + index + "date"}
                                      >
                                        <ElFormItem
                                          {...ele}
                                          key={ela.chriskey + "chris2"}
                                          rules={ele.rules?.rules}
                                          prop={
                                            el.keys +
                                            "." +
                                            index +
                                            "." +
                                            ele.prop
                                          }
                                          class="w-full"
                                        >
                                          <ElDatePicker
                                            clearable={true}
                                            class="!w-full"
                                            v-model={
                                              formData.value[el.keys as string][
                                                index
                                              ][ele.prop as string]
                                            }
                                            value-format="YYYY-MM-DD"
                                            placeholder={changePlaceHolderFn(
                                              props.closePlaceholder,
                                              ele.showPlaceholder,
                                              "请选择" + ele.placeholder
                                            )}
                                            {...ele.date}
                                          ></ElDatePicker>
                                        </ElFormItem>
                                      </ElCol>
                                    );

                                    break;
                                  case "range":
                                    newElement = (
                                      <ElCol
                                        span={ele.nospan}
                                        key={+ela.chriskey + index + "range"}
                                      >
                                        {ele.columns && (
                                          <ElFormItem
                                            label={ele.label}
                                            key={ela.chriskey + "chris2"}
                                            {...ele}
                                            class="w-full"
                                          >
                                            <ElCol span={11}>
                                              <ElFormItem
                                                rules={
                                                  ele.columns[0].rules?.rules
                                                }
                                                prop={
                                                  el.keys +
                                                  "." +
                                                  index +
                                                  "." +
                                                  ele.columns[0].prop
                                                }
                                                class="w-full"
                                              >
                                                <ElInput
                                                  clearable={true}
                                                  v-model={
                                                    formData.value[
                                                      el.keys as string
                                                    ][index][
                                                      ele.columns[0]!
                                                        .prop as string
                                                    ]
                                                  }
                                                  placeholder={changePlaceHolderFn(
                                                    props.closePlaceholder,
                                                    ele.showPlaceholder,
                                                    ele.columns[0].placeholder
                                                  )}
                                                  {...ele.columns[0]!.input}
                                                />
                                              </ElFormItem>
                                            </ElCol>
                                            <ElCol class="text-center" span={2}>
                                              <span class="text-gray-500">
                                                -
                                              </span>
                                            </ElCol>
                                            <ElCol span={11}>
                                              <ElFormItem
                                                rules={
                                                  ele.columns[1].rules?.rules
                                                }
                                                prop={
                                                  el.keys +
                                                  "." +
                                                  index +
                                                  "." +
                                                  ele.columns[1].prop
                                                }
                                                class="w-full"
                                              >
                                                <ElInput
                                                  clearable={true}
                                                  v-model={
                                                    formData.value[
                                                      el.keys as string
                                                    ][index][
                                                      ele.columns[1]!
                                                        .prop as string
                                                    ]
                                                  }
                                                  placeholder={changePlaceHolderFn(
                                                    props.closePlaceholder,
                                                    ele.showPlaceholder,
                                                    ele.columns[1].placeholder
                                                  )}
                                                  {...ele.columns[1]!.input}
                                                />
                                              </ElFormItem>
                                            </ElCol>
                                          </ElFormItem>
                                        )}
                                      </ElCol>
                                    );

                                    break;
                                  case "cascader":
                                    newElement = (
                                      <ElCol
                                        span={ele.nospan}
                                        key={+ela.chriskey + index + "cascader"}
                                      >
                                        <ElFormItem
                                          {...ele}
                                          key={ela.chriskey + "chris2"}
                                          rules={ele.rules?.rules}
                                          prop={
                                            el.keys +
                                            "." +
                                            index +
                                            "." +
                                            ele.prop
                                          }
                                          class="w-full"
                                        >
                                          <ElCascader
                                            clearable={true}
                                            v-model={
                                              formData.value[el.keys as string][
                                                index
                                              ][ele.prop as string]
                                            }
                                            placeholder={changePlaceHolderFn(
                                              props.closePlaceholder,
                                              ele.showPlaceholder,
                                              "请选择" + ele.placeholder
                                            )}
                                            class="w-full"
                                            {...ele.cascader}
                                          ></ElCascader>
                                        </ElFormItem>
                                      </ElCol>
                                    );

                                    break;
                                  case "checkBox":
                                    newElement = (
                                      <ElCol
                                        span={ele.nospan}
                                        key={+ela.chriskey + index + "checkBox"}
                                      >
                                        <ElFormItem
                                          {...ele}
                                          key={ela.chriskey + "chris2"}
                                          rules={ele.rules?.rules}
                                          prop={
                                            el.keys +
                                            "." +
                                            index +
                                            "." +
                                            ele.prop
                                          }
                                          class="w-full"
                                        >
                                          <ElCheckboxGroup
                                            v-model={
                                              formData.value[el.keys as string][
                                                index
                                              ][ele.prop as string]
                                            }
                                            {...ele.checkBox}
                                          >
                                            {unref(ele!.checkBox!.options)
                                              .length &&
                                              unref(ele!.checkBox!.options).map(
                                                (elc: CheckBoxItem) => {
                                                  return (
                                                    <ElCheckbox
                                                      {...elc}
                                                      label={elc.value}
                                                    >
                                                      {elc.label}
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
                                    newElement = (
                                      <ElCol
                                        span={ele.nospan}
                                        key={+ela.chriskey + index + "radio"}
                                      >
                                        <ElFormItem
                                          {...ele}
                                          key={ela.chriskey + "chris2"}
                                          rules={ele.rules?.rules}
                                          prop={
                                            el.keys +
                                            "." +
                                            index +
                                            "." +
                                            ele.prop
                                          }
                                          class="w-full"
                                        >
                                          <ElRadioGroup
                                            v-model={
                                              formData.value[el.keys as string][
                                                index
                                              ][ele.prop as string]
                                            }
                                            {...ele.radio}
                                          >
                                            {unref(ele!.radio!.options)
                                              .length &&
                                              unref(ele!.radio!.options).map(
                                                (elc: RadioItem) => {
                                                  return (
                                                    <ElRadio
                                                      {...elc}
                                                      label={elc.value}
                                                    >
                                                      {elc.label}
                                                    </ElRadio>
                                                  );
                                                }
                                              )}
                                          </ElRadioGroup>
                                        </ElFormItem>
                                      </ElCol>
                                    );
                                    break;

                                  case "upload":
                                    newElement = (
                                      <ElCol
                                        span={ele.nospan}
                                        key={+ela.chriskey + index + "upload"}
                                      >
                                        <ElFormItem
                                          {...ele}
                                          key={ela.chriskey + "chris2"}
                                          rules={ele.rules?.rules}
                                          prop={
                                            el.keys +
                                            "." +
                                            index +
                                            "." +
                                            ele.prop
                                          }
                                          class="w-full"
                                        >
                                          <Tupload
                                            v-model:fileList={
                                              formData.value[el.keys as string][
                                                index
                                              ][ele.prop as string]
                                            }
                                            {...ele.upload}
                                          ></Tupload>
                                        </ElFormItem>
                                      </ElCol>
                                    );
                                    break;
                                  case "rate":
                                    newElement = (
                                      <ElCol
                                        span={ele.nospan}
                                        key={+ela.chriskey + index + "rate"}
                                      >
                                        <ElFormItem
                                          {...ele}
                                          key={ela.chriskey + "chris2"}
                                          rules={ele.rules?.rules}
                                          prop={
                                            el.keys +
                                            "." +
                                            index +
                                            "." +
                                            ele.prop
                                          }
                                          class="w-full"
                                        >
                                          <ElRate
                                            v-model={
                                              formData.value[el.keys as string][
                                                index
                                              ][ele.prop as string]
                                            }
                                            clearable={true}
                                            {...ele.rate}
                                          ></ElRate>
                                        </ElFormItem>
                                      </ElCol>
                                    );
                                    break;
                                  case "switch":
                                    newElement = (
                                      <ElCol
                                        span={ele.nospan}
                                        key={+ela.chriskey + index + "switch"}
                                      >
                                        <ElFormItem
                                          {...ele}
                                          key={ela.chriskey + "chris2"}
                                          rules={ele.rules?.rules}
                                          prop={
                                            el.keys +
                                            "." +
                                            index +
                                            "." +
                                            ele.prop
                                          }
                                          class="w-full"
                                        >
                                          <ElSwitch
                                            v-model={
                                              formData.value[el.keys as string][
                                                index
                                              ][ele.prop as string]
                                            }
                                            {...ele.switch}
                                          ></ElSwitch>
                                        </ElFormItem>
                                      </ElCol>
                                    );
                                    break;
                                  case "slider":
                                    newElement = (
                                      <ElCol
                                        span={ele.nospan}
                                        key={+ela.chriskey + index + "slider"}
                                      >
                                        <ElFormItem
                                          {...ele}
                                          key={ela.chriskey + "chris2"}
                                          rules={ele.rules?.rules}
                                          prop={
                                            el.keys +
                                            "." +
                                            index +
                                            "." +
                                            ele.prop
                                          }
                                          class="w-full"
                                        >
                                          <ElSlider
                                            v-model={
                                              formData.value[el.keys as string][
                                                index
                                              ][ele.prop as string]
                                            }
                                            {...ele.slider}
                                          ></ElSlider>
                                        </ElFormItem>
                                      </ElCol>
                                    );
                                    break;
                                  default:
                                    newElement = (
                                      <ElCol
                                        span={ele.nospan}
                                        key={+ela.chriskey + index + "span"}
                                      >
                                        <ElFormItem
                                          {...ele}
                                          rules={ele.rules?.rules}
                                          prop={
                                            el.keys +
                                            "." +
                                            index +
                                            "." +
                                            ele.prop
                                          }
                                          class="w-full"
                                        >
                                          <DesItemValue
                                            item={ele}
                                            formData={
                                              formData.value[el.keys as string][
                                                index
                                              ]
                                            }
                                          ></DesItemValue>
                                        </ElFormItem>
                                      </ElCol>
                                    );
                                    break;
                                }
                                return newElement;
                              });
                            }

                            });
                        }

                        break;
                      case "input":
                        element = (
                          <ElCol span={el.nospan} key={el.label}>
                            <ElFormItem
                              {...el}
                              rules={el.rules?.rules}
                              class="w-full"
                            >
                              <ElInput
                                clearable={true}
                                v-model={formData.value[el.prop as string]}
                                placeholder={changePlaceHolderFn(
                                  props.closePlaceholder,
                                  el.showPlaceholder,
                                  "请输入" + el.placeholder
                                )}
                                {...el.input}
                              />
                            </ElFormItem>
                          </ElCol>
                        );
                        break;
                      case "inputNumber":
                        element = (
                          <ElCol span={el.nospan} key={el.label}>
                            <ElFormItem
                              {...el}
                              rules={el.rules?.rules}
                              class="w-full"
                            >
                              <ElInputNumber
                                v-model={formData.value[el.prop as string]}
                                class="w-full"
                                placeholder={changePlaceHolderFn(
                                  props.closePlaceholder,
                                  el.showPlaceholder,
                                  "请输入" + el.placeholder
                                )}
                                {...el.inputNumber}
                              />
                            </ElFormItem>
                          </ElCol>
                        );
                        break;
                      case "range":
                        element = (
                          <ElCol span={el.nospan} key={el.label}>
                            {el.columns && (
                              <ElFormItem
                                label={el.label}
                                {...el}
                                class="w-full"
                              >
                                <ElCol span={11}>
                                  <ElFormItem
                                    rules={el.columns[0].rules?.rules}
                                    prop={el.columns[0].prop}
                                    class="w-full"
                                  >
                                    <ElInput
                                      clearable={true}
                                      v-model={
                                        formData.value[
                                          el.columns[0]!.prop as string
                                        ]
                                      }
                                      placeholder={changePlaceHolderFn(
                                        props.closePlaceholder,
                                        el.showPlaceholder,
                                        el.columns[0].placeholder
                                      )}
                                      {...el.columns[0]!.input}
                                    />
                                  </ElFormItem>
                                </ElCol>
                                <ElCol class="text-center" span={2}>
                                  <span class="text-gray-500">-</span>
                                </ElCol>
                                <ElCol span={11}>
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
                                        formData.value[
                                          el.columns[1]!.prop as string
                                        ]
                                      }
                                      placeholder={changePlaceHolderFn(
                                        props.closePlaceholder,
                                        el.showPlaceholder,
                                        el.columns[1].placeholder
                                      )}
                                      {...el.columns[1]!.input}
                                    />
                                  </ElFormItem>
                                </ElCol>
                              </ElFormItem>
                            )}
                          </ElCol>
                        );

                        break;
                      case "select":
                        element = (
                          <ElCol span={el.nospan} key={el.label}>
                            <ElFormItem
                              {...el}
                              rules={el.rules?.rules}
                              class="w-full"
                            >
                              <ElSelect
                                clearable={true}
                                v-model={formData.value[el.prop as string]}
                                placeholder={changePlaceHolderFn(
                                  props.closePlaceholder,
                                  el.showPlaceholder,
                                  "请选择" + el.placeholder
                                )}
                                class="w-full"
                                {...el.select}
                              >
                                {el.select &&
                                  Array.isArray(unref(el.select.options)) &&
                                  unref(el.select.options).map(
                                  
                                    (ele: any, index: any) => {
                                      return (
                                        <ElOption
                                          key={el.label}
                                          label={ (el.select?.dictOptions?.label)?(ele[el.select?.dictOptions?.label]):ele.label}
                                          value={
                                            el.select?.values ? ele :(el.select?.dictOptions?.value)?(ele[el.select?.dictOptions?.value]):ele.value
                                          }
                                          disabled={ele.disabled}
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
                          <ElCol span={el.nospan} key={el.label}>
                            <ElFormItem
                              {...el}
                              rules={el.rules?.rules}
                              class="w-full"
                            >
                              <ElDatePicker
                                clearable={true}
                                class="!w-full"
                                v-model={formData.value[el.prop as string]}
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
                          <ElCol span={el.nospan} key={el.label}>
                            <ElFormItem
                              {...el}
                              rules={el.rules?.rules}
                              class=" w-full"
                            >
                              <ElCascader
                                clearable={true}
                                class="w-full"
                                v-model={formData.value[el.prop as string]}
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
                          <ElCol span={el.nospan} key={el.label}>
                            <ElFormItem
                              {...el}
                              rules={el.rules?.rules}
                              class="w-full"
                            >
                              <ElCheckboxGroup
                                v-model={formData.value[el.prop as string]}
                                {...el.checkBox}
                              >
                                {unref(el!.checkBox!.options).length &&
                                  unref(el!.checkBox!.options).map(
                                    (ele: CheckBoxItem, index: any) => {
                                      return (
                                        <ElCheckbox {...ele} label= { (el.checkBox?.dictOptions?.value)?(ele[el.checkBox?.dictOptions?.value]):ele.value}>

                                         { (el.checkBox?.dictOptions?.label)?(ele[el.checkBox?.dictOptions?.label]):ele.label}

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
                          <ElCol span={el.nospan} key={el.label}>
                            <ElFormItem
                              {...el}
                              rules={el.rules?.rules}
                              class="w-full"
                            >
                              <ElRadioGroup
                                {...el.radio}
                                v-model={formData.value[el.prop as string]}
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
                          <ElCol span={el.nospan} key={el.label}>
                            <ElFormItem
                              {...el}
                              rules={el.rules?.rules}
                              class="w-full"
                            >
                              <ElRate
                                v-model={formData.value[el.prop as string]}
                                clearable={true}
                                {...el.rate}
                              ></ElRate>
                            </ElFormItem>
                          </ElCol>
                        );
                        break;
                      case "upload":
                        element = (
                          <ElCol span={el.nospan} key={el.label}>
                            <ElFormItem {...el} rules={el.rules?.rules}>
                              <Tupload
                                v-model:fileList={
                                  formData.value[el.prop as string]
                                }
                                {...el.upload}
                              ></Tupload>
                            </ElFormItem>
                          </ElCol>
                        );
                        break;
                      case "switch":
                        element = (
                          <ElCol span={el.nospan} key={el.label}>
                            <ElFormItem
                              {...el}
                              rules={el.rules?.rules}
                              class="w-full"
                            >
                              <ElSwitch
                                v-model={formData.value[el.prop as string]}
                                {...el.switch}
                              ></ElSwitch>
                            </ElFormItem>
                          </ElCol>
                        );
                        break;
                      case "slider":
                        element = (
                          <ElCol span={el.nospan} key={el.label}>
                            <ElFormItem
                              {...el}
                              rules={el.rules?.rules}
                              class="w-full"
                            >
                              <ElSlider
                                v-model={formData.value[el.prop as string]}
                                {...el.slider}
                              ></ElSlider>
                            </ElFormItem>
                          </ElCol>
                        );
                        break;
                      default:
                        element = (
                          <ElCol span={el.nospan} key={el.label}>
                            <ElFormItem
                              {...el}
                              rules={el.rules?.rules}
                              class="w-full breakall"
                            >
                              <DesItemValue
                                item={el}
                                formData={formData.value}
                              ></DesItemValue>
                            </ElFormItem>
                          </ElCol>
                        );
                        break;
                    }
                    return element;
                  })}
              </ElRow>
              <ElFormItem>
                <div style={`width:100%;text-align:${props.buttonsAlign}`}>
                  {buttons.value.filter(el=>!el.hide).map((el) => {
                    return <ElButton {...el}>{el.content}</ElButton>;
                  })}
                </div>
              </ElFormItem>
            </ElForm>
          ) : (
            ""
          )}
        </div>
      </>
    );
  },
});
