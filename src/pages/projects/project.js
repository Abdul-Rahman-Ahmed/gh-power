import Fixed from "../../components/fixed/fixed";
import "./project.css";
import { useSelector, useDispatch } from "react-redux";
import { getProject, getProjects } from "../../store/projects";
import { Fragment, useEffect } from "react";
import { useParams } from "react-router";

const Project = () => {
  const disPatch = useDispatch();
  const name = useParams().projectname;

  const project = useSelector((state) => state.projects.project)[0];

  useEffect(() => {
    disPatch(getProject(name));
  });

  const projectView = project !== undefined && (
    <div className="project pro">
      <div className="about light background cover"></div>
      <h2 className="name">{project.name}</h2>
      <div className="content container">
        {project.cover && (
          <div className="img">
            <img
              src={`https://ghpower-1.onrender.com/images/projects/cover/${project.cover}`}
              alt="background"
            />
          </div>
        )}
        {project.video && (
          <div className="video">
            <video
              src={`https://ghpower-1.onrender.com/images/${project.video}`}
              controls
              title="background"
            />
          </div>
        )}
        <div className="text">
          <div>
            {project.startDate} - {project.endDate}
          </div>
          {project.link && (
            <a
              href={project.link}
              alt={project.name}
              target="_blank"
              rel="noreferrer"
            >
              {project.name}
            </a>
          )}
          <br />
          {project.pdf && (
            <a
              href={project.pdf}
              alt={project.pdf}
              target="_blank"
              rel="noreferrer"
            >
              pdf
            </a>
          )}
        </div>
      </div>
      <div className="overflow container bink-background">
        <h2>ملخص</h2>
        <p>{project.summary}</p>
        {project.objectives && (
          <Fragment>
            <br />
            <p>{project.objectives}</p>
          </Fragment>
        )}
        {project.important && (
          <Fragment>
            <br />
            <p>{project.important}</p>
          </Fragment>
        )}
        {project.exital && (
          <Fragment>
            <br />
            <p>{project.exital}</p>
          </Fragment>
        )}
      </div>
    </div>
  );

  return <Fixed>{projectView}</Fixed>;
};

export default Project;
