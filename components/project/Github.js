import { useUserRepos } from "../../lib/github";
import { DayJSHelper } from "../../utils/helpers";
import Icon from "../Icon";

/* eslint-disable react/prop-types */
export const GithubProjectsPreview = ({ data }) => {
  const { name, html_url, stargazers_count, updated_at } = data;

  return (
    <div className="project--github">
      <h4 className="project--github-title">{name}</h4>

      <div className="project--github-details">
        <span className="project--github-details-stars">
          <Icon name="star-outline" /> Stars:{" "}
          <strong>{stargazers_count}</strong>
        </span>

        <span className="project--github-details-updated">
          <Icon name="time-outline" /> Updated:{" "}
          <strong>{DayJSHelper.fromNow(updated_at)}</strong>
        </span>

        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          className="project--github-details-link"
        >
          View project
        </a>
      </div>
    </div>
  );
};

export default function GithubProjects() {
  const { data, error, loading } = useUserRepos();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>An error occured</p>;

  if (data && data.length === 0) return <p>No projects available</p>;

  return (
    <div className="project-grid">
      {data.map((repo) => (
        <GithubProjectsPreview key={repo.id} data={repo} />
      ))}
    </div>
  );
}
