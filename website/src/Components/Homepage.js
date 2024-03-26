import React from "react";
import laptop from "../Components/images/laptop.jpg";
import headphones from "../Components/images/headphones.jpg";
import tablet from "../Components/images/tablet.jpg";
import smartwatch from "../Components/images/smartwatch.jpg";
import { Link } from "react-router-dom";
import { LiaShippingFastSolid } from "react-icons/lia";
import { HiOutlineGift } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import { BsCreditCard } from "react-icons/bs";

const Homepage = () => {
  return (
    <>
      <section className="section1">
        <div className="container">
          <div className="homerow1">
            <div className="col-6 homecol1">
              <div className="wrapperdiv">
                <div className="img1div" style={{ position: "relative" }}>
                  <img src={laptop} className="img1class" alt="laptop" />

                  <div
                    className="imgtext1div"
                    style={{
                      position: "absolute",
                      top: 50,
                      left: 15,
                      color: "white",
                    }}
                  >
                    <h4>Supercharged for PROS</h4>
                    <h1>Macbook 13 Pro</h1>
                    <p>From $1699.00 or $64.62/mo.</p>
                    <Link className="button">Buy Now</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 homecol2">
              <div className="wrapperdiv1">
                <div className="img2div" style={{ position: "relative" }}>
                  <img src={headphones} className="img2class" alt="laptop" />

                  <div
                    className="imgtext2div"
                    style={{
                      position: "absolute",
                      top: 60,
                      left: 10,
                      color: "white",
                    }}
                  >
                    <h4>Best Sale</h4>
                    <h1>Headphones</h1>
                    <p>Ultra low distortion</p>
                  </div>
                </div>

                <div className="img2div" style={{ position: "relative" }}>
                  <img src={tablet} className="img2class" alt="laptop" />

                  <div
                    className="imgtext2div"
                    style={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      color: "white",
                    }}
                  >
                    <h4>New Arrival</h4>
                    <h1>Buy IPad Air</h1>
                    <p>
                      From $599.00 or <br />
                      $49.91/mo. for 12mo
                    </p>
                  </div>
                </div>
              </div>

              <div className="wrapperdiv2">
                <div className="img22div" style={{ position: "relative" }}>
                  <img src={smartwatch} className="img22class" alt="laptop" />

                  <div
                    className="imgtext2div"
                    style={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      color: "white",
                    }}
                  >
                    <h4>15% off</h4>
                    <h1>Smartwatch 7</h1>
                    <p>Shop the latest band</p>
                    <p>styles and colors</p>
                  </div>
                </div>

                <div className="img22div" style={{ position: "relative" }}>
                  <img src={laptop} className="img22class" alt="laptop" />

                  <div
                    className="imgtext2div"
                    style={{
                      position: "absolute",
                      top: 50,
                      left: 10,
                      color: "white",
                    }}
                  >
                    {/* <h4>Supercharged for PROS</h4>
                    <h1>Macbook 13 Pro</h1>
                    <p>From $1699.00 or $64.62/mo.</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="container">
          <div className="homerow2">
            <div className="servicesdiv">
              <span className="forpadding">
                <LiaShippingFastSolid size={30} />
              </span>
              <span className="forpadding">
                <h4>Free shipping</h4>
                <h6 style={{ color: "gray" }}>From all orders above 100$</h6>
              </span>
            </div>

            <div className="servicesdiv">
              <span className="forpadding">
                <HiOutlineGift size={30} />
              </span>
              <span className="forpadding">
                <h4>Daily Surprise Offers</h4>
                <h6 style={{ color: "gray" }}>Save upto 25% off</h6>
              </span>
            </div>

            <div className="servicesdiv">
              <span className="forpadding">
                <BiSupport size={30} />
              </span>
              <span className="forpadding">
                <h4>Support 24/7</h4>
                <h6 style={{ color: "gray" }}>Shop with an expert</h6>
              </span>
            </div>

            <div className="servicesdiv">
              <span className="forpadding">
                <TbDiscount2 size={30} />
              </span>
              <span className="forpadding">
                <h4>Affordable Prices</h4>
                <h6 style={{ color: "gray" }}>Get factory direct price</h6>
              </span>
            </div>

            <div className="servicesdiv">
              <span className="forpadding">
                <BsCreditCard size={30} />
              </span>
              <span className="forpadding">
                <h4>Secure Payments</h4>
                <h6 style={{ color: "gray" }}>100% Protected Payments</h6>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="container">
          <div className="homerow3">

            <div className="eleccat">
              <div className="servicesdiv1">
                <span className="electxt">
                  <h4>Computers & Laptop</h4>
                  <h6 style={{ color: "gray" }}>8 items</h6>
                </span>
                <span className="electxt">
                  <TbDiscount2 size={30} />
                </span>
              </div>

              <div className="servicesdiv1">
                <span className="electxt">
                  <h4>Computers & Laptop</h4>
                  <h6 style={{ color: "gray" }}>8 items</h6>
                </span>
                <span className="electxt">
                  <TbDiscount2 size={30} />
                </span>
              </div>

              <div className="servicesdiv1">
                <span className="electxt">
                  <h4>Computers & Laptop</h4>
                  <h6 style={{ color: "gray" }}>8 items</h6>
                </span>
                <span className="electxt">
                  <TbDiscount2 size={30} />
                </span>
              </div>

              <div className="servicesdiv1">
                <span className="electxt">
                  <h4>Computers & Laptop</h4>
                  <h6 style={{ color: "gray" }}>8 items</h6>
                </span>
                <span className="electxt">
                  <TbDiscount2 size={30} />
                </span>
              </div>

              <div className="servicesdiv1">
                <span className="electxt">
                  <h4>Computers & Laptop</h4>
                  <h6 style={{ color: "gray" }}>8 items</h6>
                </span>
                <span className="electxt">
                  <TbDiscount2 size={30} />
                </span>
              </div>
            </div>

            <div className="eleccat">
              <div className="servicesdiv1">
                <span className="electxt">
                  <h4>Computers & Laptop</h4>
                  <h6 style={{ color: "gray" }}>8 items</h6>
                </span>
                <span className="electxt">
                  <TbDiscount2 size={30} />
                </span>
              </div>

              <div className="servicesdiv1">
                <span className="electxt">
                  <h4>Computers & Laptop</h4>
                  <h6 style={{ color: "gray" }}>8 items</h6>
                </span>
                <span className="electxt">
                  <TbDiscount2 size={30} />
                </span>
              </div>

              <div className="servicesdiv1">
                <span className="electxt">
                  <h4>Computers & Laptop</h4>
                  <h6 style={{ color: "gray" }}>8 items</h6>
                </span>
                <span className="electxt">
                  <TbDiscount2 size={30} />
                </span>
              </div>

              <div className="servicesdiv1">
                <span className="electxt">
                  <h4>Computers & Laptop</h4>
                  <h6 style={{ color: "gray" }}>8 items</h6>
                </span>
                <span className="electxt">
                  <TbDiscount2 size={30} />
                </span>
              </div>

              <div className="servicesdiv1">
                <span className="electxt">
                  <h4>Computers & Laptop</h4>
                  <h6 style={{ color: "gray" }}>8 items</h6>
                </span>
                <span className="electxt">
                  <TbDiscount2 size={30} />
                </span>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
