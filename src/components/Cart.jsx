import React from "react";
import "./Navs.css";
import a from "./image/14promaxblack.jpg";
import b from "./image/14promaxgold2.png";
import c from "./image/14promaxwhite.png";
import { Link } from "react-scroll";
const Cart = () => {
  return (
    <div className="hero__background">
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-lg-4 mb-5  d-flex justify-content-center">
              <div>
                <div className="height">
                  <img src={a} alt="" className="height" />
                </div>
                <div className="namee">i14 Pro Max</div>
                <div className="namee2">black</div>
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
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5  d-flex justify-content-center">
              <div>
                <div className="height">
                  <img src={c} alt="" className="height" />
                </div>
                <div className="namee">i14 Pro Max </div>
                <div className="namee2">White</div>
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
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5  d-flex justify-content-center">
              <div>
                <div className="height">
                  <img src={b} alt="" className="height" />
                </div>
                <div className="namee">i14 Pro Max</div>
                <div className="namee2">Gold</div>
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
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5  d-flex justify-content-center">
              <div>
                <div className="height">
                  <img src={c} alt="" className="height" />
                </div>
                <div className="namee">i14 Pro Max</div>
                <div className="namee2">White</div>
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
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5  d-flex justify-content-center">
              <div>
                <div className="height">
                  <img src={b} alt="" className="height" />
                </div>
                <div className="namee">i14 Pro Max </div>
                <div className="namee2">Gold</div>
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
              </div>
            </div>
            <div className="col-12 col-lg-4 mb-5  d-flex justify-content-center">
              <div>
                <div className="height">
                  <img src={a} alt="" className="height" />
                </div>
                <div className="namee">i14 Pro Max</div>
                <div className="namee2">Black</div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
