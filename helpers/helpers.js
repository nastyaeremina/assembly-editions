import { MONTH_LIST } from '../constants/constant';

export function isEmpty(value) {
  if (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  ) {
    return true;
  } else {
    return false;
  }
}
/**
 * @desc Checks for valid email
 * @param {*} value // Accepts string
 */
export function isEmail(value) {
  // eslint-disable-next-line max-len
  var myRegEx =
    // eslint-disable-next-line max-len
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var isValid = myRegEx.test(value);
  return isValid ? true : false;
}

export const dateToMonthYear = (date) => {
  if (!date) return;
  const newDate = new Date(date);

  var m = newDate.getUTCMonth(); //Month from 0 to 11
  var y = newDate.getUTCFullYear();
  return MONTH_LIST[m] + ', ' + y;
};

export function removeEmptyElement(array) {
  const filtered = array.filter(function (el) {
    return !isEmpty(el);
  });
  return filtered;
}

export function separateSpecialChar(title) {
  const titleSplitList = title?.split(',');
  const seprateWithDotList = titleSplitList?.join(`<span>,</span>`)?.split('.');
  const finalTitle = seprateWithDotList?.join(`<span>.</span>`);
  return finalTitle;
}

export function convertHighlights(value) {
  const newList = [];
  var result = value.split(/\[(.*?)\]/);
  result.forEach((element) => {
    if (!isEmpty(element)) {
      const roundedList = element.split(/\((.*?)\)/) ?? [];
      if (!isEmpty(roundedList)) newList.push({ title: roundedList[1], desc: roundedList[3] });
    }
  });
  return newList;
}
