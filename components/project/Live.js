/* eslint-disable react/prop-types */
import Image from "next/image";
import { useProjects } from "../../lib/projects";

const LiveProjectsPreview = ({ data }) => {
  const { name, image, summary, link, techStack } = data;

  return (
    <div className="project--live">
      <Image
        src={image}
        alt={name}
        width={350}
        height={250}
        layout="intrinsic"
        className="project--live-img"
      />
      <h4 className="project--live-title">{name}</h4>

      <p className="project--live-tech-stack">
        {techStack.map((stack, i) => {
          if (stack.length > 0) {
            return <span key={stack + i}>{stack}</span>;
          }
        })}
      </p>

      <p className="project--live-summary">{summary}</p>

      <p className="project--live-link">
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </p>
    </div>
  );
};

export default function LiveProjects() {
  // Fetch projects from server
  const { data, error, loading } = useProjects();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occured</p>;
  if (data && data.data.length === 0) {
    return <p className="no-items">I have not hosted any project yet</p>;
  }

  return (
    <div className="project-grid">
      {data.data.map((project) => (
        <LiveProjectsPreview key={project._id} data={project} />
      ))}
    </div>
  );
}
