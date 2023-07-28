import { type } from "os";

/**
 * @param {Number} number 时间戳
 * @param {String} format 格式 'Y/M/D h:m:s'
 * @return {String} 格式化后时间 '2020/02/02 12:12:00'
 */
export const formatTime = (number: number, format = 'Y/M/D h:m:s') => {
  const formatNumber = (n: number | string) => {
    n = n.toString();
    return n[1] ? n : `0${n}`;
  };

  const formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  const returnArr = [];

  const date = new Date(Number(number));

  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));

  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));

  for (const i in returnArr) {
 
    format = format.replace(formateArr[i], returnArr[i] as string);
    
  }
   if(/NaN/.test(format)){
    format='--'
   }
  return format;
};

//格式化金钱
export const formatMoney = (value: string | number) => {
  if (!value) return "0";
  const regex = /\d{1,3}(?=(\d{3})+(\.|$))/g // 替换规则
  value = String(Math.round(+value * Math.pow(10, 2))) // 乘100 四舍五入
  let integer = value.substr(0, value.length - 2).replace(regex, '$&,') // 最后两位前的为整数
  let decimal = value.substr(value.length - 2) // 最后两位为小数
  const result = `${integer || 0}.${decimal}`
  return result
}

//金额转大写
export const formatPriceToChinese = (currencyDigits: string | number) => {
  // Constants:
  const MAXIMUM_NUMBER = 99999999999.99;
  // Predefine the radix characters and currency symbols for output:
  const CN_ZERO = '零';
  const CN_ONE = '壹';
  const CN_TWO = '贰';
  const CN_THREE = '叁';
  const CN_FOUR = '肆';
  const CN_FIVE = '伍';
  const CN_SIX = '陆';
  const CN_SEVEN = '柒';
  const CN_EIGHT = '捌';
  const CN_NINE = '玖';
  const CN_TEN = '拾';
  const CN_HUNDRED = '佰';
  const CN_THOUSAND = '仟';
  const CN_TEN_THOUSAND = '万';
  const CN_HUNDRED_MILLION = '亿';
  const CN_SYMBOL = '';
  const CN_DOLLAR = '元';
  const CN_TEN_CENT = '角';
  const CN_CENT = '分';
  const CN_INTEGER = '整';

  // Variables:
  let integral; // Represent integral part of digit number.
  let decimal; // Represent decimal part of digit number.
  let outputCharacters;
  let parts: string | any[] = '';
  let zeroCount;
  let i;
  let p;
  let d;
  let ds;
  let quotient;
  let modulus;

  const radices = ['', CN_TEN, CN_HUNDRED, CN_THOUSAND];
  const bigRadices = ['', CN_TEN_THOUSAND, CN_HUNDRED_MILLION];
  const decimals = [CN_TEN_CENT, CN_CENT];

  const digits = [
    CN_ZERO,
    CN_ONE,
    CN_TWO,
    CN_THREE,
    CN_FOUR,
    CN_FIVE,
    CN_SIX,
    CN_SEVEN,
    CN_EIGHT,
    CN_NINE
  ];

  // Validate input string:
  currencyDigits = currencyDigits.toString();
  if (currencyDigits === '') {
    return '';
  }
  if (currencyDigits.match(/[^,.\d]/) !== null) {
    return '';
  }
  if (
    currencyDigits.match(
      /^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/
    ) == null
  ) {
    return '';
  }

  // Normalize the format of input digits:
  currencyDigits = currencyDigits.replace(/,/g, ''); // Remove comma delimiters.
  currencyDigits = currencyDigits.replace(/^0+/, ''); // Trim zeros at the beginning.
  // Assert the number is not greater than the maximum number.
  if (+currencyDigits > MAXIMUM_NUMBER) {
    return '';
  }

  // Process the coversion from currency digits to characters:
  // Separate integral and decimal parts before processing coversion:
  parts = currencyDigits.split('.');
  if (parts.length > 1) {
    // eslint-disable-next-line prefer-destructuring
    integral = parts[0];
    // eslint-disable-next-line prefer-destructuring
    decimal = parts[1];
    // Cut down redundant decimal digits that are after the second.
    decimal = decimal.substr(0, 2);
  } else {
    // eslint-disable-next-line prefer-destructuring
    integral = parts[0];
    decimal = '';
  }
  // Start processing:
  outputCharacters = '';
  // Process integral part if it is larger than 0:
  if (+integral > 0) {
    zeroCount = 0;
    for (i = 0; i < integral.length; i += 1) {
      p = integral.length - i - 1;
      d = integral.substr(i, 1);
      quotient = p / 4;
      modulus = p % 4;
      if (+d === 0) {
        zeroCount += 1;
      } else {
        if (zeroCount > 0) {
          outputCharacters += digits[0];
        }
        zeroCount = 0;
        outputCharacters += digits[Number(d)] + radices[modulus];
      }
      if (modulus === 0 && zeroCount < 4) {
        outputCharacters += bigRadices[quotient];
      }
    }
    outputCharacters += CN_DOLLAR;
  }
  // Process decimal part if there is:
  if (decimal !== '') {
    for (i = 0; i < decimal.length; i += 1) {
      d = decimal.substr(i, 1);
      ds = decimal.substr(-1, 1);
      if (+d === 0) {
        if (+ds === 0) {
          outputCharacters += '';
        } else {
          outputCharacters += digits[Number(d)];
        }
      } else {
        outputCharacters += digits[Number(d)] + decimals[i];
      }
    }
  }
  // Confirm and return the final output string:
  if (outputCharacters === '') {
    outputCharacters = CN_ZERO + CN_DOLLAR;
  }
  if (decimal === '') {
    outputCharacters += CN_INTEGER;
  }
  outputCharacters = CN_SYMBOL + outputCharacters;
  return outputCharacters;
};

interface FormatPrice {
  thousands?: boolean,
  number?: number,
  chinaPrice?:boolean
}


export const formatPrice = (number: number | string, format: FormatPrice) => {

  let result:string|number=''
  if (format.thousands) {
    result = formatMoney(number)
  }
  if(format.number){
    result = (+number).toFixed(2)
  }
  if(format.chinaPrice){
    result =number&&formatPriceToChinese(number)

  }


  return result
}