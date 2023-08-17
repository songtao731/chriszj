import { UploadFile } from "element-plus";

export const handleDownload = (file: Partial<UploadFile>) => {
  const link = document.createElement("a");
  link.target = "_blank";
  // 将生成的 url 设置为 a.href 属性 （file.downloadUrl 属性也是一个链接，是一个自定义的链接）
  link.href = file.url || "";
  // 将 a 的 download 属性设置为我们想要下载的图片的名称，若 name 不存在则使用'图片'作为默认名称
  link.download = file.name || "图片";
  //触发相应事件
  link.click();
  //移除a标签
  link.remove();
};