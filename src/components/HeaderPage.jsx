import React from "react";
import d from "./image/ip.png";
import "../components/Navs.css";

const HeaderPage = () => {
  return (
    <div id="home" className="mt-4">
      <div className="hero__background">
        <div className="goody">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",

                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div className="lp">Love the Power</div>
                  <div className="lp2">Love the Price</div>
                  <div className="demon">
                    Experience the wonder of elegant design with our new iphone
                    15 Pro Max (Android Replica). You can now use the iphone 15
                    pro max without going bankrupt
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-2">
                <div
                  className=" h-100"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // height: "50%",

                    marginBottom: "45px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // height: "50%",
                      flexDirection: "column",
                      marginBottom: "45px",
                    }}
                  >
                    <div className="oldPrice">₦ 250,000</div>
                    <div className="percent">
                      <div className="eueu">30% off</div>
                    </div>
                    <div className="oldPrice2">+</div>
                    <div className="oldPrice2">FREE DELIVERY SERVICES...</div>
                    <div className="newPrice">₦ 175,000</div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="idann">
                  <img src={d} alt="" className="idann" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
