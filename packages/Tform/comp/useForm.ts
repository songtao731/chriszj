export type direction = "vertical" | "horizonta";
export type size = "large" | "default" | "small";
export type column = '1'| '2' | '3'|'4';


export type dataItem = {
  label: string;
  prop: string;
  type: string;
  value?:any,
  span?:column
};



export interface Args {
  //标题
  title?: string;
  dataList: dataItem[];
  border?: boolean;
  column?: column ;
  direction?: direction;
  size?: size;
  extra?: string;
}

export const useForm = (args: Args) => {
  return args;
};
