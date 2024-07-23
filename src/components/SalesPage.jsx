import React from "react";
import BlackComp from "./BlackComp";
// import Cart from "./Cart";s
import DiffColo from "./DiffColo";
import Features from "./Features";
import SForm from "./SForm";

import "./Navs.css";
const SalesPage = () => {
  return (
    <div id="products">
      {/* <div className="ghfly mt-5">
        <div>
          <div className="jujubig">
            Which 15 Pro Max Android is right for you?
          </div>
        </div>
      </div> */}
      {/* <Cart /> */}
      <div className="bright" style={{ marginTop: "50px" }}>
        <div className="order">Click Icon To Order Via Whatsapp.</div>
        <div>
          {" "}
          <a
            href="https://wa.me/+2347066896994/?text=Hi...I want to place order for the 15 pro max android 😍😍"
            className="whatsapp-button2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
        <div className="cont" style={{ textTransform: "capitalize" }}>
          07066896994
        </div>
      </div>
      <Features />
      <SForm />
      <BlackComp />
      <DiffColo />
    </div>
  );
};

export default SalesPage;
