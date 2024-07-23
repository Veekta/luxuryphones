import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Navs.css";
import Form from "react-bootstrap/Form";
const SForm = () => {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [spinnerOn, setSpinnerOn] = useState(false);
  const [fullnname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [color, setColor] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [device, setDevice] = useState("");
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    setPrice(newQuantity * 175000);
    if (newQuantity > 1) {
      setPrice(`${newQuantity * 175000}`);
    }
    if (newQuantity === 3) {
      setPrice(`${newQuantity * 175000}`);
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSpinnerOn(!spinnerOn);
    emailjs
      .sendForm(
        "service_5qhv1kd",
        "template_p8fbkpk",
        form.current,
        "ErlduC2gxRkSrxBoS"
      )
      .then(
        (result) => {
          setSpinnerOn(spinnerOn);
          alert("Your order has been sent successfully!");
          form.current.reset(); // clears the form
          setQuantity(0);
          setPrice(0);
          setFullname("");
          setEmail("");
          setAddress("");
          setColor("");
          setPhoneNumber("");
          setDevice("");
        },
        (error) => {
          console.log(error.message);
        }
      );
  };

  return (
    <div id="" style={{ paddingTop: "20px" }}>
      <div className="bright">
        <div className="order" id="message">
          Very Important to Note!!!
        </div>
        <div className="cont" style={{ textTransform: "capitalize" }}>
          Lots of people always want to own the latest “IPHONE 15 PRO MAX” But
          can not afford it due to high cost (about #2,200,000naira). But you
          can now own the New IPHONE 15 PRO MAX without spending that huge
          amount of money. <br></br> <br></br>Kindly Note That This is Not The
          Apple Version But Rather The Android Version of iphone 15 pro Max That
          Has 100% Same looks and Functions As The Apple Version.
        </div>
        <div className="cont" style={{ textTransform: "capitalize" }}>
          Please Do Not Place Order If You're Not Ready To Receive Within 24hrs
          To 48hrs
        </div>
      </div>
      <div className="bright" style={{ marginTop: "70px" }}>
        <div className="order">Your order is just a click away.</div>
        <div className="cont">place your order now !!</div>
      </div>
      <div className="mt-5 mb-5">
        <Form ref={form}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 mb-5">
                <div>
                  <div className="oso">Full Name</div>
                  <input
                    type="text"
                    className="inoppp"
                    placeholder="Full Name"
                    name="full_name"
                    required
                    value={fullnname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-5">
                <div>
                  <div className="oso">Email</div>
                  <input
                    type="email"
                    className="inoppp"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-5">
                <div>
                  <div className="oso">Address</div>
                  <input
                    type="text"
                    className="inoppp"
                    placeholder="Address"
                    name="address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-5">
                <div>
                  <div className="oso">
                    Enter Color{" "}
                    <p style={{ fontSize: "15px", fontWeight: "500" }}>
                      (avaible color: white, black, and{" "}
                      <span style={{}}>darkblue</span>)
                    </p>
                  </div>
                  <input
                    type="text"
                    className="inoppp"
                    placeholder="Color"
                    name="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-5">
                <div>
                  <label className="oso" htmlFor="quantity-dropdown">
                    Quantity
                  </label>
                  <select
                    id="quantity-dropdown"
                    className="inoppp"
                    onChange={handleQuantityChange}
                    name="qty"
                    value={quantity}
                  >
                    <option value="">Choose a quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-5">
                <div>
                  <label className="oso" htmlFor="price-field">
                    Price
                  </label>
                  <input
                    type="text"
                    id="price-field"
                    className="inoppp"
                    placeholder="Price"
                    value={price.toLocaleString()}
                    readOnly
                    name="price"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-5">
                <div>
                  <div className="oso">Phone Number</div>
                  <input
                    type="number"
                    className="inoppp"
                    placeholder="Phone Number"
                    name="phone"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12 col-lg-4 mb-5">
                <div>
                  <label className="oso" htmlFor="color-dropdown">
                    Device
                  </label>
                  <select
                    id="color-dropdown"
                    className="inoppp"
                    name="device"
                    value={device}
                    onChange={(e) => setDevice(e.target.value)}
                  >
                    <option value="">Choose a Device</option>
                    <option value="iPhone 15 pro max android">
                      iPhone 15 pro max android
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <button
                  className={`submit ${
                    !fullnname ||
                    !email ||
                    !phoneNumber ||
                    !color ||
                    !quantity ||
                    !address | !price
                      ? "disabled"
                      : ""
                  }`}
                  onClick={sendEmail}
                  disabled={
                    !fullnname ||
                    !email ||
                    !phoneNumber ||
                    !color ||
                    !quantity ||
                    !address | !price
                  }
                >
                  Order now
                  {spinnerOn ? (
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  ) : null}
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SForm;
