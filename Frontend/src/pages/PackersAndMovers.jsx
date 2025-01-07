import React from "react";
import CheckPrice from "../components/CheckPrice";
import VipMembership from "../components/PaintingAndCleaningComponent/VipMembership";
import SecondOffer from "../components/PaintingAndCleaningComponent/SecondOffer";
import Testimonial from "../components/Testimonial";
import FrequentAskedQuestion from "../components/FrequentAskedQuestion";
import ServiceComparison from "../components/ServiceComparison";

const PackersAndMovers = () => {
  const service = [
    {
      id: 1,
      image: "packersAndMovers/nb-protect.png",
      title: "NB Protect",
      description: "Household damage protection",
    },
    {
      id: 2,
      image: "packersAndMovers/pickup-rating.svg",
      title: "4.8 / 5 Rating",
      description: "Timely Pickup & Delivery",
    },
    {
      id: 3,
      image: "packersAndMovers/packaging-rating.svg",
      title: "4.9 / 5 Rating",
      description: "Reliable Packaging",
    },
  ];

  const serviceWeOffer = [
    {
      id: 1,
      discount: "upto 25% off",
      image: "packersAndMovers/pnm-sub-services.svg",
      text: "Within City",
    },
    {
      id: 2,
      discount: "upto 25% off",
      image: "packersAndMovers/pnm-sub-services.svg",
      text: "Within City",
    },
    {
      id: 3,
      discount: "upto 25% off",
      image: "packersAndMovers/pnm-sub-services.svg",
      text: "Within City",
    },
    {
      id: 4,
      discount: "upto 25% off",
      image: "packersAndMovers/pnm-sub-services.svg",
      text: "Within City",
    },
  ];

  const review = [
    {
      id: 1,
      user_image: "home/t1.jpg",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NoBroker. It is simply a ..."`,
    },
    {
      id: 2,
      user_image: "home/t2.jpg",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NoBroker. It is simply a ..."`,
    },
    {
      id: 3,
      user_image: "home/t3.jpg",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NoBroker. It is simply a ..."`,
    },
    {
      id: 4,
      user_image: "home/t4.jpg",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NoBroker. It is simply a ..."`,
    },
    {
      id: 5,
      user_image: "home/t5.jpg",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NoBroker. It is simply a ..."`,
    },
  ];

  const faq = [
    {
      id: 1,
      que: "Do I need to visit any government office?",
      ans: "Not even once. We will conduct the whole process for you online / at your home.",
    },
    {
      id: 2,
      que: "How much will it cost?",
      ans: "Please click here to know the charges. Apart from our convenience fee, the charges typically include stamp duty, registration charges, etc.",
    },
    {
      id: 3,
      que: "Landlord and tenant are in different locations?",
      ans: "You can use the Aadhar eSign based digital signature service.",
    },
    {
      id: 4,
      que: "Is Aadhar e-sign valid?",
      ans: "Yes, Aadhaar eSign based digital signatures are a legally accepted and secure manner of electronically signing documents, under effect of Gazette Notification No. 2015 Jan -GSR 61(E) Electronic Signature or Electronic Authentication Technique and Procedure Rules, 2015.",
    },
  ];

  const howItWorks = [
    {
      id: 1,
      image: "packersAndMovers/shifting-requirement.svg",
      title: "Share your Shifting Requirement",
      description: "Help us by providing when and where do you want to move",
    },
    {
      id: 2,
      image: "packersAndMovers/instant-quote.svg",
      title: "Receive Free Instant Quote",
      description:
        "Get guaranteed lowest priced quote for your shifting instantly",
    },
    {
      id: 3,
      image: "packersAndMovers/quality-service-expert.svg",
      title: "Assign Quality Service Expert",
      description:
        "To ensure safe relocation quality service expert will be allotted or your movement",
    },
    {
      id: 4,
      image: "packersAndMovers/heavy-lifting.svg",
      title: "Leave the Heavy Lifting to Us",
      description: "Enjoy hassle-free on time movement of your household goods",
    },
  ];

  const whyPackersAndMovers = [
    {
      id: 1,
      image: "packersAndMovers/lowest-price.svg",
      title: "Lowest Price Guarantee",
      description:
        "Moving at a price you can afford - we’ll match any competitor’s quote",
    },
    {
      id: 2,
      image: "packersAndMovers/quality-service.svg",
      title: "Best Quality Service",
      description: "Safe and Reliable Packaging and Moving Services",
    },
    {
      id: 3,
      image: "packersAndMovers/reschedule-cancellation.svg",
      title: "Reschedule your shifting anytime",
      description: "Change your shifting date as per your convenience.",
    },
    {
      id: 4,
      image: "packersAndMovers/move-manager.svg",
      title: "Support Assistance",
      description: "Dedicated support assistance for quick query resolution",
    },
    {
      id: 5,
      image: "packersAndMovers/professional-labour.svg",
      title: "professional Labour ",
      description: "Expertly packing and moving your belongings",
    },
  ];

  const serviceComparison = [
    { id: 1, service: "Vehicle Assurance", local: "yes", nestate: "yes" },
    { id: 2, service: "Regular Update", local: "no", nestate: "yes" },
    {
      id: 3,
      service: "Packaging & Unpacking Of household goods",
      local: "no",
      nestate: "yes",
    },
    {
      id: 4,
      service: "Dismantling & Re-Assemble Of Cot",
      local: "yes",
      nestate: "yes",
    },
    { id: 5, service: "Labour", local: "yes", nestate: "yes" },
    { id: 6, service: "Bubble/ Foam Wrapping Of", local: "no", nestate: "yes" },
    {
      id: 7,
      service: "On Demand Warehouse Storage",
      local: "no",
      nestate: "yes",
    },
    { id: 8, service: "Damage Assurance", local: "no", nestate: "yes" },
  ];

  const rentalAndLegal = [
    {
      id: 1,
      image: "packersAndMovers/propertyLegalService.webp",
      title: "Property Legal Services",
      price: "Starting @रु2999",
    },
    {
      id: 2,
      image: "packersAndMovers/rentalAgreement.webp",
      title: "Rental Agreement",
      price: "Starting @रु249",
    },
    {
      id: 3,
      image: "packersAndMovers/TenantVerification.webp",
      title: "Tenant Verification",
      price: "Starting @रु99",
    },
  ];

  const offer = [
    {
      id: 1,
      image: "packersAndMovers/ac-gas-charging.svg",
      title: "AC Gas Charging",
      offer: "Starting @ Rs. 2329",
    },
    {
      id: 2,
      image: "packersAndMovers/ac-repair.svg",
      title: "AC Repair",
      offer: "Starting @ Rs. 259",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#5e458f] from-[450px] lg:from-[500px] xl:from-[650px] to-[#ecefec] to-10%">
      <div className="flex xl:w-9/12 mx-auto justify-around">
        <div className="md:w-[60%] w-full">
          <div className="md:px-6 mt-10">
            <div className="text-white text-xl md:text-3xl px-4 md:px-0 font-medium">
              India’s Largest Packers And Movers
            </div>
            <div className="text-white text-sm px-4 md:px-0 opacity-80">
              Service that fits your budget with quality assurance!
            </div>
            <div className="mt-8">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 overflow-x-auto px-4 md:px-0 no-scrollbar">
                  {service.map((item, i) => (
                    <div
                      key={i}
                      className="flex bg-white gap-2 rounded-md items-center p-2 min-w-60"
                    >
                      <img src={item.image} alt="" className="m-0 w-8 h-8" />
                      <div className="text-sm">
                        <div>{item.title}</div>
                        <div className="text-[11px]">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-t-xl p-4 block md:hidden">
                  <CheckPrice />
                </div>
                <div className="px-4 md:px-0">
                  <video
                    src="videos/Diwali_cleaning.mp4"
                    autoPlay
                    content="play"
                    className="rounded-xl"
                  ></video>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md md:m-4 my-1.5 p-6 pb-16">
            <div className="text-2xl font-medium mb-8">Services we offer</div>
            <div className="flex justify-around relative">
              {serviceWeOffer.map((item) => (
                <div className="flex flex-col gap-3 items-center text-center">
                  <div className="bg-[#ffe8c3] text-xs absolute px-1 rounded-full">
                    {item.discount}
                  </div>
                  <img
                    src={item.image}
                    alt=""
                    className="m-0 w-20 h-20 rounded-full bg-zinc-200"
                  />
                  <div className="text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-md md:m-4 my-1.5 px-6 py-5">
            <VipMembership title={"In Spotlight"} />
          </div>

          <div className="bg-white rounded-md md:m-4 my-1.5 px-6 py-5">
            <div className="text-xl font-medium mb-10">How it Works?</div>

            <div className="flex flex-col gap-6">
              {howItWorks.map((item) => (
                <div className="flex items-center gap-2">
                  <div className="bg-zinc-100 rounded-full p-3">
                    <img src={item.image} alt="" className="m-0 w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-medium">{item.title}</div>
                    <div className="text-[10.5px] opacity-80">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 w-full mt-10">
              <div>
                <img
                  src="packersAndMovers/multi-layer-packaging-esp.webp"
                  alt=""
                  className="m-0"
                />
              </div>
              <div>
                <img src="packersAndMovers/expert-serivce-esp.webp" alt="" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md md:m-4 my-1.5 px-6 py-5">
            <div className="text-xl font-medium mb-10">
              Why Nestate's Packers and Movers?
            </div>
            <div className="flex flex-col gap-6">
              {whyPackersAndMovers.map((item) => (
                <div className="flex items-center gap-2">
                  <img src={item.image} alt="" className="m-0 w-12 h-12" />

                  <div>
                    <div className="text-xs font-medium">{item.title}</div>
                    <div className="text-[10.5px] opacity-80">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-md md:m-4 my-1.5 p-6">
            <div className="text-xl font-semibold mb-8">
              Rental Agreements & Legal Services
            </div>
            <div className="flex justify-between">
              {rentalAndLegal.map((item) => (
                <div className="flex flex-col border items-center rounded-t-full pb-4  gap-4">
                  <img src={item.image} alt="" className="m-0 w-full" />
                  <div className="flex flex-col items-center text-center gap-4 w-10/12">
                    <div className="text-[15px] font-semibold">
                      {item.title}
                    </div>
                    <div className="bg-[#212365] text-white text-xs px-2 py-1">
                      {item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#004953] rounded-md py-10 px-8 md:m-4 my-1.5">
            <div className={` font-medium mb-4 text-white text-3xl`}>
              AC Summer Needs
            </div>
            <div className="grid grid-cols-2 gap-3">
              {offer.map((item) => (
                <div
                  key={item.id}
                  className="bg-white flex flex-col px-2 py-3 justify-between rounded-lg h-40 gap-3"
                >
                  <img src={item.image} className="m-0 w-24 mx-auto" alt="" />
                  <div className="text-left flex flex-col">
                    <div className="font-bold text-sm flex">
                      {item.title}
                      <img
                        src="paintingAndCleaning/arrow-icon-right.svg"
                        alt=""
                        className="m-0"
                      />
                    </div>
                    <div className="opacity-50 text-sm">Flat 25% off</div>
                  </div>
                </div>
              ))}

              <div className="bg-white flex items-center justify-evenly gap-4 px-2 py-4 rounded-lg col-span-2">
                <img src="packersAndMovers/ac-installation.svg" alt="" />
                <div>
                  <div className="font-bold text-sm flex">
                    AC Installation
                    <img
                      src="paintingAndCleaning/arrow-icon-right.svg"
                      alt=""
                      className="m-0"
                    />
                  </div>
                  <div className="opacity-50 text-sm">Starting @ Rs. 719</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white md:m-4 rounded-md my-1.5 p-6">
            <ServiceComparison serviceComparison={serviceComparison} />
          </div>

          <div className="bg-[#F7F9FD] rounded-md p-6 md:m-4 my-1.5">
            <div className="text-xl font-semibold mb-4">Our Happy Customer</div>
            <Testimonial review={review} />
          </div>

          <div className="md:m-4 my-1.5 rounded-md bg-white p-4">
            <div className={`font-medium md:text-xl text-lg mb-4 `}>
              Frequently Asked Questions
            </div>
            <FrequentAskedQuestion
              faq={faq}
              title={"Frequently Asked Questions"}
            />
          </div>
        </div>
        <div className="hidden md:block md:w-[40%] relative">
          <div className="sticky z-50 top-20 mt-16 bg-white rounded-t-xl p-4">
            <CheckPrice />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackersAndMovers;
