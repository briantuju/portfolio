import PropTypes from "prop-types";
import Preview from "./Preview";

export default function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p>No projects available</p>;
  }

  return (
    <div className="projects">
      {projects.map((project) => (
        <Preview key={project._id} data={project} />
      ))}
    </div>
  );
}
ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
};
