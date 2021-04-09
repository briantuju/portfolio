import useSWR from "swr";
import { fetcher } from "./api";
import { env } from "../utils/constants";
import { swrState } from "../utils/helpers";

export const useUserRepos = () => {
  const { data, error } = useSWR(
    `${env.github.url}users/${env.github.user}/repos`,
    fetcher
  );

  return swrState({ data, error });
};

export const useUserRepo = (repo) => {
  const { data, error } = useSWR(
    `${env.github.url}repos/${env.github.user}/${repo}`,
    fetcher
  );

  return swrState({ data, error });
};
