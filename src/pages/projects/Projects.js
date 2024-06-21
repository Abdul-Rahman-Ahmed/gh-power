import "./projects.css";
import Fixed from "../../components/fixed/fixed";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProjects } from "../../store/projects";
import { Link } from "react-router-dom";

const Projects = () => {
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(getProjects());
  }, [disPatch]);
  const projects = useSelector((state) => state.projects.projects);
  const lang = useSelector((state) => state.Lang.Arabic);
  const card =
    projects &&
    projects.length > 0 &&
    projects !== undefined &&
    projects.map((el) => {
      return (
        <div className="card" key={el.id}>
          <Link
            to={`/${lang ? "ar" : "en"}/projects/${el.name}`}
            state={{ id: el.id - 1 }}
          >
            <div className="img">
              <img
                src={`https://ghpower-1.onrender.com/images/projects/logo/${el.logo}`}
                alt="logo"
              />
            </div>
            <div className="location-info">
              <h2 className="center-text">{el.name}</h2>
            </div>
          </Link>
        </div>
      );
    });
  return (
    <Fixed props="/en/projects">
      <div className="head projects">
        <h1 className="page-name">المشروعات</h1>
      </div>
      <div className="container projects">
        <div className="cards">{card}</div>
      </div>
    </Fixed>
  );
};
export default Projects;
