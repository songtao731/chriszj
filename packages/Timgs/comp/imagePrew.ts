
import {
  buildProps,
  definePropType,
  isNumber,
  mutable,
} from "../../../node_modules/element-plus/es/utils";

import type { ExtractPropTypes } from "vue";
import { newImagePrew } from "./newUpload";


export const imageProps = buildProps({
...newImagePrew,
  /**
   * @description when enabling preview, use this flag to control whether clicking on backdrop can exit preview mode.
   */
  hideOnClickModal: Boolean,
  /**
   * @description image source, same as native.
   */
  src: {
    type: String,
    default: "",
  },
  /**
   * @description indicate how the image should be resized to fit its container, same as [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).
   */
  fit: {
    type: String,
    values: ["", "contain", "cover", "fill", "none", "scale-down"],
    default: "fill",
  },
  /**
   * @description Indicates how the browser should load the image, same as [native](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading)
   */
  loading: {
    type: String,
    values: ["eager", "lazy"],
  },
  /**
   * @description whether to use lazy load.
   */
  lazy: {
    type:Boolean,
    default:true
  },
  /**
   * @description the container to add scroll listener when using lazy load.
   */
  scrollContainer: {
    type: definePropType<string | HTMLElement | undefined>([String, Object]),
  },
  /**
   * @description allow big image preview.
   */
  previewSrcList: {
    type: definePropType<string[]>(Array),
    default: () => mutable([] as const),
  },
  /**
   * @description whether to append image-viewer to body. A nested parent element attribute transform should have this attribute set to `true`.
   */
  previewTeleported: Boolean,
  /**
   * @description set image preview z-index.
   */
  zIndex: {
    type: Number,
  },
  /**
   * @description initial preview image index, less than the length of `url-list`.
   */
  initialIndex: {
    type: Number,
    default: 4,
  },
  /**
   * @description whether the viewer preview is infinite.
   */
  infinite: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether the image-viewer can be closed by pressing ESC.
   */
  closeOnPressEscape: {
    type: Boolean,
    default: true,
  },
  /**
   * @description the zoom rate of the image viewer zoom event
   */
  zoomRate: {
    type: Number,
    default: 1.2,
  },
} as const);
export type ImageProps = ExtractPropTypes<typeof imageProps>;

export const imageEmits = {
  load: (evt: Event) => evt instanceof Event,
  error: (evt: Event) => evt instanceof Event,
  switch: (val: number) => isNumber(val),
  close: () => true,
  show: () => true,
};
export type ImageEmits = typeof imageEmits;
