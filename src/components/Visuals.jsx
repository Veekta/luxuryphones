import React from "react";
import "./Navs.css";
import f from "./image/iphone-15-pro-max1.jpg";
import j from "./image/iphone 15 2.PNG";
const Visuals = () => {
  return (
    <div>
      <div className="ghfly">
        <div>
          <div className="new">New iPhone 15 Pro Max (Android replica)</div>
          <div className="juju">Great sizes.</div>
          {/* <div className="juju">Now with a splash of gold.</div> */}
        </div>
        <div className="mt-5">
          <img src={f} alt="" style={{ width: "100%" }} />
        </div>
        <div className="mt-5">
          <img src={j} alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default Visuals;
