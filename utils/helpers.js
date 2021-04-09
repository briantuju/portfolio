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
