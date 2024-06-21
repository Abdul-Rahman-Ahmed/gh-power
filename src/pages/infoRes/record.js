import { useEffect } from "react";
import Fixed from "../../components/fixed/fixed";
import "./record.css";
import { useDispatch, useSelector } from "react-redux";
import { getRecord } from "../../store/records";

const Record = () => {
  const dispatch = useDispatch();
  const record = useSelector((state) => state.records.record[0]);
  useEffect(() => {
    dispatch(
      getRecord(
        "Evaluating an enhanced thermal response test (ETRT) with high groundwater flow"
      )
    );
  }, [dispatch]);

  const data = record && record !== undefined && (
    <div className="record container">
      <h1>
        {record.title}
        <a href={record.link} target="_blank">
          Article
        </a>
      </h1>
      <ul>
        <li>Anna Albers,</li>
        <li>Hagen Steger,</li>
        <li>Roman Zorn,</li>
        <li>Philipp Blum</li>
      </ul>
      <div>
        <span>Published:</span> {record.year}
      </div>
      <div className="abstract">
        <span>Abstract:</span> {record.abstract}
      </div>
    </div>
  );
  return <Fixed>{data}</Fixed>;
};

export default Record;
