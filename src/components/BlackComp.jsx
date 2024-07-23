import React from "react";
import "./Navs.css";
import d from "./image/iphone_15_5-removebg-preview.png";
import { Link } from "react-scroll";
const BlackComp = () => {
  return (
    <div className="black">
      <div className="tttt">iPhone 15 pro max (android replica)</div>
      <div className="pro">Pro. Beyond.</div>
      <div className="eto">
        <Link
          activeClass="active"
          to="message"
          spy={true}
          smooth={true}
          offset={-60}
          duration={300}
        >
          <button className="butt">buy now</button>
        </Link>
      </div>
      <div className="btbt">
        <img src={d} alt="" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default BlackComp;
