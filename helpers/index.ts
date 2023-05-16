import { format, isDate } from "date-fns";

export const formatDate = (date: string | Date, dateFormat = "dd MMM yyyy") => {
  if (isDate(date)) {
    return format(date as Date, dateFormat);
  }
  return format(new Date(date), dateFormat);
};
