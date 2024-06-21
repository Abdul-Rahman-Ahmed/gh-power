import { useEffect } from "react";
import "./conferences.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getConferences } from "../../store/conferences";
import Fixed from "../../components/fixed/fixed";

const Conferences = () => {
  const disPatch = useDispatch();
  const conferences = useSelector((state) => state.conferences.conferences);
  useEffect(() => {
    disPatch(getConferences());
  }, [disPatch]);
  const lang = useSelector((state) => state.Lang.Arabic);
  const card =
    conferences &&
    conferences.length > 0 &&
    conferences !== undefined &&
    conferences.map((el, key) => {
      return (
        <div className="card" key={key}>
          <Link
            to={`/${lang ? "ar" : "en"}/conferences/${el.name}`}
            state={{ id: el.id - 1 }}
          >
            <div className="img">
              <img
                alt={el.logo}
                src={`https://ghpower-1.onrender.com/images/conferences/logo/${el.logo}`}
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
    <Fixed props="/en/conferences">
      <div className="head confe">
        <h1 className="page-name">المؤتمرات</h1>
      </div>
      <div className="container conf">
        <div className="cards">{card}</div>
      </div>
    </Fixed>
  );
};

export default Conferences;
