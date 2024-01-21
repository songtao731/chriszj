import {
  ElCascader,
  ElDatePicker,
  ElFormItem,
  ElInput,
  ElOption,
  ElRadio,
  ElRadioGroup,
  ElSelect,
  ElSwitch,
} from "element-plus";
import { defineComponent, unref } from "vue";
import { EventFilter } from "./TableColumnItem";
import { valueFormat } from "../../utils/data";

import "../style/table.scss";
import { RadioItem } from "chriszj/BaseComps/radio";

export default defineComponent({
  props: ["data", "column", "dataList"],
  setup(props) {
    interface NewTableColumn {
      label: string;
      event: EventFilter;
    }

    //格式化搜索条件的格式
    const formatDataFn = (data: NewTableColumn) => {
      let placeholderValue = "";
      let options =
        unref(data.event.select?.options) ||
        unref(data.event.checkBox?.options) ||
        unref(data.event.radio?.options) ||
        [];

      switch (data.event.type) {
        case "input":
          if (data.event.input) {
            placeholderValue =
              data.event.input.placeholder || `请输入${data.label}`;
          } else {
            placeholderValue = `请输入${data.label}`;
          }

          break;
        case "select":
          if (data.event.select) {
            placeholderValue =
              data.event.select.placeholder || `请选择${data.label}`;

            //处理传入的options是自定义label和value key值的
            if (data.event.select.dictOptions) {
              options = options.map((el: any) => {
                return {
                  label: el[data.event.select?.dictOptions?.label as string],
                  value: el[data.event.select?.dictOptions?.value as string],
                };
              });
            }
          }
          break;
        case "date":
          placeholderValue =
            data.event.date?.placeholder || `请选择${data.label}`;
          if (data.event.date) {
            data.event.date.startPlaceholder =
              data.event.date.startPlaceholder || "请选择开始时间";
            data.event.date.endPlaceholder =
              data.event.date.endPlaceholder || "请选择结束时间";
          }
          break;
        case "cascader":
          if (data.event.cascader) {
            placeholderValue =
              data.event.cascader.placeholder || `请选择${data.label}`;
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

    const parseValue = (data: any, column: any) => {
      const { rules, prop, event } = column;
      const { row, $index } = data;
      let result = data[prop] || "--";

      switch (event.type) {
        case "input":
          result = (
            <ElFormItem
              prop={"dataList." + data.$index + "." + prop}
              rules={rules?rules.rules:[]}
              class={"inline"}
            >
              <ElInput
                v-model={data.row[prop]}
                {...event.input}
                placeholder={formatDataFn(column).placeholder}
              />
            </ElFormItem>
          );
          break;
        case "select":
          result = (
            <ElFormItem
              prop={"dataList." + $index + "." + prop}
              rules={rules?rules.rules:[]}
              class={"inline"}
            >
              <ElSelect
                v-model={row[prop]}
                clearable={true}
                {...event.select}
                placeholder={formatDataFn(column).placeholder}
              >
                {formatDataFn(column).options.map((ele: any, index: any) => {
                  return (
                    <ElOption
                      key={index}
                      label={ele.label}
                      value={column.event.select?.values ? ele : ele.value}
                    />
                  );
                })}
              </ElSelect>
            </ElFormItem>
          );
          break;

        case "date":
          result = (
            <ElFormItem
              prop={"dataList." + $index + "." + prop}
              rules={rules?rules.rules:[]}
              class={"inline"}
            >
              <ElDatePicker
                valueFormat={valueFormat[event.type as string]}
                editable={false}
                {...event.date}
                placeholder={formatDataFn(column).placeholder}
                v-model={row[prop]}
              ></ElDatePicker>
            </ElFormItem>
          );

          break;
        case "cascader":
          result = (
            <ElFormItem
              prop={"dataList." + $index + "." + prop}
              rules={rules?rules.rules:[]}
              class={"inline"}
            >
              <ElCascader
                clearable={true}
                v-model={row[prop]}
                placeholder={formatDataFn(column).placeholder}
                {...event.cascader}
              ></ElCascader>
            </ElFormItem>
          );

          break;
        case "switch":
          result = (
            <ElFormItem
              prop={"dataList." + $index + "." + prop}
              class={"inline"}
            >
              <ElSwitch v-model={row[prop]} {...event.switch}></ElSwitch>
            </ElFormItem>
          );
          break;
        default:
          break;
      }

      return result;
    };
    return () => <>{parseValue(props.data, props.column)}</>;
  },
});
