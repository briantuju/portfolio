import Image from "next/image";
import { useEffect, useState } from "react";
import { retrieveDesignAssets } from "../../lib/contentful";

/* eslint-disable react/prop-types */
export const DesignProjectsPreview = ({ data }) => {
  console.log(data);
  const {
    title,
    description,
    file: { url, fileName },
  } = data;

  return (
    <div className="project--design">
      <Image
        src={`https:${url}`}
        alt={fileName}
        width={420}
        height={300}
        layout="intrinsic"
        className="project--design-img"
      />
      <h4 className="project--design-title">{title}</h4>

      {description && (
        <p className="project--design-description">{description}</p>
      )}

      <p className="project--design-link">
        <a
          href={`https:${url}`}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          View asset
        </a>
      </p>
    </div>
  );
};

export default function DesignProjects() {
  // Component state
  const [state, setState] = useState({
    loading: true,
    error: false,
    data: null,
  });

  // Get assets on component mount
  useEffect(() => {
    const listAssests = async () => {
      try {
        const assets = await retrieveDesignAssets();

        setState({ ...state, loading: false, data: assets.items });
      } catch (error) {
        setState({ ...state, error: true });
      }
    };

    listAssests();

    // Always return a clean up function if performing state updates
    return () => {
      setState({ ...state });
    };
  }, []);

  if (state.loading) return <p>Loading...</p>;

  if (state.error) return <p>An error occured.</p>;

  if (state.data && state.data.length === 0) {
    return (
      <p className="no-items">I haven&apos;t uploaded any design file yet</p>
    );
  }

  return (
    <div className="project-grid">
      {state.data.map((item) => (
        <DesignProjectsPreview key={item.sys.id} data={item.fields} />
      ))}
    </div>
  );
}
