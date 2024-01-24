import {
  definePropType,
  iconPropType,
} from "../../node_modules/element-plus/es/utils";
import { Component } from "@vue/runtime-dom";
import { buttonNativeTypes } from "element-plus";
import { Loading } from "@element-plus/icons-vue";

export type ButtonType =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "info"
  | "danger"
  | "text"
  | "";
export interface ButtonProps {
  hide?: boolean;
  size?: "large" | "default" | "small";
  type?: ButtonType;
  disabled?: boolean;
  nativeType?: "button" | "submit" | "reset";
  plain?: boolean;
  text?: boolean;
  bg?: boolean;
  link?: boolean;
  loading?: boolean;
  round?: boolean;
  circle?: boolean;
  loadingIcon?: string | Component;
  icon?: string | Component;
  autofocus?: boolean;
  autoInsertSpaces?: boolean;
  tag?: string | Component;
  color?: string;
  dark?: boolean;
  ref?: any;

  /**
   * 按钮内容
   */
  content: string;
  /**
   * 点击事件
   */
  onClick: (scope: any) => void;
  /**
   * 是否隐藏
   */
  hidden?: boolean;
  click?: (scope: any) => void;
}
export const ButtonTypeProps = {
  size: String,
  type: String,
  disabled: Boolean,
  icon: iconPropType,
  plain: Boolean,
  link: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: "button",
  },

  text: Boolean,
  bg: Boolean,
  loading: Boolean,

  loadingIcon: {
    type: iconPropType,
    default: () => Loading,
  },
  autofocus: Boolean,
  autoInsertSpaces: Boolean,
  tag: {
    type: definePropType<string | Component>([String, Object]),
    default: "button",
  },
  /**
   * 按钮内容
   */
  content: String,
  /**
   * 点击事件
   */
  onClick: Function,
  /**
   * 是否隐藏
   */
  hide: Boolean,

  click: Function,
};
