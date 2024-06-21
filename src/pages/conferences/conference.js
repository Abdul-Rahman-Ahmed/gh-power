import Fixed from "../../components/fixed/fixed";
import "./conference.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getConference, getSponsers } from "../../store/conferences";
import { useEffect, useRef } from "react";

const Conference = () => {
  const disPatch = useDispatch();
  const name = useParams().conferencename;
  const conference = useSelector((state) => state.conferences.conference)[0];
  let sponsers = useRef();

  useEffect(() => {
    disPatch(getConference(name));
    disPatch(getSponsers(name));
  });
  sponsers.current = useSelector((state) => state.conferences.sponsers);

  const conferenceView = conference !== undefined && conference && (
    <div className="conf">
      <div className="about light background cover"></div>
      <h2 className="name">{conference.name}</h2>
      <div className="content container">
        <div className="img">
          <iframe
            title="video"
            src={conference.video}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="text">
          <div>{conference.time}</div>
          <div>{conference.place}</div>
          <button>
            <a href={conference.agenda}>{conference.name}</a>
          </button>
        </div>
      </div>
      <div className="overflow container pink-background">
        <h2>ملخص</h2>
        <p>{conference.descripation}</p>
      </div>
    </div>
  );

  return <Fixed>{conferenceView}</Fixed>;
};

export default Conference;
