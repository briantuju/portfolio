import Head from "next/head";
import { useState } from "react";
import LiveProjects from "../components/project/Live";
import DesignProjects from "../components/project/Design";
import GithubProjects from "../components/project/Github";

const views = {
  live: "LIVE_PROJECTS",
  design: "DESIGN_PROJECTS",
  github: "GITHUB_PROJECTS",
};

export default function Projects() {
  // Component state
  const [state, setState] = useState({
    data: null,
    view: views.live,
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
          data-view={views.live}
        >
          Live Projects
        </button>

        <button
          className="projects__nav-item"
          onClick={changeView}
          data-view={views.github}
        >
          Github Projects
        </button>

        <button
          className="projects__nav-item"
          onClick={changeView}
          data-view={views.design}
        >
          Design Projects
        </button>
      </nav>

      <div className="projects__panel">
        {state.view === views.live && <LiveProjects />}

        {state.view === views.design && <DesignProjects />}

        {state.view === views.github && <GithubProjects />}
      </div>
    </div>
  );
}
