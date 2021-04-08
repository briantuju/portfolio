import useSWR from "swr";
import { fetcher } from "./api";

/**
 * Calculate what state to return based on provided **SWR** object
 * @param {object} swrObj
 * @private
 */
const swrState = (swrObj) => {
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

export const useProject = (id) => {
  const { data, error } = useSWR("projects" + id, fetcher);

  return swrState({ data, error });
};

export const useProjects = () => {
  const { data, error } = useSWR("projects", fetcher);

  return swrState({ data, error });
};
