import { useSelector } from "react-redux";
import "./trans.css";
import { Link } from "react-router-dom";

const Trans = ({ path }) => {
  const Lang = useSelector((state) => state.Lang.Arabic);
  let body = document.querySelector("body").style;

  return (
    <Link to={path} onClick={(body.direction = Lang ? "rtl" : "ltr")}>
      <button className="trans" style={{ display: "none" }}>
        <i className="fa-solid fa-language"></i>
      </button>
    </Link>
  );
};

export default Trans;
