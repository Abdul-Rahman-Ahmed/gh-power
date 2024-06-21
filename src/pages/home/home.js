import { useSelector } from "react-redux";
import HomeAr from "./HomeAr";
import HomeEn from "./HomeEn";
import "./home.css";

const Home = () => {
  const Lang = useSelector((state) => state.Lang.Arabic);
  let body = document.querySelector("body").style;
  body.direction = Lang ? "rtl" : "ltr";
  return Lang ? <HomeAr /> : <HomeEn />;
};

export default Home;
