import "./instituation.css";
import Fixed from "../../components/fixed/fixed";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getInstituation,
  getPartners,
  getSocial,
} from "../../store/instituations";

const Instituation = () => {
  const dispatch = useDispatch();
  const name = useParams().instituationname;
  let instituation = useSelector(
    (state) => state.instituations.instituation
  )[0];

  useEffect(() => {
    instituation = undefined;
    dispatch(getInstituation(name));
    dispatch(getPartners(name));
    dispatch(getSocial(name));
  }, [dispatch, name]);

  const partners = useSelector((state) => state.instituations.partners);
  const social = useSelector((state) => state.instituations.social);

  const instituationView = instituation !== undefined && instituation && (
    <div className="instituation">
      <div
        className="cover"
        style={{
          backgroundImage: `url(https://ghpower-1.onrender.com/images/instituations/cover/${instituation.cover})`,
        }}
      >
        <div className="instituation-info container">
          <div className="instituation-name">
            {instituation.name}
            <a className="source" href={instituation.link} target="_blank">
              (الشركة)
            </a>
          </div>
          <p className="place">{instituation.place}</p>
        </div>
      </div>
      <div className="content container">
        <div className="des">{instituation.des}</div>
        {instituation.videolink ? (
          <iframe
            src={instituation.videolink}
            title="title"
            frameBorder={0}
          ></iframe>
        ) : (
          <div className="img">
            <img
              src={`https://ghpower-1.onrender.com/images/instituations/logo/${instituation.logo}`}
              alt="logo"
            />
          </div>
        )}
        <ul>
          {social &&
            social.length > 0 &&
            social !== undefined &&
            social.map((el, key) => {
              return (
                <li key={key} className={el.type}>
                  <a href={el.url} target="_blank">
                    <i className={`fa-brands fa-${el.type}`}></i>
                  </a>
                </li>
              );
            })}
        </ul>
      </div>
      {partners.length > 0 && partners !== undefined && (
        <div className="partners">
          <h2 className="title">الشركاء</h2>
          <div className="cards container">
            {partners.map((el, key) => {
              return (
                <a className="card" href={el.link} target="_blank" key={key}>
                  <div className="img">
                    <img
                      src={`https://ghpower-1.onrender.com/images/instituations/partners/${el.logo}`}
                    />
                  </div>
                  <div className="text">
                    <div className="text-content">
                      <h2>{el.name}</h2>
                      <p>{el.des}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
  return <Fixed>{instituationView}</Fixed>;
};

export default Instituation;
