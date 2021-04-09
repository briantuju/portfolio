import axios from "axios";

/**
 * Fetch API data
 * @param {String} url
 * @param {*} apiData
 * @param {String} method
 */
export const fetcher = async (url, apiData = null, method = "GET") => {
  // Get data
  const { data } = await axios({
    url,
    data: apiData,
    method,
  });

  // Return fetched data
  return data;
};
