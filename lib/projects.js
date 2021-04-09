import useSWR from "swr";
import { fetcher } from "./api";
import { swrState } from "../utils/helpers";

export const useProject = (id) => {
  const { data, error } = useSWR("projects" + id, fetcher);

  return swrState({ data, error });
};

export const useProjects = () => {
  const { data, error } = useSWR("projects", fetcher);

  return swrState({ data, error });
};
