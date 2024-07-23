import React from "react";
import "./Navs.css";
// import d from "./image/diff.jpg";
import g from "./image/xxxxxx.jpg";
const DiffColo = () => {
  return (
    <>
      <div className="mover">
        {/* <div className="ffff">Different colors just for you!!</div> */}
        <div className="mt-4">
          {/* <img src={d} alt="" style={{ width: "100%" }} /> */}
        </div>
        <div className="water-resistance">
          {/* <img src={w} alt="" style={{ width: "100%" }} /> */}
        </div>
      </div>
      <div className="bububu">
        <div className="container mt-3">
          <div>
            <div className="cere">Ceramic Shield</div>
            <div className="cere2">
              Tougher than any <br />
              smartphone glass.
            </div>
          </div>
          <div className="dhd">
            <div className="afa">
              Nano-ceramic crystals — which are harder than most metals — are
              fused into glass for far greater durability.
            </div>
            <div className=" baba afa">
              Our dual ion-exchange process also protects against nicks,
              scratches, and everyday wear and tear.
            </div>
          </div>
          <div className="alabi">
            <img src={g} alt="" className="jiji" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DiffColo;
