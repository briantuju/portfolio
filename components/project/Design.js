import Image from "next/image";
import { useEffect, useState } from "react";
import { retrieveDesignAssets } from "../../lib/contentful";

/* eslint-disable react/prop-types */
export const DesignProjectsPreview = ({ data }) => {
  const {
    title,
    file: { url, fileName },
  } = data;

  return (
    <div className="project-grid__item">
      <Image
        src={`https:${url}`}
        alt={fileName}
        width={320}
        height={220}
        layout="intrinsic"
        className="project-grid__item-img"
      />
      <h4 className="project-grid__item-title">{title}</h4>
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

  return (
    <>
      {state.data.length === 0 ? (
        <p>No design files found</p>
      ) : (
        state.data.map((item) => (
          <DesignProjectsPreview key={item.sys.id} data={item.fields} />
        ))
      )}
    </>
  );
}
