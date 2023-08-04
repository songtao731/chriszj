/**
 * @param {Number} number 时间戳
 * @param {String} format 格式 'Y/M/D h:m:s'
 * @return {String} 格式化后时间 '2020/02/02 12:12:00'
 */
export declare const formatTime: (number: number, format?: string) => string;
export declare const formatMoney: (value: string | number) => string;
export declare const formatPriceToChinese: (currencyDigits: string | number) => string;
interface FormatPrice {
    thousands?: boolean;
    number?: number;
    chinaPrice?: boolean;
}
export declare const formatPrice: (number: number | string, format: FormatPrice) => string | number;
export {};
