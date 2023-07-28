//动态获取后台返回路径的方法

export const getPath = (value: any, path: string) => {
  const arr = path.split('.');
  arr.forEach((el: any) => {
    value = value[el];
  });
  return value
}





