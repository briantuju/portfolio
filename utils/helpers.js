import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";

// Extend dayjs
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);

// Guess the timezone and set it as default timezone
dayjs.tz.setDefault(dayjs.tz.guess());

/**
 * Helper class to work with date and time
 * @access public
 */
export class DayJSHelper {
  /**
   * Return relative time from now
   * @param {String} date
   */
  static fromNow(date) {
    return dayjs(date).fromNow();
  }

  /**
   * Get the formatted date according to the string
   * of tokens passed in
   * @param {String} date
   * @param {String} format
   */
  static formatDate(date, format) {
    return dayjs(date).format(format);
  }
}

/**
 * Calculate what state to return based on provided **SWR** object
 * @param {object} swrObj
 * @private
 */
export const swrState = (swrObj) => {
  /* 
    useSWR will always give us `error` and `data`, so we can
    destructure them from the `swrObj`
  */
  const { data, error } = swrObj;

  return {
    data,
    error,
    loading: !error && !data,
  };
};
