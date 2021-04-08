import Head from "next/head";
import { useState } from "react";
import { useProjects } from "../lib/projects";
import Button from "../components/Button";
import ProjectList from "../components/project/List";

const views = {
  all: "all",
  projects: "projects",
  live: "live",
  design: "design",
};

export default function Projects() {
  // Fetch projects from server
  const { data, error, loading } = useProjects();

  // Component state
  const [state, setState] = useState({
    view: views.all,
    data: data ? data.data : null,
  });

  const changeView = (e) => {
    const view = e.target.dataset.view;
    setState({ ...state, view });
  };

  if (loading) return <p>Loading...</p>;

  if (error) return null;

  return (
    <div className="projects">
      <Head>
        <title>Projects</title>
      </Head>

      <nav className="projects__nav">
        <button
          className="projects__nav-item"
          onClick={changeView}
          data-view={views.all}
        >
          All Projects
        </button>
        <button
          className="projects__nav-item"
          onClick={changeView}
          data-view={views.projects}
        >
          Github Projects
        </button>
        <button
          className="projects__nav-item"
          onClick={changeView}
          data-view={views.live}
        >
          Live Projects
        </button>
        <button
          className="projects__nav-item"
          onClick={changeView}
          data-view={views.design}
        >
          Design Files
        </button>
      </nav>

      <div className="projects__panel">
        <p>Projects Panel</p>
      </div>

      {/* <ProjectList projects={data.data} /> */}
    </div>
  );
}
