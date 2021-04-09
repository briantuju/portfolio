import useSWR from "swr";
import { fetcher } from "./api";
import { env } from "../utils/constants";
import { swrState } from "../utils/helpers";

export const useProject = (id) => {
  const { data, error } = useSWR(`${env.apiUrl}projects/${id}`, fetcher);

  return swrState({ data, error });
};

export const useProjects = () => {
  const { data, error } = useSWR(`${env.apiUrl}projects`, fetcher);

  return swrState({ data, error });
};
