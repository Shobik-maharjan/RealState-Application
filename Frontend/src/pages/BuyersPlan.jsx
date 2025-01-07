import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/BuyersPlan.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function BuyersPlan() {
  // const [phone, setPhone] = useState("");
  const [currentPlan, setCurrentPlan] = useState(null);
  const cards = [
    {
      title: "Power Plan",
      price: "रु 2,899",
      gst_price: "रु 521.82",
      payable: "रु 3,420.82",
      gst: "+18% GST",
      description: "Choose your dream home from lots of options!",
      features: [
        { text: "Number of Contacts", value: "upto 25" },
        { text: "Legal Assistance", value: "✔" },
        { text: "Loan Assistance", value: "✔" },
        { text: "On-Demand Support", value: "✔" },
      ],
      buttonText: "Subscribe",
      bgColor: "#008080", // Teal background color
      subscribe: [
        { text: "Upto 25 Seller Contacts" },
        { text: "Instant New Property Alerts" },
        { text: "Get Assistance in Home Loan an..." },
        { text: "Save Lakhs in Brokerage" },
      ],
    },
    {
      title: "Property Expert Plan",
      price: "रु 2,999",
      gst: "+18% GST",
      gst_price: "रु 539.82",
      payable: "रु 3,438.82",
      description:
        "Get FREE Loan Assistance + 100% Cashback on plan amount* + Property Expert",
      description1: "Dedicated Property Expert",
      features1: [
        { text: "Negotiates to get you the BEST PRICE for the property" },
        { text: "FREE Loan Assistance" },
        { text: "Finds you the BEST PROPERTY and schedule property visits" },
        {
          text: "FREE Interior Consultation and Design Inspection after you finalise your property",
        },
      ],
      features: [
        { text: "Number of Contacts", value: "upto 50" },
        { text: "Legal Assistance", value: "✔" },
        { text: "FREE Loan Assistance", value: "✔" },
        { text: "FREE Interior Design Consultation", value: "✔" },
      ],
      image: "https://assets.nobroker.in/static/img/paymentModal/rm.png",
      buttonText: "Subscribe",
      bgColor: "#005580", // Darker blue background color
      term: "*100% Cashback T&C",
      conditation:
        "100% Assured Cashback of the plan purchase amount if you avail loan services through NESTATE and which will be processed on home loandisbursal.",
      subscribe: [
        { text: "Upto 50 Seller Contacts" },
        { text: "Instant New Property Alerts" },
        { text: "Get Assistance in Home Loan an..." },
        { text: "Save Lakhs in Brokerage" },
      ],
    },
    {
      title: "Property Expert MoneyBack Plan",
      price: "रु 4,999",
      gst: "+18% GST",
      gst_price: "रु 899.82",
      payable: "रु 5,898.82",
      description: "Get Guaranteed property or 100% Refund",
      description1: "Dedicated Property Expert",
      features1: [
        { text: "Negotiates to get you the BEST PRICE for the property" },
        { text: "FREE Loan Assistance" },
        { text: "Finds you the BEST PROPERTY and schedule property visits" },
        {
          text: "FREE Interior Consultation and Design Inspection after you finalise your property",
        },
      ],
      features: [
        { text: "Number of Contacts", value: "upto 50" },
        { text: "Legal Assistance", value: "✔" },
        { text: "FREE Loan Assistance", value: "✔" },
        { text: "FREE Interior Design Consultation", value: "✔" },
      ],
      image: "https://assets.nobroker.in/static/img/paymentModal/rm.png",
      buttonText: "Subscribe",
      bgColor: "#D83B3B", // Red background color
      subscribe: [
        { text: "Upto 50 Seller Contacts" },
        { text: "Instant New Property Alerts" },
        { text: "Get Assistance in Home Loan an..." },
        { text: "Save Lakhs in Brokerage" },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqQueAns = [
    {
      question: "What does a property Expert do?",
      ans: "Purchasing one's first home is a complicated journey and our property experts have helped thousands of buyers find their dream home. Our property expert will help you throughout your property purchase journey from searching properties, arranging visits, and negotiating prices. If you require any additional information or assistance like Home Loan, Home interiors/renovation services, etc., our property expert will put you in touch with all these service teams so you do not need to spend extra effort in your home purchase.",
    },
    {
      question: "How does Property Expert/ Power Plan compare?",
      ans: "Expert Plan subscribers get personalized services from dedicated property experts for up to 50 qualified seller contacts, while Power plan subscribers can take up to 25 seller contacts which you can contact on your own.",
    },
    {
      question:
        "What If I do not find a house after subscribing to Expert Plan?",
      ans: "We provide the services to help you find a house as per your legitimate requirement and help you with up to 50 different seller properties. Usually, you would not need up to these many contacts as these are all qualified leads for house searching. However, in case you are not able to find a house; it will be unfortunate and you could modify your requirement for house hunt to avoid the same. Our additional services like Free Loan Assistance and 1 Free Interiors consultation can still be availed even if you do not finalize a house through NoBroker.",
    },
    {
      question:
        "What services do you provide after I subscribe to the Expert Plan?",
      ans: "For any Expert Plan subscriber, we give the following services: Personalized Dedicated property expert assistance, up to 50 seller contacts, new property alerts as per your property requirement, home loan at attractive interest rates, and free Interiors Consultation from NoBroker.",
    },
    {
      question:
        "How soon can I get the house after I subscribe to the Expert Plan?",
      ans: "Usually the timeline to get a house depends on how specific the requirement is. We do try to get you the house as soon as possible in case you are an Expert Plan subscriber, while it cannot be guaranteed how soon you will be able to get the house. However, we have seen that usually house hunt is completed within 4-5 weeks of the date of subscription of the plan.",
    },
    {
      question:
        "Will you be coming to show the house to me if I am an Expert Plan customer?",
      ans: "We help our Expert Plan customer in searching out the properties and speaking with sellers to set the appointment for you. However, we do not visit on-site to accompany you for the house visit.",
    },
    {
      question: "Will you help me negotiate the price?",
      ans: "Price and down-payment amount are on the sole discretion of the sellers. However, we do try to negotiate the price for our expert plan customers in case there are inconsistencies in price amount in the specific locality.",
    },
    {
      question: "Can you get me the house in some specific society?",
      ans: "We always have sufficient number of properties at each location of the operating city, but finding a house in a specific locality will depend on the inventory we have at that point of time so we cannot guarantee a specific society.",
    },
    {
      question:
        "How do I give my requirements for the type of house I am looking for?",
      ans: "Once you subscribe to the Expert Plan, our assigned dedicated property expert will call you and take your requirement over the phone and will begin working on the same day itself.",
    },
    {
      question: "Are there any hidden charges in the subscription plans?",
      ans: "The charges to subscribe to the plans mentioned are inclusive of all kind of charges and there is no extra cost for the same. Free Home Loan Assistance and 1 free home inspection for interiors are included in this plan.",
    },
    {
      question:
        "Is it possible that I can pay for Expert Plan once I find the house?",
      ans: "Unfortunately we have not started that kind of service yet and neither plan for the same. To enjoy the house hunting assistance with the help of a personalized property advisor, you need to subscribe to the plan first.",
    },
  ];

  return (
    <>
      <div className="container-fluid" style={{ marginTop: "105px" }}>
        <div>
          <h1 className="text-center" style={{ fontSize: "30px" }}>
            Choose a Buyer Plan and{" "}
            <span className="text-danger">SAVE LAKHS</span> on brokerage.
          </h1>
          <h2 className="text-center" style={{ fontSize: "22px" }}>
            For assistance call us at :{" "}
            <span className="text-danger">+91-89-055-524-44</span>
          </h2>
        </div>

        <div className="row mx-auto mt-5 g-5">
          {cards.map((card, index) => (
            <div className="col-lg-4" style={{ width: "" }}>
              <div
                key={index}
                className="d-flex justify-content-between align-items-center position-relative"
                style={{
                  backgroundColor: card.bgColor,
                  color: "white",
                  padding: "5px 10px",
                  textAlign: "center",
                }}
              >
                <h3>{card.title}</h3>
                <h4>
                  <div>{card.price}</div>
                  <div className="gst-hover">
                    {card.gst}
                    <div className="hover-box">
                      <div className="hover-flex">
                        <p>Plan Price</p>
                        <p>{card.price}</p>
                      </div>
                      <div className="hover-flex">
                        <p>GST @ 18%</p>
                        <p>{card.gst_price}</p>
                      </div>
                      <div className="line"></div>
                      <div className="hover-flex fw-semibold">
                        <p>Amount Payable</p>
                        <p>{card.payable}</p>
                      </div>
                    </div>
                  </div>
                </h4>
              </div>

              <div
                className="p-3"
                style={{ border: `3px solid ${card.bgColor}` }}
              >
                <p
                  className="fw-semibold my-3"
                  style={{ color: `${card.bgColor}`, fontSize: "16px" }}
                >
                  {card.description}
                </p>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ fontSize: "14px" }}
                >
                  <div
                    className="p-4"
                    style={{ width: "200px", height: "100px" }}
                  >
                    <img src={card.image} alt="" />
                  </div>
                  <div style={{ fontSize: "14px" }}>
                    <p className="my-3 fw-semibold">{card.description1}</p>
                    <ul
                      className="ms-5"
                      style={{ listStyleType: "circle", padding: 0 }}
                    >
                      {card.features1?.map((features1, idx) => (
                        <li key={idx}>{features1.text}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {card.features.map((feature, idx) => (
                  <div className="row" style={{ fontSize: "14px" }}>
                    <div className="col-lg-6">
                      <div>{feature.text}</div>
                    </div>
                    <div className="col-lg-6 text-end text-success">
                      <div>{feature.value}</div>
                    </div>
                  </div>
                ))}
                <div className="mx-auto d-flex justify-content-center ">
                  <button
                    className="btn btn-primary  mt-3"
                    style={{ background: `${card.bgColor}`, color: "white" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setCurrentPlan(card)} // Set the current plan data
                  >
                    {card.buttonText}
                  </button>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content" style={{ width: "670px" }}>
                        <div className="modal-header">
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          {currentPlan ? (
                            <div className="flex justify-center items-center z-10 bg-white">
                              <div className="flex md:flex-row flex-col h-[500px] relative shadow-md shadow-slate-400">
                                {/* Left side */}
                                <div className="hidden md:flex flex-col gap-2 bg-slate-100 p-6 md:justify-center w-[42%] text-sm">
                                  <img
                                    src="https://assets.nobroker.in/nb-new/public/Signup/signupHome.png"
                                    alt=""
                                    width="30%"
                                  />
                                  <div className="font-bold">
                                    {currentPlan.title}
                                  </div>
                                  {currentPlan.subscribe &&
                                    currentPlan.subscribe.map(
                                      (subscribe, index) => (
                                        <div
                                          className="flex items-center opacity-80 text-xs"
                                          key={index}
                                        >
                                          <IoMdCheckmark /> {subscribe.text}
                                        </div>
                                      )
                                    )}
                                </div>

                                {/* Right side */}
                                <div className="md:hidden flex flex-row-reverse md:justify-between gap-8 px-4 pt-4">
                                  <img
                                    src="/loginSignup/signupHome.png"
                                    alt=""
                                    className="mr-0 w-20 h-20"
                                  />
                                  <div>
                                    <h2>Login / Sign up</h2>
                                    <span className="text-sm">
                                      Zero Brokerage. Thousands of new listings
                                      daily. 100 Cr+ Brokerage saved monthly.
                                    </span>
                                  </div>
                                </div>

                                {/* Phone Input Section */}
                                <div className="flex flex-col md:h-auto h-full justify-between p-4 md:p-8 md:mt-4 md:w-7/12">
                                  <div className="flex flex-col gap-4">
                                    <div className="mb-0 text-lg font-medium">
                                      Enter phone to continue
                                    </div>
                                    <div
                                      className="col"
                                      style={{ border: "0 solid #e5e7eb" }}
                                    >
                                      <PhoneInput
                                        country={"np"}
                                        value=""
                                        inputClass="form-control uniform-input"
                                        inputStyle={{
                                          width: "100%",
                                          height: "45px",
                                          fontSize: "14px",
                                          padding: "10px 45px",
                                        }}
                                      />
                                    </div>
                                    <button
                                      type="submit"
                                      className="bg-red-500 hover:bg-red-600 text-white w-full px-4 py-2 rounded-md"
                                    >
                                      Continue
                                    </button>
                                  </div>
                                  <div className="text-center">
                                    <span className="text-xs">
                                      By continuing, you agree to our{" "}
                                    </span>
                                    <span className="hover:underline font-bold text-xs cursor-pointer">
                                      Terms & Conditions
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div>Loading...</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p
                  className="ms-3 text-center text-primary mt-3 term-pag position-relative"
                  style={{ fontSize: "12px" }}
                >
                  {card.term}
                  <div className="term-cond">
                    <p>{card.conditation}</p>
                  </div>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p>
            All Plans are valid for 3 months.
            <span
              className="text-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
            >
              {" "}
              T&C apply.
            </span>
          </p>
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
                  <ul className="ms-5 mt-2" style={{ listStyleType: "circle" }}>
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
          <p>Click here for Seller Plans</p>
        </div>

        <div className="container mt-5">
          <h1 className="text-center text-2xl mb-14">HOW ASSISTED PLANS WORK</h1>
          <div className="row align-items-center position-relative">
            <div className="col-lg-4 overflow-hidden d-flex flex-column align-items-center">
              <img src="BuyersPlan/1.png" alt="" srcset="" />
              <div className="line-dashed"></div>
            </div>
            <div className="col-lg-4 ">
              <h1 className="text-danger"> LOOKING FOR A HOUSE?</h1>
              <p>
                Just get one of our Assisted Plans and make your lives simpler.
              </p>
            </div>
            <div className="col-lg-4"></div>
            <div className="bottom-border"></div>
          </div>
          <div className="row align-items-center  position-relative">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 ">
              <h1 className="text-danger"> LOOKING FOR A HOUSE?</h1>
              <p>
                Just get one of our Assisted Plans and make your lives simpler.
              </p>
            </div>
            <div className="col-lg-4 overflow-hidden d-flex flex-column align-items-center">
              <div className="line-dashed"></div>
              <img src="BuyersPlan/2.png" alt="" srcset="" />
              <div className="line-dashed"></div>
            </div>
            <div className="bottom-border"></div>
          </div>
          <div className="row align-items-center  position-relative">
            <div className="col-lg-4 overflow-hidden  d-flex flex-column align-items-center">
              <div className="line-dashed"></div>
              <img src="BuyersPlan/3.png" alt="" srcset="" />
              <div className="line-dashed"></div>
            </div>
            <div className="col-lg-4 ">
              <h1 className="text-danger"> LOOKING FOR A HOUSE?</h1>
              <p>
                Just get one of our Assisted Plans and make your lives simpler.
              </p>
            </div>
            <div className="col-lg-4"></div>
            <div className="bottom-border"></div>
          </div>
          <div className="row align-items-center  position-relative">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 ">
              <h1 className="text-danger"> LOOKING FOR A HOUSE?</h1>
              <p>
                Just get one of our Assisted Plans and make your lives simpler.
              </p>
            </div>
            <div className="col-lg-4 overflow-hidden  d-flex flex-column align-items-center">
              <div className="line-dashed"></div>
              <img src="BuyersPlan/4.png" alt="" srcset="" />
              <div className="line-dashed"></div>
              <div className="bottom-border"></div>
            </div>
          </div>
          <div className="row align-items-center ">
            <div className="col-lg-4 overflow-hidden  d-flex flex-column align-items-center">
              <div className="line-dashed"></div>
              <img src="BuyersPlan/5.png" alt="" srcset="" />
            </div>
            <div className="col-lg-4 ">
              <h1 className="text-danger"> LOOKING FOR A HOUSE?</h1>
              <p>
                Just get one of our Assisted Plans and make your lives simpler.
              </p>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>

        <div className="ms-28 me-28 Rentreceiptfaq">
          <div className=" ms-4 pt-3 pb-2 mt-5">
            <h3 className="fs-5 pb-2 text-center" style={{ color: "#464949" }}>
              <strong>Frequenty asked questions</strong>
            </h3>
          </div>
          <hr />

          <div className="" style={{ marginBottom: "90px" }}>
            {faqQueAns.map((data, index) => (
              <div className="faq-item" key={index}>
                <div
                  className={`faq-question ${
                    openIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleAnswer(index)}
                >
                  <span>{data.question}</span>
                  <span
                    className={`faq-icon ${
                      openIndex === index ? "rotate" : ""
                    }`}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </div>
                {openIndex === index && (
                  <div className="faq-answer">{data.ans}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyersPlan;
