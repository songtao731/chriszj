//动态获取后台返回路径的方法

export const getPath = (value: any, path: string) => {
  if (!value) {
    return []
  }
  const arr = path.split(".");

  arr.forEach((el: any) => {
    value = value[el];
  });
  return value;
};
export const getTotalPath = (value: any, path: string) => {
  if (!value) {
    return 0
  }
  const arr = path.split(".");

  arr.forEach((el: any) => {
    value = value[el];
  });

  return value;
};