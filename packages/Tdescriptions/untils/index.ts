import { unref } from "vue";

import { formatPrice, formatTime } from "../../TableList/utils/format";
import { desItem } from "../comps/useDescriptions";
import { labelEnum, searchTree } from "../../utils";

export const parseValue = (
  formData: { [key: string]: any },
  item: desItem,
) => {
  const { formatType, prop, dictData, dictOptions, value } = item;

  //初始化字典 tree参数
  const options = labelEnum(dictOptions);

  //value存在

  //prop存在 赋值不存在返回null.prop不存在 则直接赋值value  space站位符的作用

  let result;
  if (formData[prop as string] === 0) {
    //处理数据为0 的情况
    result = 0;
  } else if (item.type === "prew" && !formData[prop as string]) {
    //处理数据不存在 并且为预览图的情况
    result = [];
  } else {
    result = prop ? formData[prop as string] || "--" : value ? value : null;
  }

  //处理枚举 字典
  if (dictData && unref(dictData).length) {

    const findData = searchTree(unref(dictData), result, options);

    result = (findData && findData[options.useDictLabel]) || "--";

  }
  //格式化数字
  if (formatType) {
    switch (formatType) {
      case "price":
        result = formatPrice(result, { thousands: true });
        break;
      case "priceChinese":
        result = formatPrice(result, { chinaPrice: true });
        break;
      case "date":
        result = formatTime(result, "Y-M-D");
        break;
      case "dateTime":
        result = formatTime(result);
      default:
        break;
    }
  }

  if (item.formatter) {
    result = item.formatter(formData);
  }

  return result;
};
