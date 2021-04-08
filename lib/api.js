import axios from "axios";
import { env } from "../utils/constants";

/**
 * Fetch API data
 * @param {String} url
 * @param {*} apiData
 * @param {String} method
 */
export const fetcher = async (url, apiData = null, method = "GET") => {
  // Get data
  const { data } = await axios({
    url: env.apiUrl + url,
    data: apiData,
    method,
  });

  // Return fetched data
  return data;
};
