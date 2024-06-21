import { Link } from "react-router-dom";
import Fixed from "../../components/fixed/fixed";
import "./info.css";
const Info = () => {
  return (
    <Fixed props="/en/information-resources">
      <div className="head info">
        <h1 className="page-name">الانتاج الفكري</h1>
      </div>
      <div className="conf container">
        <div className="cards">
          <div className="card">
            <Link to="/information-resources/record">
              <h2>
                Evaluating an enhanced thermal response test (ETRT) with high
                groundwater flow
              </h2>
              <p>2024</p>
            </Link>
          </div>
        </div>
      </div>
    </Fixed>
  );
};

export default Info;
