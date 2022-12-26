import { MONTH_LIST } from "../constants/constant";

export function isEmpty(value) {
  if (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  ) {
    return true;
  } else {
    return false;
  }
}

export const dateToMonthYear = (date) => {
  if (!date) return;
  const newDate = new Date(date)

  var m = newDate.getUTCMonth(); //Month from 0 to 11
  var y = newDate.getUTCFullYear();
  return MONTH_LIST[m] + ', ' + y;
};

export function removeEmptyElement(array) {
  const filtered = array.filter(function (el) {
    return !isEmpty(el);
  });
  return filtered
}