import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Fixed from "../../components/fixed/fixed";
import { getInstituations } from "../../store/instituations";
import "./instituatioins.css";

const Instituations = () => {
  const dispatch = useDispatch();
  const instituations = useSelector(
    (state) => state.instituations.instituations
  );
  let numOfSlides;
  let slides = useRef();
  numOfSlides = Math.ceil(instituations.length / 9);

  useEffect(() => {
    dispatch(getInstituations());
    slides.current = document.querySelector(".slides");
  }, [dispatch]);

  for (let i = 1; i <= numOfSlides; i++) {
    let slide = document.createElement("div");
    slide.classList.add("button");
    slide.textContent = [i];
    slides.current && slides.current.appendChild(slide);
  }

  const card =
    instituations &&
    instituations.length > 0 &&
    instituations !== undefined &&
    instituations.map((el, key) => {
      return (
        <div className="card" key={key}>
          <Link to={`/ar/organizations/${el.name}`}>
            <div className="img">
              <img
                alt={el.logo}
                src={`http://localhost:3003/images/instituations/logo/${el.logo}`}
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
    <Fixed props="/en/organizations">
      <div className="head instituations">
        <h1 className="page-name">المؤسسات</h1>
      </div>
      <div className="hallo-page">
        <p>
          تعرف على قادة الصناعة والمؤسسات البحثية وصانعي السياسات لدفع اعتماد
          الهيدروجين الأخضر على نطاق عالمي.
        </p>
      </div>
      <div className="container instit">
        <div className="cards">{card}</div>
        <div className="slides"></div>
      </div>
    </Fixed>
  );
};

export default Instituations;
