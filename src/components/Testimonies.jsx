import React from "react";
import "./Navs.css";
import a from "./image/person1.jpg";
import b from "./image/person2.jpg";
import c from "./image/person3.jpg";
import d from "./image/person4.jpg";

const Testimonies = () => {
  const testt = [
    {
      name: "Omotayo Maria",
      img: a,
      content:
        " The most amazing part is the mouth watering features with that of iphone 15 pro max. My friends can't wait to get theirs which they have already placed order... ",
    },
    {
      name: "Blessing Odigwe",
      img: b,
      content:
        " This is the best phone in modern time with a long lasting battery capacity. When i first saw the offer i doubted but i was convinced to get it because of the payment on delivery service. I'm supper Excited...",
    },
    {
      name: "Collins Emmanuel",
      img: d,
      content:
        "The fact that I got the delivery at the appointed time is awesome, thanks Luxury Phones",
    },

    {
      name: "Doris James",
      img: c,
      content:
        "I so like the design and processing speed, just like a normal iphone. I don't have to break my savings because i want to get an iphone",
    },
  ];
  return (
    <div className="dicdsd">
      <div className="">
        <div className="tests">Testimonies of satisfied customers</div>
        <div className="container">
          <div className="gokili">
            <div className="row">
              {testt?.map((ui) => (
                <div className="col-12 col-lg-4 mb-4">
                  <div className="bombay">
                    <div className="bodeyty p-3">
                      <>
                        <div className="for-test-img">
                          <img src={ui.img} alt="" className="for-test-img" />
                        </div>
                        <div className="foe-test-name">{ui?.name}</div>
                        <div className="foe-test-content">{ui?.content}</div>
                      </>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
