import React from "react";
import "../style/Sellerplan.css";
import SellerplanFAQ from "../components/SellerplanFAQ";
import pic1 from "../assets/images/ownerplan_sprite_1.png";
import pic2 from "../assets/images/ownerplan_sprite_2.png";
import pic3 from "../assets/images/ownerplan_sprite_4.png";
import pic4 from "../assets/images/ownerplan_sprite_5.png";
import pic5 from "../assets/images/ownerplan_sprite_6.png";
import pic6 from "../assets/images/ownerplan_sprite_7.png";

function Sellerplan() {
  return (
    <>
      <div className="container">
        <div className="top text-center pb-5 mt-28">
          <div
            className=""
            style={{
              fontSize: "30px",
              color: "#464646",
              letterSpacing: ".3px",
              marginTop: "15px",
            }}
          >
            Get Buyers Quickly.
            <span className="" style={{ color: "#ff5800" }}>
              SAVE LAKHS{" "}
            </span>
            on Brokerage
          </div>
          <div className="" style={{ fontSize: "22px", color: "#464646" }}>
            For assistance call us at :
            <span className="" style={{ color: "#ff5800" }}>
              +91-83-060-037-65
            </span>
          </div>
        </div>

        <div
          className="row d-flex align-items-center"
          style={{
            paddingTop: "10px",
            color: "#464646",
            width: "76%",
            marginLeft: "300px",
          }}
        >
          <div
            className="col d-flex align-items-center justify-content-center py-4 px-4"
            style={{
              backgroundColor: "#f8f8f8",
              borderTopRightRadius: "4px",
              borderTopLeftRadius: "4px",
              fontSize: "14px",
            }}
          >
            <img
              alt="getTenants"
              src="https://assets.nobroker.in/static/img/owner_plan_icons/wallet.svg"
              style={{ marginRight: "8px" }}
            />
            Get Buyer Faster &amp; Save Brokerage
          </div>
          <div
            className="col d-flex align-items-center justify-content-center py-3 px-4"
            style={{
              backgroundColor: "#fff7f3",
              borderTopRightRadius: "4px",
              borderTopLeftRadius: "4px",
              fontSize: "14px",
            }}
          >
            <img
              alt="propertyKeys"
              src="https://assets.nobroker.in/static/img/owner_plan_icons/house.svg"
              style={{ marginRight: "8px" }}
            />
            <p className="mb-0">
              Leave your <b>House </b>
              <b>Keys &amp; Worries</b> to us!
            </p>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center">
          <div
            className="row plantable "
            style={{ border: "1px solid #e2e2e2", width: "100%" }}
          >
            <div
              className="col-lg-3"
              style={{ borderRight: "1px solid #e2e2e2", color: "#464646" }}
            >
              <div className="title">Plans and Pricing</div>
              <div className="tablerow" style={{ fontSize: "14px" }}>
                <div className="d-flex firstrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="plansIcons"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/refund.png"
                  />
                  <div className=""> Guaranteed buyers or Moneyback</div>
                </div>
                <div className="d-flex secondrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="plansIcons"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/assistant.png"
                  />
                  <div className=""> Personal Field assistant</div>
                </div>
                <div className="d-flex comrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="plansIcons"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/promotion.png"
                  />
                  <div className="">Property promotion on site</div>
                </div>
                <div className="d-flex comrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="p"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/rm.png"
                  />
                  <div className=""> Relationship Manager (RM)</div>
                </div>
                <div className="d-flex comrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="plansIcons"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/marketing.png"
                  />
                  <div className=""> Facebook Marketing Of Property</div>
                </div>
                <div className="d-flex comrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="plansIcons"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/privacy.png"
                  />
                  <div className=""> Privacy of your phone number</div>
                </div>
                <div className="d-flex comrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="plansIcons"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/showing-interest.png"
                  />
                  <div className=""> Showing property on your behalf</div>
                </div>
                <div className="d-flex comrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="plansIcons"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/photoshoot.png"
                  />
                  <div className=""> Photoshoot of your property</div>
                </div>
                <div className="d-flex comrow">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    alt="plansIcons"
                    src="https://assets.nobroker.in/static/img/owner_plan_icons/validity.png"
                  />
                  <div className=""> Plan Validity</div>
                </div>
              </div>
            </div>

            <div className="col-lg-9 d-flex" style={{ color: "#464646" }}>
              <div
                className="col fstcol"
                style={{ borderRight: "1px solid #e2e2e2" }}
              >
                <div className="coltitle">
                  <div className="" style={{ fontSize: "16px" }}>
                    Relax Plan
                  </div>
                  <div className="">
                    <span style={{ fontSize: "22px" }}>रु7,499 </span>
                  </div>
                  <div>
                    <span className="smt">
                      <span
                        data-toggle="dropdown"
                        className=""
                        id="gstFreedom"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="" style={{ fontSize: "12px" }}>
                          +18% GST
                          <img
                            src="https://assets.nobroker.in/nb-new/public/MaterialIcons/Help.png"
                            alt=""
                            className="ml-1 inline-block w-5 h-5"
                          />
                        </span>
                        <div className="tooltip-box d-flex flex-column justify-content-center">
                          <div
                            className="1strow pb-2 d-flex justify-content-between"
                            style={{ fontSize: "14px" }}
                          >
                            <span>Plan Price</span>
                            <span>Rs. 2999</span>
                          </div>
                          <div
                            className="2ndrow pb-2 d-flex justify-content-between"
                            style={{ fontSize: "14px" }}
                          >
                            <span>GST @ 18%</span>
                            <span>Rs. 299</span>
                          </div>
                          <hr className="pb-2" />
                          <div
                            className="3rdrow d-flex justify-content-between"
                            style={{ fontSize: "18px" }}
                          >
                            <span>Amount Payable</span>
                            <span>Rs. 3424</span>
                          </div>
                        </div>
                      </span>
                    </span>
                  </div>
                  <div className="button mb-3 mt-3">
                    <button
                      className=" btn text-white"
                      id=""
                      type="button"
                      style={{ backgroundColor: "#004958" }}
                    >
                      <span
                        className="flex items-center justify-center"
                        style={{ fontSize: "16px" }}
                      >
                        Subscribe
                      </span>
                    </button>
                  </div>
                  <div className="">
                    <ul>
                      <li
                        className="ms-10"
                        style={{
                          fontSize: "14px",
                          listStyle: "disc",
                          width: "80%",
                        }}
                      >
                        Get Buyers Quickly. Save Lakhs on Brokerage.
                      </li>
                    </ul>
                    {/* <div></div> */}
                  </div>
                </div>
                <div className="" style={{ fontSize: "14px" }}>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#e9f6f0",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className=""
                    style={{
                      height: "45px",
                      backgroundColor: "#eeedf7",
                      width: "232px",
                    }}
                  >
                    <div className=""></div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#fff",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#f8f8f8",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className=" d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#fff",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#f8f8f8",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#fff",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className=""
                    style={{
                      height: "45px",
                      backgroundColor: "#f8f8f8",
                      width: "232px",
                    }}
                  >
                    <div className=""></div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#fff",
                      width: "232px",
                    }}
                  >
                    <div className="" style={{ fontSize: "14px" }}>
                      3 Months
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col fstcol"
                style={{ borderRight: "1px solid #e2e2e2" }}
              >
                <div className="coltitle">
                  <div className="" style={{ fontSize: "16px" }}>
                    Relax Plan
                  </div>
                  <div className="">
                    <span style={{ fontSize: "22px" }}>रु7,499 </span>
                  </div>
                  <div>
                    <span className="smt">
                      <span
                        data-toggle="dropdown"
                        className=""
                        id="gstFreedom"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="" style={{ fontSize: "12px" }}>
                          +18% GST
                          <img
                            src="https://assets.nobroker.in/nb-new/public/MaterialIcons/Help.png"
                            alt=""
                            className="ml-1 inline-block w-5 h-5"
                          />
                        </span>
                        <div className="tooltip-box d-flex flex-column justify-content-center">
                          <div
                            className="1strow pb-2 d-flex justify-content-between"
                            style={{ fontSize: "14px" }}
                          >
                            <span>Plan Price</span>
                            <span>Rs. 2999</span>
                          </div>
                          <div
                            className="2ndrow pb-2 d-flex justify-content-between"
                            style={{ fontSize: "14px" }}
                          >
                            <span>GST @ 18%</span>
                            <span>Rs. 299</span>
                          </div>
                          <hr className="pb-2" />
                          <div
                            className="3rdrow d-flex justify-content-between"
                            style={{ fontSize: "18px" }}
                          >
                            <span>Amount Payable</span>
                            <span>Rs. 3424</span>
                          </div>
                        </div>
                      </span>
                    </span>
                  </div>
                  <div className="button mb-3 mt-3">
                    <button
                      className=" btn text-white"
                      id=""
                      type="button"
                      style={{ backgroundColor: "#004958" }}
                    >
                      <span
                        className="flex items-center justify-center"
                        style={{ fontSize: "16px" }}
                      >
                        Subscribe
                      </span>
                    </button>
                  </div>
                  <div className="">
                    <ul>
                      <li
                        className="ms-10"
                        style={{
                          fontSize: "14px",
                          listStyle: "disc",
                          width: "80%",
                        }}
                      >
                        Get Buyers Quickly. Save Lakhs on Brokerage.
                      </li>
                    </ul>
                    {/* <div></div> */}
                  </div>
                </div>
                <div className="">
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#e9f6f0",
                      width: "232px",
                    }}
                  >
                    <div className=""></div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#eeedf7",
                      width: "232px",
                    }}
                  >
                    <div className=""></div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#fff",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#f8f8f8",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#fff",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#f8f8f8",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#fff",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#f8f8f8",
                      width: "232px",
                    }}
                  >
                    <div className=""></div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#fff",
                      width: "232px",
                    }}
                  >
                    <div className="">3 Months</div>
                  </div>
                </div>
              </div>

              <div
                className="col fstcol"
                style={{ borderRight: "1px solid #e2e2e2" }}
              >
                <div className="coltitle">
                  <div className="" style={{ fontSize: "16px" }}>
                    Relax Plan
                  </div>
                  <div className="">
                    <span style={{ fontSize: "22px" }}>रु7,499 </span>
                  </div>
                  <div>
                    <span className="smt">
                      <span
                        data-toggle="dropdown"
                        className=""
                        id="gstFreedom"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="" style={{ fontSize: "12px" }}>
                          +18% GST
                          <img
                            src="https://assets.nobroker.in/nb-new/public/MaterialIcons/Help.png"
                            alt=""
                            className="ml-1 inline-block w-5 h-5"
                          />
                        </span>
                        <div className="tooltip-box d-flex flex-column justify-content-center">
                          <div
                            className="1strow pb-2 d-flex justify-content-between"
                            style={{ fontSize: "14px" }}
                          >
                            <span>Plan Price</span>
                            <span>Rs. 2999</span>
                          </div>
                          <div
                            className="2ndrow pb-2 d-flex justify-content-between"
                            style={{ fontSize: "14px" }}
                          >
                            <span>GST @ 18%</span>
                            <span>Rs. 299</span>
                          </div>
                          <hr className="pb-2" />
                          <div
                            className="3rdrow d-flex justify-content-between"
                            style={{ fontSize: "18px" }}
                          >
                            <span>Amount Payable</span>
                            <span>Rs. 3424</span>
                          </div>
                        </div>
                      </span>
                    </span>
                  </div>
                  <div className="button mb-3 mt-3">
                    <button
                      className=" btn text-white"
                      id=""
                      type="button"
                      style={{ backgroundColor: "#004958" }}
                    >
                      <span
                        className="flex items-center justify-center"
                        style={{ fontSize: "16px" }}
                      >
                        Subscribe
                      </span>
                    </button>
                  </div>
                  <div className="">
                    <ul>
                      <li
                        className="ms-10"
                        style={{
                          fontSize: "14px",
                          listStyle: "disc",
                          width: "80%",
                        }}
                      >
                        Get Buyers Quickly. Save Lakhs on Brokerage.
                      </li>
                    </ul>
                    {/* <div></div> */}
                  </div>
                </div>

                <div className="" style={{ fontSize: "14px" }}>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#e9f6f0",
                      width: "232px",
                    }}
                  >
                    <div className=""></div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#eeedf7",
                      width: "232px",
                    }}
                  >
                    <div className=""></div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#fff",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#f8f8f8",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#fff",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#f8f8f8",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#fff",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#f8f8f8",
                      width: "232px",
                    }}
                  >
                    <div className=""></div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#fff",
                      width: "232px",
                    }}
                  >
                    <div className="">3 Months</div>
                  </div>
                </div>
              </div>

              <div className="col fstcol">
                <div className="coltitle">
                  <div className="" style={{ fontSize: "16px" }}>
                    Relax Plan
                  </div>
                  <div className="">
                    <span style={{ fontSize: "22px" }}>रु7,499 </span>
                  </div>
                  <div>
                    <span className="smt">
                      <span
                        data-toggle="dropdown"
                        className=""
                        id="gstFreedom"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="" style={{ fontSize: "12px" }}>
                          +18% GST
                          <img
                            src="https://assets.nobroker.in/nb-new/public/MaterialIcons/Help.png"
                            alt=""
                            className="ml-1 inline-block w-5 h-5"
                          />
                        </span>
                        <div className="tooltip-box d-flex flex-column justify-content-center">
                          <div
                            className="1strow pb-2 d-flex justify-content-between"
                            style={{ fontSize: "14px" }}
                          >
                            <span>Plan Price</span>
                            <span>Rs. 2999</span>
                          </div>
                          <div
                            className="2ndrow pb-2 d-flex justify-content-between"
                            style={{ fontSize: "14px" }}
                          >
                            <span>GST @ 18%</span>
                            <span>Rs. 299</span>
                          </div>
                          <hr className="pb-2" />
                          <div
                            className="3rdrow d-flex justify-content-between"
                            style={{ fontSize: "18px" }}
                          >
                            <span>Amount Payable</span>
                            <span>Rs. 3424</span>
                          </div>
                        </div>
                      </span>
                    </span>
                  </div>
                  <div className="button mb-3 mt-3">
                    <button
                      className=" btn text-white"
                      id=""
                      type="button"
                      style={{ backgroundColor: "#004958" }}
                    >
                      <span
                        className="flex items-center justify-center"
                        style={{ fontSize: "16px" }}
                      >
                        Subscribe
                      </span>
                    </button>
                  </div>
                  <div className="">
                    <ul>
                      <li
                        className="ms-10"
                        style={{
                          fontSize: "14px",
                          listStyle: "disc",
                          width: "80%",
                        }}
                      >
                        Get Buyers Quickly. Save Lakhs on Brokerage.
                      </li>
                    </ul>
                    {/* <div></div> */}
                  </div>
                </div>
                <div className="" style={{ fontSize: "14px" }}>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#e9f6f0",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#eeedf7",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#fff",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#f8f8f8",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#fff",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#f8f8f8",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#fff",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#f8f8f8",
                      width: "232px",
                    }}
                  >
                    <div className="">
                      <img
                        src="https://assets.nobroker.in/nb-new/public/MaterialIcons/checkColor.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{
                      height: "45px",
                      backgroundColor: "#fff",
                      width: "232px",
                    }}
                  >
                    <div className="">3 Months</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <div className="">
              <div
                className="text-danger"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                {" "}
                T&C apply.
              </div>
            <div
              class="modal fade"
              id="exampleModal1"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1
                      class="modal-title fs-5 text-decoration-underline"
                      id="exampleModalLabel"
                    >
                      Terms and Conditions
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body text-start">
                    <h4 className="fw-semibold">MoneyBack plan:</h4>
                    <ul
                      className="ms-5 mt-2"
                      style={{ listStyleType: "circle" }}
                    >
                      <li>
                        The refund will be processed once you shift to your new
                        property which is not available on NESTATE website.
                      </li>
                      <li>
                        100% refund has to be claimed within a week of plan
                        expiry.{" "}
                      </li>
                      <li>
                        For claiming the refund, you just need to submit a valid
                        copy of your sale deed.{" "}
                      </li>
                      <li>
                        The sale deed should match the requirement given to
                        NESTATE. NESTATE will verify the claim, this may include
                        physical visit of the property premises.{" "}
                      </li>
                      <li>
                        The property price in the sale deed should be equal or
                        lower than the one given to NESTATE property advisor at
                        the time of plan subscription.{" "}
                      </li>
                    </ul>
                  </div>
                  <div class="modal-body text-start">
                    <h4 className="fw-semibold">For CPMS Premium Plans:</h4>
                    <ul
                      className="ms-5 mt-2"
                      style={{ listStyleType: "circle" }}
                    >
                      <li>
                        The refund will be processed once you shift to your new
                        property which is not available on NESTATE website.
                      </li>
                      <li>
                        100% refund has to be claimed within a week of plan
                        expiry.{" "}
                      </li>
                      <li>
                        For claiming the refund, you just need to submit a valid
                        copy of your sale deed.{" "}
                      </li>
                      <li>
                        The sale deed should match the requirement given to
                        NESTATE. NESTATE will verify the claim, this may include
                        physical visit of the property premises.{" "}
                      </li>
                      <li>
                        The property price in the sale deed should be equal or
                        lower than the one given to NESTATE property advisor at
                        the time of plan subscription.{" "}
                      </li>
                    </ul>
                    <p className="text-center  mt-3 ">
                      Click here for detailed
                      <span className="text-decoration-underline ms-1">
                        Terms & Conditions
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <a
              href="buyers-plan"
              style={{ color: "#999999", fontSize: "18px" }}
            >
              Click here for Buyer Plans
            </a>
          </div>
        </div>

        <div className="container mt-10 ms-5 ">
          <h1 className="text-center text-2xl mb-14">
            HOW ASSISTED PLANS WORK
          </h1>
          <div className="row align-items-center position-relative">
            <div className="col-lg-4 overflow-hidden d-flex flex-column align-items-center">
              <img src={pic1} alt="" srcset="" />
              <div className="line-dashed" style={{ marginTop: "-33px" }}></div>
            </div>
            <div className="col-lg-4 ">
              <h1 className="text-xl" style={{ color: "#ff5800" }}>
                {" "}
                LOOKING FOR A BUYER?
              </h1>
              <p>
                Get verified buyer leads through any one of our assisted plans.
              </p>
            </div>
            <div className="col-lg-4"></div>
            <div className="bottom-border"></div>
          </div>

          <div
            className="row align-items-center  position-relative"
            style={{ marginTop: "" }}
          >
            <div className="col-lg-4"></div>
            <div className="col-lg-4 ">
              <h1 className="text-xl" style={{ color: "#ff5800" }}>
                {" "}
                THE HELPING HAND
              </h1>
              <p>
                A dedicated{" "}
                <span
                  className=""
                  style={{ color: "#004958", fontSize: "18px" }}
                >
                  RELATIONSHIP MANAGER
                </span>{" "}
                to guide and support you
              </p>
            </div>
            <div className="col-lg-4 overflow-hidden d-flex flex-column align-items-center">
              <div className="line-dashed"></div>
              <img src={pic2} alt="" srcset="" />
              <div className="line-dashed" style={{ marginTop: "-30px" }}></div>
            </div>
            <div className="bottom-border"></div>
          </div>

          <div className="row align-items-center  position-relative">
            <div className="col-lg-4 overflow-hidden  d-flex flex-column align-items-center">
              <div className="line-dashed"></div>
              <img src={pic3} alt="" srcset="" />
              <div className="line-dashed" style={{ marginTop: "-60px" }}></div>
            </div>
            <div className="col-lg-4 ">
              <h1 className="text-xl" style={{ color: "#ff5800" }}>
                {" "}
                MARKETING & PROMOTION
              </h1>
              <p>
                Boost your ranking on NoBroker listing page and promotion on
                social media
              </p>
            </div>
            <div className="col-lg-4"></div>
            <div className="bottom-border"></div>
          </div>

          <div className="row align-items-center  position-relative">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 ">
              <h1 className=" text-xl" style={{ color: "#ff5800" }}>
                FREEDOM FROM BOGUS CALLERS
              </h1>
              <p>Your relationship manager handles all enquiries on call</p>
            </div>
            <div className="col-lg-4 overflow-hidden  d-flex flex-column align-items-center">
              <div className="line-dashed"></div>
              <img src={pic4} alt="" srcset="" />
              <div className="line-dashed"></div>
              <div className="bottom-border"></div>
            </div>
          </div>

          <div className="row align-items-center  position-relative">
            <div className="col-lg-4 overflow-hidden  d-flex flex-column align-items-center">
              <div className="line-dashed"></div>
              <img src={pic5} alt="" srcset="" />
              <div className="line-dashed" style={{ marginTop: "-60px" }}></div>
            </div>
            <div className="col-lg-4 ">
              <h1 className=" text-xl" style={{ color: "#ff5800" }}>
                {" "}
                FILTER QUALIFIED BUYERS
              </h1>
              <p>
                Your Relationship Manager forwards you only buyer, meeting your
                requirements.
              </p>
            </div>
            <div className="col-lg-4"></div>
            <div className="bottom-border"></div>
          </div>

          <div className="row align-items-center  position-relative">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 ">
              <h1 className=" text-xl" style={{ color: "#ff5800" }}>
                FASTER CLOSURE
              </h1>
              <p>You get buyer quick and effectively at a fractional cost.</p>
            </div>
            <div className="col-lg-4 overflow-hidden  d-flex flex-column align-items-center">
              <div className="line-dashed"></div>
              <img src={pic6} alt="" srcset="" />
            </div>
          </div>
        </div>

        <SellerplanFAQ />
      </div>
    </>
  );
}

export default Sellerplan;
