import React from "react";
import "./Navs.css";
import a from "./image/icon_13_camera__dke1rclw32oi_large.png";

import c from "./image/icon_5g__f6zugtbm15ua_large.png";

import f from "./image/icon_battery__wqowcbwj50y2_large.png";

import h from "./image/icon_face_id__eyzciiwkc5oy_large.png";
import i from "./image/icon_sos__d13do2p9n7qu_large.png";
import j from "./image/sim.png";
import k from "./image/iphoneicon.png";
import l from "./image/speaker.png";
import m from "./image/wifi-image.jpg";

const Features = () => {
  return (
    <div id="features">
      <div>
        <div className="container">
          <div className="awesome mb-3">
            Awesome features you can't resist !!!
          </div>

          <div className="row mt-5">
            <div className="col-12 col-lg-3 mb-5">
              <div className="eini">
                <div className="ipip">
                  <img src={c} alt="" className="ipip" />
                </div>

                <div className="ori">5G Network enabled</div>
              </div>
            </div>
            <div className="col-12 col-lg-3 mb-5">
              <div className="eini">
                <div className="ipip">
                  <img src={m} alt="" className="ipip" />
                </div>

                <div className="ori">
                  Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, hotspot
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 mb-5">
              <div className="eini">
                <div className="ipip">
                  <img
                    src={j}
                    alt=""
                    className="ipip"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div className="ori">2 Nano-SIM</div>
              </div>
            </div>
            <div className="col-12 col-lg-3 mb-5">
              <div className="eini">
                <div className="ipip">
                  <img
                    src={h}
                    alt=""
                    className="ipip"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div className="ori">
                  Face ID Enablement, Accelerometer, Proximity sensor and
                  Compass
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3 mb-5">
              <div className="eini">
                <div className="ipip">
                  <img
                    src={f}
                    alt=""
                    className="ipip"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div className="ori">
                  A whooping 6200 MAh Battery life capacity
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3 mb-5">
              <div className="eini">
                <div className="ipip">
                  <img
                    src={i}
                    alt=""
                    className="ipip"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div className="ori">crash detection</div>
              </div>
            </div>

            <div className="col-12 col-lg-3 mb-5">
              <div className="eini">
                <div className="ipip">
                  <img
                    src={k}
                    alt=""
                    className="ipip"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div className="ori">Ceramic Shield glass</div>

                <div className="ori">
                  100% Similarity and Design of iphone 15 pro max
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-3 mb-5">
              <div className="eini">
                <div className="ipip">
                  <img
                    src={k}
                    alt=""
                    className="ipip"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div className="ori">6.7 inches</div>
              </div>
            </div>

            <div className="col-12 col-lg-3 mb-5">
              <div className="eini">
                <div className="ipip">
                  <img
                    src={j}
                    alt=""
                    className="ipip"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div className="ori">Dual SIM (Nano-SIM, dual stand-by)</div>
              </div>
            </div>

            <div className="col-12 col-lg-3 mb-5">
              <div className="eini">
                <div className="ipip">
                  <img
                    src={l}
                    alt=""
                    className="ipip"
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                <div className="ori">Loud Speaker</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
