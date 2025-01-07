import React,{useState} from "react";
import { IoMdCheckmark } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/BuyersPlan.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
const Subscription = () => {

  const [currentPlan, setCurrentPlan] = useState(null);

  const cards = [
    {
      title: "Freedom Plan",
      price: "रु 2,899",
      gst_price: "रु 521.82",
      payable: "रु 3,420.82",
      gst: "+18% GST",
      description: "Get genuine house owner contacts matching your requirements",
      description1: "Complete Relocation Assistance on Call",
      features1: [
        { text: "Free Customized Packer and Mover Quote" },
        { text: "Free Rental Agreement consultation with expert" },
        { text: "On-Demand Support" },
      ],
      features: [
        { text: "Premium Filters", value: "✔" },
        { text: "Number of Contacts", value: "upto 25" },
        { text: "Instant Property Alerts on SMS", value: "✔" },
      ],
      image: "https://assets.nobroker.in/static/img/paymentModal/rm.png",
      buttonText: "Subscribe",
      bgColor: "#004958", // Red background color
      subscribe: [
        { text: "Upto 50 Seller Contacts" },
        { text: "Instant New Property Alerts" },
        { text: "Get Assistance in Home Loan an..." },
        { text: "Save Lakhs in Brokerage" },
      ],
    },
    {
      title: "Relax Plan",
      price: "रु 2,999",
      gst: "+18% GST",
      gst_price: "रु 539.82",
      payable: "रु 3,438.82",
      description:
        "Get Relationship Manager to help you SAVE time and money",
      description1: "Dedicated Property Expert",
      features1: [
        { text: "Contacts owners and fixes meetings" },
        { text: "Negotiates rent on your behalf" },
        { text: "Provides locality level expertise" },
      ],
      features: [
        { text: "Premium Filters", value: "✔" },
        { text: "Number of Contacts", value: "upto 25" },
        { text: "Instant Property Alerts on SMS", value: "✔" },
        { text: "Locality Experts", value: "✔" },
        { text: "Rent Negotiation", value: "✔" },
      ],
      image: "https://assets.nobroker.in/static/img/paymentModal/rm.png",
      buttonText: "Subscribe",
      bgColor: "#005580", 
      subscribe: [
        { text: "Upto 50 Seller Contacts" },
        { text: "Instant New Property Alerts" },
        { text: "Get Assistance in Home Loan an..." },
        { text: "Save Lakhs in Brokerage" },
      ],
    },
    {
      title: "MoneyBack Plan",
      price: "रु 4,999",
      gst: "+18% GST",
      gst_price: "रु 899.82",
      payable: "रु 5,898.82",
      description: "Get Guaranteed home or 100% Refund",
      description1: "Dedicated Property Expert",
      features1: [
        { text: "Contacts owners and fixes meetings" },
        { text: "Negotiates rent on your behalf" },
        { text: "Provides locality level expertise" },
      ],
      features: [
        { text: "Premium Filters", value: "✔" },
        { text: "Number of Contacts", value: "upto 25" },
        { text: "Instant Property Alerts on SMS", value: "✔" },
        { text: "Locality Experts", value: "✔" },
        { text: "Rent Negotiation", value: "✔" },
      ],
      image: "https://assets.nobroker.in/static/img/paymentModal/rm.png",
      buttonText: "Subscribe",
      bgColor: "#D83B3B", 
      subscribe: [
        { text: "Upto 50 Seller Contacts" },
        { text: "Instant New Property Alerts" },
        { text: "Get Assistance in Home Loan an..." },
        { text: "Save Lakhs in Brokerage" },
      ],
    },
  ];

  return (
    <>
    <div className="row mx-auto mt-5 g-3">
          {cards.map((card, index) => (
            <div className="col-lg-4">
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
                <h4 className="d-flex">
                <div class="line-through">रु 1,999</div>
                <div>
                  <div>{card.price}</div>
                  <div className="gst-hover" style={{cursor:"pointer"}}>
                    {card.gst}
                    <div className="hover-box fw-normal p-3" style={{fontSize:"14px"}}>
                      <div className="hover-flex mb-2">
                        <p>Plan Price</p>
                        <p>{card.price}</p>
                      </div>
                      <div className="hover-flex mb-2">
                        <p>GST @ 18%</p>
                        <p>{card.gst_price}</p>
                      </div>
                      <hr />
                      <div className="hover-flex fw-semibold">
                        <p>Amount Payable</p>
                        <p>{card.payable}</p>
                      </div>
                    </div>
                  </div>
                  </div>
                </h4>
              </div>

              <div
                className="p-3"
                style={{ border: `2px solid ${card.bgColor}`,height: "500px",width:"100%" }}
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
                  <div className="mb-4" style={{ fontSize: "14px" }}>
                    <p className="my-3 fw-semibold">{card.description1}</p>
                    <ul
                      className="ms-5"
                      style={{ listStyleType: "disc", padding: 0 }}
                    >
                      {card.features1?.map((features1, idx) => (
                        <li key={idx} className="mt-1">{features1.text}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                {card.features.map((feature, idx) => (
                  <div className="row mt-1" style={{ fontSize: "14px" }}>
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
                    className="btn btn-primary  mt-5"
                    style={{ background: `${card.bgColor}`, color: "white" }}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setCurrentPlan(card)} 
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
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <p style={{fontSize:"14px", color: "#464646"}}>
          Plan Validity : MoneyBack & Relax ( 45 Days ) , Freedom & Basic ( 90 days ).
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
                <div class="modal-body text-start" style={{color: "#464646"}}>
                <h4 className="fw-semibold">Freedom Plan:</h4>
                  <ul className="ms-5 mt-2" style={{ listStyleType: "disc", fontSize: "14px"}}>
                    <li>
                    Valid for 3 month.
                    </li>
                    </ul>

                    <h4 className="fw-semibold mt-3">Relax Plan:</h4>
                    <ul className="ms-5 mt-2" style={{ listStyleType: "disc", fontSize: "14px"}}>
                    <li>
                    Valid for 45 days.
                    </li>
                    </ul>

                  <h4 className="fw-semibold mt-3">MoneyBack plan:</h4>
                  <ul className="ms-5 mt-2" style={{ listStyleType: "disc", fontSize: "14px"}}>
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
          <div className="mt-4">
          <a
              href="owner-plan"
              style={{ color: "#999999", fontSize: "18px" }}
            >
              Click here for Owner Plans
            </a>
          </div>
        </div>
    </>
  )
};

export default Subscription;
