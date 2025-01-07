import React, { useState, useRef, useEffect } from "react";
import "../style/Ownerplan.css";
import { Carousel } from "react-bootstrap";
import OwnerplanFAQ from "../components/OwnerplanFAQ";
import Pic1 from "../assets/images/pic1.jpg";
import Pic2 from "../assets/images/pic2.jpg";
import Icon from "../assets/images/icons_plans_page_benifits_outlined.svg";

function Ownerplan() {
  const [activeCard, setActiveCard] = useState(1);

  const [trianglePosition, setTrianglePosition] = useState({ top: 0, left: 0 });
  const cardRefs = useRef([]);

  useEffect(() => {
    if (activeCard !== null) {
      const cardElement = cardRefs.current[activeCard - 1]; 
      if (cardElement) {
        const cardRect = cardElement.getBoundingClientRect();
        setTrianglePosition({
          left: cardRect.left + cardRect.width / 2 - 135, 
        });
      }
    }
  }, [activeCard]);


  const cards = [
    {
      id: 1,
      title: "Relax",
      price: "रु2,999",
      gst: "+18% GST",
      badge: "On Call Assistance",
    },
    {
      id: 2,
      title: "Super Relax",
      price: "रु2,999",
      gst: "+18% GST",
      badge: "House Visit Assistance",
    },
    {
      id: 3,
      title: "Money Back",
      price: "रु2,999",
      gst: "+18% GST",
      badge: "100% Guarantee",
    },
    {
      id: 4,
      title: "Super Money Back",
      price: "रु2,999",
      gst: "+18% GST",
      badge: "Personal Field Assistance",
    },
  ];

  const boxes = [
    {
      id: 1,
      imgSrc: Pic1,
      title:
        "NESTATE's customer service was impressively prompt and friendly. Listing my flat on rent was a memorable experience overall.",
      text: "#ZeroBrokerage",
    },
    {
      id: 2,
      imgSrc: Pic2,
      title:
        "NESTATE's customer service was impressively prompt and friendly. Listing my flat on rent was a memorable experience overall.",
      text: "#ZeroBrokerage",
    },
    {
      id: 3,
      imgSrc: Pic1,
      title:
        "NESTATE's customer service was impressively prompt and friendly. Listing my flat on rent was a memorable experience overall.",
      text: "#ZeroBrokerage",
    },
  ];

  return (
    <>
      <div className="">
        <div className="hero"></div>
        <div className="container" style={{ marginTop: "125px", width: "85%" }}>
          <div className="top d-flex align-items-center justify-content-between">
            <div className="text">
              <div className="largetext">
                <span className="">
                  <span style={{ fontSize: "26px", color: "#36454f" }}>
                    Get Tenants Quickly.
                    <b style={{ fontWeight: "500" }}>Save upto 50k</b> on
                    brokerage.
                  </span>
                </span>
              </div>
              <div
                className="d-flex align-items-center justify-content-start"
                style={{ gap: "0" }}
              >
                <span className="d-flex align-items-center justify-content-end">
                  <img
                    src="OwnerPlan/starNew.svg"
                    alt="review star"
                    className="img-fluid star-icon"
                  />
                  <img
                    src="OwnerPlan/starNew.svg"
                    alt="review star"
                    className="img-fluid star-icon"
                  />
                  <img
                    src="OwnerPlan/starNew.svg"
                    alt="review star"
                    className="img-fluid star-icon"
                  />
                  <img
                    src="OwnerPlan/starNew.svg"
                    alt="review star"
                    className="img-fluid star-icon"
                  />
                  <img
                    src="OwnerPlan/starNew.svg"
                    alt="review star"
                    className="img-fluid star-icon"
                  />
                </span>
                <span
                  className=""
                  style={{ color: "#36454f", fontSize: "18px" }}
                >
                  Trusted by <b style={{ fontWeight: "550" }}>3 Lacs+</b> People
                  like you!
                </span>
              </div>
            </div>
            <div
              className="btn px-3 py-2"
              style={{
                backgroundColor: "rgba(0, 150, 135, 0.1)",
                border: "1px solid green",
              }}
            >
              <a
                className=""
                href="#"
                style={{
                  color: "#004958",
                  textDecoration: "none",
                  fontWeight: "500",
                  fontSize: "17px",
                }}
              >
                Click here for Tenant Plans
              </a>
            </div>
          </div>

          <div className="row ownerplan mt-16 gap-7">
      {cards.map((card) => (
        <div
          key={card.id}
          className="col-lg-3 cards card"
          onClick={() => setActiveCard(card.id)}
          ref={(el) => cardRefs.current[card.id - 1] = el} // Ref to track each card element
          style={{
            cursor: "pointer",
            position: "relative",
            borderRadius: "20px",
            border:
              activeCard === card.id
                ? "6px solid #009587"
                : "6px solid white",
            transition: "all 0.3s ease",
          }}
        >
          <div
            className="position-absolute border border-solid px-2 fw-semibold text-uppercase d-flex align-items-center justify-content-center"
            style={{
              top: "-1rem",
              right: "2rem",
              zIndex: 2,
              height: "2.1rem",
              borderRadius: "0.8rem",
              backgroundColor: "rgb(250, 239, 191)",
              borderColor: "rgb(234, 222, 167)",
              color: "rgb(130, 113, 38)",
              fontSize: "12px",
            }}
          >
            {card.badge}
          </div>
          <div
            className="position-absolute w-100 h-100"
            style={{
              top: 0,
              left: 0,
              zIndex: 1,
              backgroundImage: `url(${
                activeCard === card.id
                  ? "https://assets.nobroker.in/nb-new/public/green-box-png-square.webp"
                  : card.background
              })`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: "20px",
              opacity: activeCard === card.id ? 0.8 : 1,
            }}
          ></div>
          <div
            className="position-relative w-100 h-100"
            style={{ zIndex: 2, borderRadius: "20px" }}
          >
            <div className="d-flex" style={{ height: "60%" }}>
              <div className="mt-3 ml-3 mr-2" style={{ flex: "8 1 0%" }}>
                <span
                  className="d-block"
                  style={{
                    fontSize: "19px",
                    color: "#36454f",
                    fontWeight: "450",
                  }}
                >
                  {card.title}
                </span>
                <div
                  className="mt-1 d-flex align-items-center gap-2 fw-semibold"
                  style={{
                    fontSize: "14px",
                    color: "",
                    position: "relative",
                  }}
                >
                  <div style={{ color: "#3f3f3f" }}>{card.price}</div>
                  <div
                    className="smt text-muted d-flex align-items-center justify-content-center"
                    style={{ fontSize: "10px", color: "#a0a0a0" }}
                  >
                    {card.gst}
                    <div className="tooltip-box">
                      <div className="1strow pb-2 d-flex justify-content-between">
                        <span>Plan Price</span>
                        <span>Rs. 2999</span>
                      </div>
                      <div className="2ndrow pb-2 d-flex justify-content-between">
                        <span>GST @ 18%</span>
                        <span>Rs. 299</span>
                      </div>
                      <hr className="pb-2" />
                      <div className="3rdrow d-flex justify-content-between">
                        <span>Amount Payable</span>
                        <span>Rs. 3424</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt-16 d-flex align-items-center justify-content-end px-3 pb-2"
              style={{ height: "40%" }}
            >
              <button
                type="button"
                className="btn py-2 w-100 fw-semibold d-flex align-items-center justify-content-center"
                style={{
                  fontSize: "15px",
                  backgroundColor:
                    activeCard === card.id ? "#004958" : "",
                  color: activeCard === card.id ? "#fff" : "#000",
                  border: "1px solid #009587",
                }}
              >
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      ))}

      {activeCard && (
        <div
          className="mt-10 relative"
          style={{
            backgroundColor: "#fff",
            marginLeft: "39px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 6px 2px",
            padding: "1.5rem",
            borderRadius: "10px",
            textAlign: "center",
            width: "93%",
            position: "relative", 
          }}
        >
          {/* Triangle */}
          <div
            className="absolute"
            style={{
              top: "-60px", 
              left: `${trianglePosition.left}px`, 
              transform: "translateX(-50%)", 
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 6px 2px",
              width: "90px",
              height: "80px",
              backgroundColor: "#fff",
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", // Triangle shape
              zIndex: 1,
            }}
          ></div>
                <div className="row pt-3 ps-9">
                  
                  <div className="col">
                 
                    <div className="text-muted">
                      <div
                        className="d-flex flex-row"
                        style={{ fontSize: "13px" , }}
                      >
                        <div className="me-1 position-relative mt-1">
                          <div style={{ width: "24px", height: "24px" }}>
                            <div
                              className="cursor-pointer"
                              style={{
                                width: "24px",
                                height: "24px",
                                backgroundImage: `url(${Icon})`,
                                backgroundPosition: "-216px -23px",
                                backgroundRepeat: "no-repeat",
                              }}
                              itemProp="image"
                            ></div>
                          </div>
                        </div>
                        <div
                          className="px-1 d-flex flex-column justify-content-start align-items-start ms-2"
                          style={{ fontSize: "14px", marginBottom: "2vh"}}
                        >
                          <div>
                            <span className="fw-semibold">50 </span> Days
                          </div>
                          <div>Plan Validity</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-muted">
                      <div
                        className="d-flex flex-row text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        <div className="me-1 position-relative mt-1">
                          <div style={{ width: "24px", height: "24px" }}>
                            <div
                              className="cursor-pointer"
                              style={{
                                width: "24px",
                                height: "24px",
                                backgroundImage: `url(${Icon})`,
                                backgroundPosition: "-214px -70px",
                                backgroundRepeat: "no-repeat",
                              }}
                              itemProp="image"
                            ></div>
                          </div>
                        </div>
                        <div
                          className="px-1 d-flex flex-column justify-content-start align-items-start ms-2"
                          style={{ fontSize: "14px", marginBottom: "2vh"}}
                        >
                          <div>Top Slot Listing for</div>
                          <div> 5x more visibility</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-muted">
                      <div
                        className="d-flex flex-row text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        <div className="me-1 position-relative mt-1">
                          <div style={{ width: "24px", height: "24px" }}>
                            <div
                              className="cursor-pointer"
                              style={{
                                width: "24px",
                                height: "24px",
                                backgroundImage: `url(${Icon})`,
                                backgroundPosition: "-215px -165px",
                                backgroundRepeat: "no-repeat",
                              }}
                              itemProp="image"
                            ></div>
                          </div>
                        </div>
                        <div
                          className="px-1 d-flex flex-column justify-content-start align-items-start ms-2"
                          style={{ fontSize: "14px", marginBottom: "2vh" }}
                        >
                          <div>Relationship Manager (RM)-</div>
                          <div>Super fast closure</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-muted">
                      <div
                        className="d-flex flex-row text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        <div className="me-1 position-relative mt-1">
                        {activeCard === 3 | activeCard === 4 ? (<div className="absolute rounded-full" style={{left: "-8px", top: "2px",backgroundColor: "#007A6F",height: "8px",width: "8px"}}></div>) : ""}
                          <div style={{ width: "24px", height: "24px" }}>
                            <div
                              className="cursor-pointer"
                              style={{
                                width: "24px",
                                height: "24px",
                                backgroundImage: `url(${Icon})`,
                                backgroundPosition: "-215px -209px",
                                backgroundRepeat: "no-repeat",
                              }}
                              itemProp="image"
                            ></div>
                          </div>
                        </div>
                        <div
                          className="px-1 d-flex flex-column justify-content-start align-items-start ms-2"
                          style={{ fontSize: "14px", marginBottom: "2vh" }}
                        >
                          <div>Rental agreement </div>
                          <div>home delivered</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="text-muted">
                      <div
                        className="d-flex flex-row text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        <div className="me-1 position-relative mt-1">
                          <div style={{ width: "24px", height: "24px" }}>
                            <div
                              className="cursor-pointer"
                              style={{
                                width: "24px",
                                height: "24px",
                                backgroundImage: `url(${Icon})`,
                                backgroundPosition: activeCard === 1 | activeCard === 2 ? "-88px -229px" : "-285px -212px",
                                backgroundRepeat: "no-repeat",
                              }}
                              itemProp="image"
                            ></div>
                          </div>
                        </div>
                        <div
                          className="px-1 d-flex flex-column align-items-start justify-content-start ms-2"
                          style={{ fontSize: "14px", marginBottom: "2vh" , color: activeCard === 1 | activeCard === 2 ? "#AEADAD" : ""}}
                        >
                          <div>Guaranteed tenants</div>
                          <div>or 100% Moneyback</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-muted">
                      <div
                        className="d-flex flex-row text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        <div className="me-1 position-relative mt-1">
                          <div style={{ width: "24px", height: "24px" }}>
                            <div
                              className="cursor-pointer"
                              style={{
                                width: "24px",
                                height: "24px",
                                backgroundImage: `url(${Icon})`,
                                backgroundPosition: "-216px -118px",
                                backgroundRepeat: "no-repeat",
                              }}
                              itemProp="image"
                            ></div>
                          </div>
                        </div>
                        <div
                          className="px-1 d-flex flex-column align-items-start justify-content-start ms-2"
                          style={{ fontSize: "14px", marginBottom: "2vh" }}
                        >
                          <div>Property promotion on</div>
                          <div>website</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-muted">
                      <div
                        className="d-flex flex-row text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        <div className="me-1 position-relative mt-1">
                        {activeCard === 2 | activeCard === 4 ? (<div className="absolute rounded-full" style={{left: "-8px", top: "2px",backgroundColor: "#007A6F",height: "8px",width: "8px"}}></div>) : ""}
                          <div style={{ width: "24px", height: "24px" }}>
                            <div
                              className="cursor-pointer"
                              style={{
                                width: "24px",
                                height: "24px",
                                backgroundImage: `url(${Icon})`,
                                backgroundPosition: activeCard === 1 | activeCard === 3 ? "-86px -176px" : "-282px -156px",
                                backgroundRepeat: "no-repeat",
                              }}
                              itemProp="image"
                            ></div>
                          </div>
                        </div>
                        <div
                          className="px-1 d-flex flex-column align-items-start justify-content-start ms-2"
                          style={{ fontSize: "14px", marginBottom: "2vh",color: activeCard === 1 | activeCard === 3 ? "#AEADAD" : "" }}
                        >
                          <div>Photoshoot of</div>
                          <div>your property</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-muted">
                      <div
                        className="d-flex flex-row text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        <div className="me-1 position-relative mt-1">
                          <div style={{ width: "24px", height: "24px" }}>
                            <div
                              className="cursor-pointer"
                              style={{
                                width: "24px",
                                height: "24px",
                                backgroundImage: `url(${Icon})`,
                                backgroundPosition: "-275px -65px",
                                backgroundRepeat: "no-repeat",
                              }}
                              itemProp="image"
                            ></div>
                          </div>
                        </div>
                        <div
                          className="px-1 d-flex flex-column align-items-start justify-content-start ms-2"
                          style={{ fontSize: "14px", marginBottom: "2vh" }}
                        >
                          <div>Privacy of your phone</div>
                          <div>number</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="text-muted">
                      <div
                        className="d-flex flex-row text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        {/* <div > */}
                        <div
                          className="me-1 position-relative mt-1"
                          style={{ width: "24px", height: "24px" }}
                        >
                           {activeCard === 2 | activeCard === 4 ? (<div className="absolute rounded-full" style={{left: "-8px", top: "2px",backgroundColor: "#007A6F",height: "8px",width: "8px"}}></div>) : ""}
                          <div
                            className="cursor-pointer"
                            style={{
                              width: "24px",
                              height: "24px",
                              backgroundImage: `url(${Icon})`,
                              backgroundPosition: activeCard === 1 | activeCard === 3 ? "-87px -127px" : "-281px -114px",
                              backgroundRepeat: "no-repeat",
                            }}
                            itemProp="image"
                          ></div>
                        </div>
                        <div
                          className="px-1 d-flex flex-column align-items-start justify-content-start ms-2"
                          style={{ fontSize: "14px", marginBottom: "2vh", color: activeCard === 1 | activeCard === 3 ? "#AEADAD" : "" }}
                        >
                          <div>Personal</div>
                          <div>Field Assistant</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-muted">
                      <div
                        className="d-flex flex-row text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        <div className="me-1 position-relative mt-1">
                        {activeCard === 2 | activeCard === 4 ? (<div className="absolute rounded-full" style={{left: "-8px", top: "2px",backgroundColor: "#007A6F",height: "8px",width: "8px"}}></div>) : ""}
                          <div style={{ width: "24px", height: "24px" }}>
                            <div
                              className="cursor-pointer"
                              style={{
                                width: "24px",
                                height: "24px",
                                backgroundImage: `url(${Icon})`,
                                backgroundPosition: activeCard===1 | activeCard === 3? "-159px -24px":"-339px -23px",
                                backgroundRepeat: "no-repeat",
                              }}
                              itemProp="image"
                            ></div>
                          </div>
                        </div>
                        <div
                          className="px-1 d-flex flex-column align-items-start justify-content-start ms-2"
                          style={{ fontSize: "14px", marginBottom: "2vh",color: activeCard === 1 |activeCard === 3 ? "#AEADAD" : "#334A5C" }}
                        >
                          <div>Showing property</div>
                          <div>on your behalf</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-muted">
                      <div
                        className="d-flex flex-row text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        <div className="me-1 position-relative mt-1">
                          <div style={{ width: "24px", height: "24px" }}>
                            <div
                              className="cursor-pointer"
                              style={{
                                width: "24px",
                                height: "24px",
                                backgroundImage: `url(${Icon})`,
                                backgroundPosition: "-275px -24px",
                                backgroundRepeat: "no-repeat",
                              }}
                              itemProp="image"
                            ></div>
                          </div>
                        </div>
                        <div
                          className="px-1 d-flex flex-column justify-content-start align-items-start ms-2"
                          style={{
                            fontSize: "14px",
                            fontWeight: "400",
                            marginBottom: "2vh",
                          }}
                        >
                          <div>Facebook Marketing of</div>
                          <div>Your property</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="d-flex flex-row gap-20 pt-9"
                    style={{ alignItems: "end", justifyContent: "end" }}
                  >
                    <div>
                      <p
                        className=""
                        style={{
                          fontWeight: "510",
                          fontSize: "14px",
                          color: "#57595A",
                        }}
                      >
                        For assistance call us at :
                        <a
                          href="tel:+91-92-430-099-80}"
                          className="text-primary-color ml-2" style={{color: "#ff5800"}}
                        >
                          +91-92-430-099-80
                        </a>
                      </p>
                    </div>
                    <div>
                      <span
                        style={{
                          fontWeight: "500",
                          fontSize: "14px",
                          textDecoration: "underline",
                          cursor: "pointer",
                          color: "#797A7B",
                        }}
                      >
                        Terms &amp; Conditions Apply
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className="carousel-container mt-20"
          >
            <Carousel interval={2000} controls={false} indicators={true} >
              {boxes.map((box) => (
                <Carousel.Item key={box.id} >
                  <div className="d-flex justify-content-center">
                    <div
                      className="card"
                      style={{
                        width: "18rem",
                        paddingTop: "4rem",
                      }}
                    >
                      <img
                        src={box.imgSrc}
                        className="card-img-top rounded-circle"
                        alt={box.title}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          position: "absolute",
                          top: "-50px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          border: "3px solid white",
                          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title italic">{box.title}</h5>
                        <p className="card-text" style={{color:"#004958"}}>{box.text}</p>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>

          <div className="mt-32">
            <hr
              style={{
                border: "none",
                height: "2px",
                width: "100%",
                backgroundColor: "#555",
              }}
            />
            <OwnerplanFAQ />
          </div>
        </div>
      </div>
    </>
  );
}

export default Ownerplan;


