import "./follow.css";
import { Link } from "react-router-dom";

const Follow = () => {
  return (
    <div className="follow white-text dark background cover">
      <div className="content index center-text">
        <h2>تابعنا</h2>
        <p>انضم إلينا في وسائل التواصل الاجتماعي وانتظرنا!</p>
        <ul className="links">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61559090888098&mibextid=abWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook center-text"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ghpower2024?igsh=MTdyMDZ3d2ttYnkyMA=="
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram center-text"></i>
            </a>
          </li>
          <li>
            <Link>
              <i className="fa-brands fa-x-twitter center-text"></i>
            </Link>
          </li>
          <li>
            <Link>
              <i className="fa-brands fa-youtube center-text"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Follow;
