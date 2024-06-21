import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png";
import "../../css/all.css";
import "./header.css";
import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/dropMenu";

const Header = () => {
  const menuState = useSelector((state) => state.Menu.menu);
  const path = useLocation().pathname;
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const menuHandler = () => {
    dispatch(toggleMenu());
  };
  const links = (
    <Fragment>
      <li>
        <Link to="/" onClick={menuState && menuHandler}>
          الرئيسية
        </Link>
      </li>
      <li>
        <Link to="/ar/h2-about" onClick={menuState && menuHandler}>
          عن الهيدروجين الاخضر
        </Link>
      </li>
      <li>
        <Link to="/ar/organizations" onClick={menuState && menuHandler}>
          المؤسسات
        </Link>
      </li>
      <li>
        <Link to="/ar/conferences" onClick={menuState && menuHandler}>
          المؤتمرات
        </Link>
      </li>
      <li>
        <Link to="/ar/projects" onClick={menuState && menuHandler}>
          المشروعات
        </Link>
      </li>
      <li>
        <Link to="/ar/information-resources" onClick={menuState && menuHandler}>
          الانتاج الفكري
        </Link>
      </li>
      <li>
        <Link to="/ar/about-us" onClick={menuState && menuHandler}>
          عن الموقع
        </Link>
      </li>
      <li>
        <Link to="/ar/contact" onClick={menuState && menuHandler}>
          تواصل معنا
        </Link>
      </li>
    </Fragment>
  );

  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="homepage" />
      </Link>
      <ul className="nav-links">{links}</ul>
      <div className="bars" onClick={menuHandler}>
        <i className="fa-solid fa-bars"></i>
      </div>
      {menuState && (
        <div className="small-devices container">
          <div className="close" onClick={menuHandler}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="small center-text">{links}</ul>
        </div>
      )}
    </header>
  );
};

export default Header;
