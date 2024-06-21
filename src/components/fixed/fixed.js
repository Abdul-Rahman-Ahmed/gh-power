import { Fragment } from "react";
import HeaderEn from "../header/HeaderEn";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import FooterEn from "../footer/FooterEn";
import Trans from "../translate/trans";
import { useSelector } from "react-redux";

const Fixed = ({ children, props }) => {
  const Lang = useSelector((state) => state.Lang.Arabic);
  return Lang ? (
    <Fragment>
      <Trans path={props} />
      <Header />
      {children}
      <Footer />
    </Fragment>
  ) : (
    <Fragment>
      <HeaderEn />
      <Trans path={props} />
      {children}
      <FooterEn />
    </Fragment>
  );
};

export default Fixed;
