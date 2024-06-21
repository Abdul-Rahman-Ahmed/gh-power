import "./footer.css";
import logo from "../../imgs/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="main container foot">
        <div className="info">
          <Link to="/">
            <img src={logo} className="logo" alt="code" />
          </Link>
          <p>لقد حان الوقت للانتقال الى الطاقة الخضراء لضمان غد افضل</p>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/ar/h2-about">عن الهيدروجين الاخضر</Link>
          </li>
          <li>
            <Link to="/ar/organizations">المؤسسات</Link>
          </li>
          <li>
            <Link to="/ar/conferences">المؤتمرات</Link>
          </li>
          <li>
            <Link to="/ar/projects">المشروعات</Link>
          </li>
          <li>
            <Link to="/ar/information-resources">الانتاج الفكري</Link>
          </li>
          <li>
            <Link to="/ar/about-us">عن الموقع</Link>
          </li>
        </ul>
        <ul className="follow-us">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61559090888098&mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ghpower2024?igsh=MTdyMDZ3d2ttYnkyMA=="
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <Link>
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-brands fa-youtube"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className="copy-right">&copy;2024 GH Power</div>
    </footer>
  );
};

export default Footer;
