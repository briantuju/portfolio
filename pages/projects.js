import Head from "next/head";
import { useState } from "react";
import LiveProjects from "../components/project/Live";
import DesignProjects from "../components/project/Design";

const views = {
  all: "all",
  projects: "projects",
  live: "live",
  design: "design",
};

export default function Projects() {
  // Component state
  const [state, setState] = useState({
    view: views.all,
    data: null,
  });

  const changeView = (e) => {
    const view = e.target.dataset.view;
    setState({ ...state, view });
  };

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
        {state.view === views.all && <LiveProjects />}

        {state.view === views.design && <DesignProjects />}
      </div>
    </div>
  );
}
