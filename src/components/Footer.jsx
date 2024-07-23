import React from "react";
import "./Navs.css";

const Footer = () => {
  return (
    <div className="ryry" id="footer">
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 col-lg-6 damm">
            <div>
              <div className="ibfoi">
                For more informnation
                <div>Contact us on </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 damm">
            <div>
              <div className="face">Facebook</div>
              <div className="face">Twitter</div>
              <div className="face">Instagram</div>
              <div className="face">
                {" "}
                <a
                  href="tel:+2347066896994"
                  target="_blank"
                  rel="noreferrer"
                  className="call"
                >
                  Call us for enquiries
                </a>
              </div>
              <div className="face">
                {" "}
                <a
                  href="https://wa.me/+2347066896994/?text=Hi...I want to place order for the 15 pro max android 😍😍"
                  className="whatsapp-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-lg-4">fhfhfh</div> */}
        </div>
        <hr />
        <div className="pt-3 foote"> © 2023 all rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
