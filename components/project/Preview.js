import Image from "next/image";
import PropTypes from "prop-types";

export default function ProjectPreview({ data }) {
  const { name, image, summary, links, techStack } = data;

  return (
    <div className="projects__item">
      <Image
        src={image}
        alt={name}
        width={350}
        height={250}
        layout="intrinsic"
        className="projects__item-img"
      />
      <h3 className="projects__item-title">{name}</h3>

      <p className="projects__item-tech-stack">
        {techStack.map((stack, i) => {
          if (stack.length > 0) {
            return <span key={stack + i}>{stack}</span>;
          }
        })}
      </p>

      <p className="projects__item-summary">{summary}</p>

      <p className="projects__item-links">{JSON.stringify(links, null, 2)}</p>
    </div>
  );
}

ProjectPreview.propTypes = {
  data: PropTypes.object.isRequired,
};
