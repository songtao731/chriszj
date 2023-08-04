export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'info'
  | 'danger'
  | 'text'
  | '';
export interface ButtonProps {
  size?:'medium' | 'small' | 'mini'
  type?: ButtonType
  disabled?: boolean
  icon?: string
  plain?: boolean
  link?: boolean
  round?: boolean
  circle?: boolean
  color?: string
  dark?: boolean

  /**
   * 按钮内容
   */
  content: string
  /**
   * 点击事件
   */
  onClick: (scope: any) => void
  /**
   * 是否隐藏
   */
  hidden?: boolean,
  click?: (scope: any) => void

}
export const ButtonTypeProps = {
  size: String,
  type: String,
  disabled: Boolean,
  icon: String,
  plain: Boolean,
  link: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,

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
  hidden: Boolean,

  click:Function



}
