import React from "react";
import { BiStar } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const CheckEligibility = ({ selectedOption }) => {
  const buyData = [
    {
      id: 1,
      image: "home/builder_project.png",
      text: "Builder Projects",
      condition: "New",
    },
    {
      id: 2,
      image: "home/sale_agreement.png",
      text: "Sale Agreement",
      condition: "New",
    },
    {
      id: 3,
      image: "home/home_loan.png",
      text: "Home Loan",
      condition: "",
    },
    {
      id: 4,
      image: "home/property_legal_services.png",
      text: "Property Legal Services",
      condition: "",
    },
    {
      id: 5,
      image: "home/home_interiors.svg",
      text: "Home Interiors",
      condition: "Sale is live!",
    },
    {
      id: 6,
      image: "home/for_nris.png",
      text: "NESTATE For NRIs",
      condition: "",
    },
  ];

  const rentData = [
    {
      id: 1,
      image: "home/packers_&_movers.png",
      text: "Packers & Movers",
      condition: "Lowest Price",
    },
    {
      id: 2,
      image: "home/pay_rent.png",
      text: "Pay rent",
      condition: "New Offers",
    },
    {
      id: 3,
      image: "home/rental_agreement_1.png",
      text: "Rental Agreement",
      condition: "Flat 30% off",
    },
    {
      id: 4,
      image: "home/ClicknEarn.svg",
      text: "Click & Earn",
      condition: "",
    },
    {
      id: 5,
      image: "home/painting_&_cleaning.png",
      text: "Painting & Cleaning",
      condition: "New",
    },
    {
      id: 6,
      image: "home/for_nris.png",
      text: "NESTATE For NRIs",
      condition: "",
    },
  ];

  const homeServicesOne = [
    {
      id: 1,
      bg_image: "home/cleaning-diwali.png",
      title: "Home Cleaning",
    },
    {
      id: 2,
      bg_image: "home/painting-diwali.png",
      title: "Home Painting",
    },
  ];

  const homeServicesTwo = [
    {
      id: 1,
      bg_image: "home/pnm-diwali.png",
      title: "Packers & Movers",
    },
    {
      id: 2,
      bg_image: "home/ra-diwali.png",
      title: "Rental Agreement",
    },
    {
      id: 3,
      bg_image: "home/plumbin-diwali.png",
      title: "Plumbing & Carpentry",
    },
    {
      id: 4,
      bg_image: "home/rent-payment-diwali.png",
      title: "Rent Payment",
    },
  ];

  const whyUsenobroker = [
    {
      id: 1,
      image: "home/avoid_brokers.png",
      heading: "Avoid Brokers",
      text: "We directly connect you to verified owners to save brokerage",
    },
    {
      id: 2,
      image: "home/free_listing.png",
      heading: "Free Listing",
      text: "Easy listing process. Also using WhatsApp",
    },
    {
      id: 3,
      image: "home/shortlist_without_visit.png",
      heading: "Shortlist without Visit",
      text: "Extensive Information makes it easy",
    },
    {
      id: 4,
      image: "home/rental_agreement_2.png",
      heading: "Rental Agreement",
      text: "Assistance in creating Rental agreement & Paper work",
    },
  ];

  const assistedPlans = [
    {
      id: 1,
      image: "home/extraservicesprite_v1.svg",
      text: "Dedicated Property expert to guide you",
    },
    {
      id: 2,
      image: "home/extraservicesprite_v1.svg",
      text: "Guaranteed property or 100% refund",
    },
    {
      id: 3,
      image: "home/extraservicesprite_v1.svg",
      text: "Receive instant property alerts",
    },
    {
      id: 4,
      image: "home/extraservicesprite_v1.svg",
      text: "Explore More",
    },
  ];

  const legalServices = [
    {
      id: 1,
      image: "home/nb_dynamic_grid_new_v5_new.svg",
      title: "Rental Agreement",
    },
    {
      id: 2,
      image: "home/nb_dynamic_grid_new_v5_new.svg",
      title: "Tenant Verification",
    },
    {
      id: 3,
      image: "home/nb_dynamic_grid_new_v5_new.svg",
      title: "Sale Agreement",
    },
    {
      id: 4,
      image: "home/nb_dynamic_grid_new_v5_new.svg",
      title: "Property Legal Service",
    },
  ];

  const legalServicesDown = [
    {
      id: 1,
      image: "home/nb_dynamic_grid_new_v5_new.svg",
      title: "Rent receipt Generator",
      text: "Generate rent receipts hassle-free",
    },
    {
      id: 2,
      image: "home/nb_dynamic_grid_new_v5_new.svg",
      title: "NB Estimate",
      text: "Know realtime rent trends & market value",
    },
    {
      id: 3,
      image: "home/nb_dynamic_grid_new_v5_new.svg",
      title: "Property ALerts",
      text: "Get tailor-made property recommendations",
    },
    {
      id: 3,
      image: "home/nb_dynamic_grid_new_v5_new.svg",
      title: "Property ALerts",
      text: "Get tailor-made property recommendations",
    },
  ];

  const nobrokerForNris = [
    {
      id: 1,
      image: "home/nb_dynamic_grid_new_v5_new.svg",
      text: "End-to-End Property Management Servicess",
    },
    {
      id: 2,
      image: "home/nb_dynamic_grid_new_v5_new.svg",
      text: "24*7 Support on Intl. phone number",
    },
    {
      id: 3,
      image: "home/nb_dynamic_grid_new_v5_new.svg",
      text: "Personal Field Assistant at your Property",
    },
    {
      id: 4,
      image: "home/nb_dynamic_grid_new_v5_new.svg",
      text: "Explore More",
    },
  ];

  const financialServices = [
    {
      id: 1,
      image: "home/nb_dynamic_grid_new_v5_new.svg",
      title: "Rent Payment",
    },
    {
      id: 2,
      image: "home/nb_dynamic_grid_new_v5_new.svg",
      title: "Utility Bill Payment",
    },
    {
      id: 3,
      image: "home/nb_dynamic_grid_new_v5_new.svg",
      title: "Maintenance Bill Payment",
    },
    {
      id: 4,
      image: "home/nb_dynamic_grid_new_v5_new.svg",
      title: "Fees",
    },
  ];

  return (
    <>
      <div className="hidden md:block">
        <div className="text-sm mt-4">
          {selectedOption === "Buy" || selectedOption === "Rent" ? (
            <div className="bg-[#004953] p-3.5 flex items-center justify-center gap-2.5">
              <img src="home/check_eligibility.png" alt="" className="mr-0" />
              <div className="text-white font-extralight">
                <span>Do you know how much </span>
                <span className="font-bold">loan </span>
                <span>you can get? Get maximum with </span>
                <span className="font-bold">nobroker</span>
              </div>
              <button className="bg-white px-2 py-1.5 rounded-md text-xs">
                Check Eligibility
              </button>
            </div>
          ) : selectedOption === "Commercial" ? (
            <div className="bg-[#004958] p-3.5 flex items-center justify-center gap-2.5">
              <img src="home/homeCreditCard_icon.png" alt="" className="mr-0" />
              <div className="text-white">
                <span>Earn rewards upto </span>
                <span className="font-bold">R.30,000 </span>
                <span>when you pay rent with </span>
                <span className="font-bold">credit card</span>
              </div>
              <button className="bg-white px-2 py-1.5 rounded-md text-xs">
                <Link to="/pay-rent">Pay Rent Now</Link>
              </button>
            </div>
          ) : null}
        </div>

        <div className="flex justify-between items-end overflow-x-auto gap-4 px-20">
          {(selectedOption === "Buy" ? buyData : rentData).map((item) => (
            <Link
              to={`${
                item.text === "Click & Earn"
                  ? "refer-and-earn"
                  : item.text
                      .toLowerCase()
                      .replaceAll(" ", "-")
                      .replaceAll("&", "and")
              }`}
              key={item.id}
            >
              <div className="flex flex-col md:justify-center items-center text-center p-2 cursor-pointer !border md:!border-0 rounded-tl-2xl rounded-br-2xl">
                {item.condition && (
                  <span className="text-[11px] bg-[orange-200/50] px-2 py-1 rounded-2xl mb-1 w-fit">
                    {item.condition}
                  </span>
                )}
                <img
                  src={item.image}
                  alt=""
                  className="mr-0 w-[60px] h-[60px] hover:scale-110 transition duration-300"
                />
                <span className="mt-3 text-xs font-light">{item.text}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="py-10">
          <div className="flex flex-nowrap items-center justify-center gap-4">
            <hr className="w-full opacity-40" />
            <h2 className="text-[30px] opacity-60">
              Why&nbsp;use&nbsp;nobroker
            </h2>
            <hr className="w-full opacity-40" />
          </div>
          <div>
            <div className="flex flex-row justify-between gap-4 mt-8">
              {whyUsenobroker.map((item) => (
                <Link
                  to={`${
                    item.heading === "Free Listing"
                      ? "post-property"
                      : item.heading.toLowerCase().replaceAll(" ", "-")
                  }`}
                  key={item.id}
                >
                  <div className="flex flex-col gap-2 items-center text-center">
                    <img
                      src={item.image}
                      alt=""
                      className="mr-0 w-auto h-auto hover:scale-125 transition duration-300"
                    />
                    <div className="">{item.heading}</div>
                    <span className="text-xs font-light w-8/12">
                      {item.text}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-neutral-100 py-10">
          <div>
            <div className="grid grid-cols-4 items-center text-center">
              <hr className="opacity-20" />
              <div className="text-3xl col-span-2 opacity-50">
                nobroker Business Assit Plan For Builders
              </div>
              <hr className="opacity-20" />
            </div>
            <div className="flex items-center justify-center gap-10 mt-10">
              <img src="home/builder_assist.png" alt="Builder Assist" />
              <div>
                <div className="mb-10 opacity-70">
                  Get in touch with us to Sell or Rent Your Projects
                </div>
                <button className="bg-[#ff5800] text-white p-3">
                  Enquire Now
                </button>
                <hr className="m-0 opacity-10" />
                <div className="text-xs">
                  For Builder Enquiries: +91 91080 50400
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="flex items-center justify-between gap-4">
            <hr className="w-full opacity-20" />
            <div className="min-w-fit text-3xl opacity-70">
              We Make A Difference
            </div>
            <hr className="w-full opacity-20" />
          </div>

          <div className="flex justify-center items-center gap-14 mt-10">
            <div className="flex flex-col items-center gap-2">
              <div className="border-2 border-[#ff5800] text-[#ff5800] text-4xl h-[170px] w-[170px] rounded-full text-center leading-[170px]">
                R130 cr+
              </div>
              <div className="text-xl">Brokerage saved monthly</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="border-2 border-[#ff5800] text-[#ff5800] text-4xl h-[170px] w-[170px] rounded-full flex items-center text-center justify-center">
                30 lakh +
              </div>
              <div className="text-xl">Customers Connected Monthly</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="border-2 border-[#ff5800] text-[#ff5800] text-4xl h-[170px] w-[170px] rounded-full flex items-center text-center justify-center">
                2 lakh +
              </div>
              <div className="text-xl">New Listings Monthly</div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="bg-[#f2f2f2] md:hidden">
        <div className="flex p-4 flex-col gap-4">
          <div className="flex justify-between">
            <div>Home Services</div>
            <div className="text-teal-600 text-xs">See All &gt;</div>
          </div>
          <div>
            <div className=" flex justify-between gap-4">
              {homeServicesOne.map((item) => (
                <Link to={item.title.replaceAll(" ", "-").toLowerCase()}>
                  <div
                    key={item.id}
                    className={`bg-no-repeat w-48 rounded-br-3xl rounded-tl-3xl rounded-tr-lg rounded-bl-lg mx-auto bg-cover h-24`}
                    style={{
                      backgroundImage: `url(${item.bg_image})`,
                    }}
                  >
                    <div className="h-full bg-gradient-to-r from-white from-20% to-white/20 to-70% border border-[#562c0c56] rounded-br-3xl rounded-tl-3xl rounded-tr-lg rounded-bl-lg p-2 flex items-center">
                      <div className="text-sm font-semibold w-7/12">
                        {item.title}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className=" flex justify-between gap-4 overflow-x-scroll no-scrollbar">
              {[...homeServicesTwo, ...homeServicesTwo].map((item, i) => (
                <Link
                  to={
                    item.title === "Rent Payment"
                      ? "/pay-rent"
                      : item.title.replaceAll(" ", "-").toLowerCase()
                  }
                  key={i}
                >
                  <div className="flex flex-col items-center gap-2 p-1.5 border border-[#562c0c56] rounded-br-3xl rounded-tl-3xl rounded-tr-lg rounded-bl-lg min-w-[84px]">
                    <img
                      src={item.bg_image}
                      alt={item.title}
                      className="mx-auto rounded-br-3xl rounded-tl-3xl rounded-tr-lg rounded-bl-lg"
                    />

                    <div className="text-[11px] text-center">{item.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <span className="text-[11px] text-center text-[#99837A] flex items-center justify-center gap-1">
            3 Lacs + Services booked in last 3 months | 4.5
            <BiStar className="mb-1" />
          </span>
        </div>

        <div className="p-4">
          <div className="bg-[url(home/instacash-home-banner-new.webp)] bg-cover px-4 pt-4 flex flex-col gap-2 w-full">
            <div className="font-semibold">
              Get Upto <span className="text-teal-600">रु 5Lakhs</span>
            </div>
            <div className="text-xs font-medium">Instant Cash!</div>
            <button className="bg-teal-600 font-semibold text-sm text-white p-2 w-fit rounded-md">
              Withdraw Now
            </button>
            <div className="flex text-[10px]">
              Safe. Secure. Quick |
              <img src="home/pcids.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="flex justify-between p-4 bg-white my-1">
          <div className="flex flex-col gap-3">
            <div className="font-medium text-sm">Packers & Movers</div>
            <div className="text-xs">
              Guaranteed on-time, safe delivery at great prices
            </div>
            <img src="home/lowestPrice.png" alt="" className="w-24" />
            <div className="flex items-center gap-1 text-teal-600 font-semibold text-sm">
              Explore <BsArrowRight />
            </div>
          </div>
          <div className="bg-[url(home/extraservicesprite_v1.svg)] bg-cover px-4 pt-4 flex flex-col gap-2 w-40 bg-[--208px_-51px]"></div>
        </div>

        <div className="bg-[#EAE9F5] px-4 my-1">
          <div className="pt-5 font-medium">Assisted Plans</div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-5 mt-4">
            {assistedPlans.map((item) => (
              <div className="flex flex-col justify-between rounded-lg p-3 gap-2 min-w-40 bg-white">
                <img src={item.image} alt="" className="w-10" />
                <div className="text-[11px]">{item.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-white my-1">
          <div className="font-medium">Legal Services</div>
          <div className="grid grid-cols-4 gap-2 mt-5">
            {legalServices.map((item) => (
              <div className="flex flex-col items-center text-center gap-3">
                <img src={item.image} alt="" className="w-10 m-0" />
                <div className="text-xs font-medium">{item.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white my-1.5">
          <div className="flex overflow-x-scroll no-scrollbar py-4">
            <div className="flex flex-col items-center text-center px-6">
              <img
                src="home/nb_dynamic_grid_new_v5_new.svg"
                alt=""
                className="w-14"
              />
              <div className="uppercase text-sm">Tools & Insights</div>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                {legalServicesDown.map((item) => (
                  <div className="bg-[#f5f8fb] min-w-52 p-3 rounded-md">
                    <div className="flex justify-between">
                      <div className="text-[13px] font-medium">
                        {item.title}
                      </div>
                      <img src={item.image} alt="" className="w-10 m-0" />
                    </div>
                    <div className="text-xs font-light">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[rgb(234,233,245)] my-1.5">
          <div className="p-4">
            <div className="font-medium">nobroker For NRIs</div>
            <div className="flex gap-4 mt-2 overflow-x-auto">
              {nobrokerForNris.map((item) => (
                <div className="bg-white flex justify-between gap-2 min-w-40 flex-col p-4 rounded-lg">
                  <img src={item.image} alt="" className="w-8" />
                  <div className="text-[10.5px]">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white mt-2 p-4">
          <div className="flex justify-between mb-4">
            <div className="text-sm font-semibold">
              One-stop-shop for all Payments
            </div>
            <div className="text-teal-600 text-sm font-medium">See All</div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="bg-[rgb(233,248,241,1)] rounded-md p-2 flex-grow relative">
              <div className="text-xs font-medium">Rent Payment</div>
              <div className="text-[10px] mt-2">
                Trusted by 1Lac+ users <br />
                with secure system
              </div>
              <img src="home/newOfferCard.svg" alt="" className="m-0 py-1" />
              <div className=" rounded-full bg-[#B0D0BD] px-1.5 w-fit">
                <img src="home/arrowIcon.svg" alt="" className="m-0" />
              </div>
              <img
                src="home/extraservicesprite_v1.svg"
                alt=""
                className="w-28 m-0 absolute bottom-0 right-0"
              />
            </div>
            <div className="flex flex-col gap-2 flex-grow">
              <div>
                <div className="bg-[rgb(234,235,248,1)] rounded-md pb-6 p-2 relative">
                  <div className="text-xs font-medium py-1">
                    Maintenance &amp; <br />
                    Fee Payment
                  </div>
                  <div className="text-[10px]">24/7 instant transfer*</div>
                  <div className=" rounded-full bg-[#A9ABCC] px-1.5 w-fit">
                    <img src="home/arrowIcon.svg" className="m-0" />
                  </div>
                  <img
                    src="home/extraservicesprite_v1.svg"
                    alt=""
                    className="w-20 m-0 absolute bottom-0 right-0"
                  />
                </div>
              </div>
              <div className="bg-[rgb(244,244,244,1)] rounded-md relative p-2 pb-6">
                <div className="text-xs font-medium">Utility Bill</div>
                <div className="text-[10px] py-1">Faster & hassle-free</div>
                <div className=" rounded-full bg-[#C6C6C6] px-1.5 w-fit">
                  <img src="home/arrowIcon.svg" alt="" className="m-0" />
                </div>
                <img
                  src="home/extraservicesprite_v1.svg"
                  alt=""
                  className="w-20 m-0 absolute bottom-0 right-0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 my-1">
          <div className="flex">
            <img src="home/extraservicesprite_v1.svg" alt="" className="w-24" />
            <div className="flex flex-col gap-2">
              <div className="text-sm font-semibold">
                Property Management Services
              </div>
              <div className="font-light text-xs">
                From inspection to tenant placement, We make renting your
                property a breeze
              </div>
              <div className="flex items-center gap-1 text-teal-600 font-medium text-sm">
                Explore <BsArrowRight />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 my-1">
          <div>FInancial Services</div>
          <div className="flex gap-4 items-center justify-center">
            {financialServices.map((item) => (
              <div className="flex flex-col items-center text-center justify-center w-20 gap-2">
                <img src={item.image} alt="" className="w-10 m-0" />
                <div className="text-xs font-medium">{item.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white m-4 p-4 rounded-xl ">
          <div className="flex justify-between mb-2">
            <div>
              <div className="text-sm font-medium">Rent Calculator</div>
              <div className="text-[10px]">AI-powered rent estimates</div>
            </div>
            <img src="home/nbestimate.svg" alt="" className="m-0" />
          </div>
          <div className="bg-[rgb(237,233,245)] flex items-center gap-4 p-4 rounded-xl">
            <div className="">
              <img
                src="/home/meter-9-svgrepo-com.svg"
                alt=""
                className="w-36"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-[#666bb1] text-[10.5px]">
                Your property is expected to have a rent between
              </div>
              <div className="font-medium text-sm">
                रु <span className="blur-sm">34,999</span>रु
              </div>
              <div className="text-white bg-teal-600 p-2 w-fit text-xs rounded-md">
                Know your fair rent
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white px-5 py-4 my-1 flex">
          <div className="flex flex-col gap-3">
            <div className="font-medium text-sm">
              Relocation Services for Corporates
            </div>
            <p className="text-xs">
              Home search relocation services for your employees is easier now
              than ever before
            </p>
            <div className="flex items-center gap-1 text-teal-600 font-semibold text-sm">
              Explore <BsArrowRight />
            </div>
          </div>
          <div>
            <img
              src="home/extraservicesprite_v1.svg"
              alt=""
              className="m-0 w-48"
            />
          </div>
        </div>

        <div className="bg-white px-5 py-4 flex justify-between mb-10">
          <div>
            <div className="text-sm font-light">Need help?</div>
            <div className="font-extralight text-[11px]">
              Chat with our team for assistance
            </div>
          </div>
          <img src="home/AssistanceChatIcon.svg" alt="" className="m-0 w-8" />
        </div>
      </div>
    </>
  );
};

export default CheckEligibility;
