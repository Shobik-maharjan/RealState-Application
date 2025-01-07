import React, { useState } from "react";
import Search from "../components/PaintingAndCleaningComponent/Search";
import Offer from "../components/PaintingAndCleaningComponent/Offer";
import Services from "../components/PaintingAndCleaningComponent/Services";
import FrequentAskedQuestion from "../components/FrequentAskedQuestion";
import Testimonial from "../components/Testimonial";
import { FaStar } from "react-icons/fa";
import VipMembership from "../components/PaintingAndCleaningComponent/VipMembership";
import SecondOffer from "../components/PaintingAndCleaningComponent/SecondOffer";
import InSpotlight from "../components/PaintingAndCleaningComponent/InSpotlight";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

const PaintingAndCleaning = () => {
  const faq = [
    {
      id: 1,
      que: "How to book a service on NoBroker?",
      ans: "Just click on the service required by you, see the prices and fill some basic contact details to schedule the service.",
    },
    {
      id: 2,
      que: "Who is going to fulfill the service?",
      ans: "We will assign a NoBroker Partner to complete your service at your preferred time slot.",
    },
    {
      id: 3,
      que: "Who is a NoBroker Partner?",
      ans: "NoBroker Partners are selected individuals / companies who meet our stringent criteria for delivering quality home services.",
    },
    {
      id: 4,
      que: "What all services are available on NoBroker?",
      ans: "We provide services like Home Painting, Home Cleaning, Electrician, Plumbing, Carpentry.",
    },
    {
      id: 5,
      que: "How are NoBroker services different from other online portals?",
      ans: "Other online portals merely put you in touch with the service providers leaving the service quality upto individual vendors. On the other hand, all NoBroker services are owned and fulfilled by NoBroker Partners who adhere to a strict quality criteria.",
    },
  ];

  const review = [
    {
      id: 1,
      user_image: "paintingAndCleaning/testimonial_daniel.webp",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NESTATE. It is simply a ..."`,
    },
    {
      id: 2,
      user_image: "paintingAndCleaning/testimonial_daniel.webp",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NESTATE. It is simply a ..."`,
    },
    {
      id: 3,
      user_image: "paintingAndCleaning/testimonial_daniel.webp",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NESTATE. It is simply a ..."`,
    },
    {
      id: 4,
      user_image: "paintingAndCleaning/testimonial_daniel.webp",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NESTATE. It is simply a ..."`,
    },
    {
      id: 5,
      user_image: "paintingAndCleaning/testimonial_daniel.webp",
      user_name: "Shubham Raibhandar",
      star: 5,
      heading: "Helps us to find good properties",
      description: `"The site really helps us to find good properties in the least amount of time without any headache of brokerage. I was so scared in Pune due to the issues of high deposit as well as brokerage. I was new and had no time. But then I found NESTATE. It is simply a ..."`,
    },
  ];

  const popularServices = [
    {
      id: 1,
      image: "paintingAndCleaning/packers-moversOptimized.png",
      title: "Packers & Movers",
      rating: "4.8",
      items: [
        {
          id: 1,
          title: "Within City",
          image: "home/distance.png",
        },
        { id: 2, title: "Between Cities", image: "home/distance.png" },
        {
          id: 3,
          title: "Vehicle Shifting",
          image: "home/truck-carrying-car.png",
        },
        { id: 4, title: "City Tempo", image: "home/truck.png" },
      ],
    },
    {
      id: 2,
      image: "paintingAndCleaning/home-paintingOptimized.png",
      title: "Home Painting",
      rating: "4.9",
      items: [
        {
          id: 1,
          title: "Painting",
          image: "home/paint-roller.png",
        },
        { id: 2, title: "One Wall Painting", image: "home/painting.png" },
      ],
    },
    {
      id: 3,
      image: "paintingAndCleaning/home-renovationOptimized.png",
      title: "Home Renovation",
      rating: "4.2",
    },
    {
      id: 4,
      image: "paintingAndCleaning/otherPanel.webp",
      title: "Wall Painting",
      rating: "4.8",
    },
  ];

  const offer = [
    {
      id: 1,
      image: "paintingAndCleaning/painting_hs.svg",
      title: "Festive Painting",
      offer: "Flat 25% off",
      items: [
        {
          id: 1,
          title: "Painting",
          image: "home/paint-roller.png",
        },
        { id: 2, title: "One Wall Painting", image: "home/painting.png" },
      ],
    },
    {
      id: 2,
      image: "paintingAndCleaning/cleaning_hs.svg",
      title: "Deep Cleaning",
      offer: "Upto 60% off",
      items: [
        {
          id: 1,
          title: "Full House Cleaning",
          image: "home/painting_&_cleaning.png",
        },
        { id: 2, title: "Kitchen Cleaning", image: "home/kitchen.png" },
        { id: 3, title: "Sofa Cleaning", image: "home/cleaning.png" },
        { id: 4, title: "Weekly Cleaning", image: "home/mop.png" },
        { id: 5, title: "Bathroom Cleaning", image: "home/toilet.png" },
      ],
    },
  ];
  const offerTwo = [
    {
      id: 1,
      image: "paintingAndCleaning/pnmWithinCity.png",
      title: "Between Cities",
      offer: "Get Free QUote",
      items: [
        {
          id: 1,
          title: "Within City",
          image: "home/distance.png",
        },
        { id: 2, title: "Between Cities", image: "home/distance.png" },
        {
          id: 3,
          title: "Vehicle Shifting",
          image: "home/truck-carrying-car.png",
        },
        { id: 4, title: "City Tempo", image: "home/truck.png" },
      ],
    },
    {
      id: 2,
      image: "paintingAndCleaning/pnm-betwwen-city.png",
      title: "Within City",
      offer: "Upto 30% off",
      items: [
        {
          id: 1,
          title: "Within City",
          image: "home/distance.png",
        },
        { id: 2, title: "Between Cities", image: "home/distance.png" },
        {
          id: 3,
          title: "Vehicle Shifting",
          image: "home/truck-carrying-car.png",
        },
        { id: 4, title: "City Tempo", image: "home/truck.png" },
      ],
    },
  ];

  const offerData = [
    {
      items: [
        {
          id: 1,
          title: "Painting",
          image: "home/paint-roller.png",
        },
        { id: 2, title: "One Wall Painting", image: "home/painting.png" },
      ],
    },
    {
      items: [
        {
          id: 1,
          title: "Full House Cleaning",
          image: "home/painting_&_cleaning.png",
        },
        { id: 2, title: "Kitchen Cleaning", image: "home/kitchen.png" },
        { id: 3, title: "Sofa Cleaning", image: "home/cleaning.png" },
        { id: 4, title: "Weekly Cleaning", image: "home/mop.png" },
        { id: 5, title: "Bathroom Cleaning", image: "home/toilet.png" },
      ],
    },
    {
      items: [
        {
          id: 1,
          title: "Within City",
          image: "home/distance.png",
        },
        { id: 2, title: "Between Cities", image: "home/distance.png" },
        {
          id: 3,
          title: "Vehicle Shifting",
          image: "home/truck-carrying-car.png",
        },
        { id: 4, title: "City Tempo", image: "home/truck.png" },
      ],
    },
  ];

  const [openModal, setOpenModal] = useState(false);
  console.log("🚀 ~ PaintingAndCleaning ~ openModal:", openModal);
  const [modalNumber, setModalNumber] = useState(null);

  const toggleModalOpenClose = (id) => {
    setModalNumber(modalNumber === id ? null : id);
    setOpenModal(!openModal);
  };

  const closeModal = () => {
    setModalNumber(null);
    setOpenModal(false);
  };

  return (
    <div className="bg-zinc-100">
      <div>
        <Search />
        <Offer offerData={offerData} />
        <div className="bg-[#004953] py-10 px-4 mb-1.5">
          <div className="md:px-[140px] max-w-[1280px] mx-auto">
            <SecondOffer offer={offer} titlePosition={"text-center"} />
            <div className="bg-white mt-3 flex items-center justify-evenly gap-4 px-2 py-4 rounded-lg">
              <img src="paintingAndCleaning/repair_hs.png" alt="" />
              <div>
                <div className="font-bold text-sm md:text-xl flex">
                  Home Repairs
                  <img
                    src="paintingAndCleaning/arrow-icon-right.svg"
                    alt=""
                    className="m-0"
                  />
                </div>
                <div className="opacity-50 text-sm">Starting @ रु99</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white md:px-[140px]">
          <Services title={"Home Cleaning Services"} />
        </div>

        {/* Popular Services */}
        <div className="px-6 pb-10 pt-5 bg-white mb-1.5">
          <div className="mb-3.5 text-2xl text-center font-semibold">
            Popular Services
          </div>
          <div className="lg:max-w-[1280px] lg:mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:px-16 lg:px-[140px]">
              {popularServices.map((item, i) => (
                <div
                  key={i}
                  className="bg-no-repeat h-40 w-full bg-cover rounded-md"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: "center",
                  }}
                  onClick={() => toggleModalOpenClose(item.id)}
                >
                  {item.title === "Home Renovation" ||
                  item.title === "Wall Painting" ? (
                    <Link
                      to={`/${item.title.toLowerCase().replaceAll(" ", "-")}`}
                    >
                      <div className="h-full rounded-md flex  bg-gradient-to-t from-black to-70% to-transparent">
                        <div className="flex w-full gap-4 p-2 items-end text-white ">
                          <div className="text-white font-semibold w-10/12 text-[15px]">
                            {item.title}
                          </div>
                          <div className="flex bg-black rounded-full px-1 items-center">
                            <div className="text-[10px]">{item.rating}</div>
                            <FaStar className="text-orange-400 text-[9px]" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className="h-full rounded-md flex  bg-gradient-to-t from-black to-70% to-transparent">
                      <div className="flex w-full gap-4 p-2 items-end text-white ">
                        <div className="text-white font-semibold w-10/12 text-[15px]">
                          {item.title}
                        </div>
                        <div className="flex bg-black rounded-full px-1 items-center">
                          <div className="text-[10px]">{item.rating}</div>
                          <FaStar className="text-orange-400 text-[9px]" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div>
                    {modalNumber === item.id ? (
                      <Modal onClose={() => closeModal()} isOpen={openModal}>
                        <div className="bg-white p-8 rounded-xl">
                          <div className="grid grid-cols-3">
                            {item?.items?.map((item, index) => (
                              <Link to={`/${item.title}`} key={index}>
                                <div className="grid flex-col items-center text-center md:gap-4 rounded-full md:p-2">
                                  <div className="bg-orange-200/70 text-[9px] font-medium px-1 rounded-full absolute">
                                    {item.offer}
                                  </div>
                                  <div className="rounded-full w-fit mx-auto bg-zinc-100 p-3 cursor-pointer">
                                    <img
                                      src={item.image}
                                      alt=""
                                      className="m-0 w-8"
                                    />
                                  </div>
                                  <div className="text-[11px] w-10/12 mx-auto">
                                    {item.title}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Modal>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white mb-1.5 px-6 py-5">
          <VipMembership title="VIP Membership" titlePosition="text-center" />
        </div>

        <InSpotlight />

        <Services title={"Home Repair Services"} />
        <div className="bg-[#004953] py-10 px-4 mb-1.5">
          <div className="md:px-[140px] max-w-[1280px] mx-auto">
            <SecondOffer
              offer={offerTwo}
              title={"Relocation Simplified"}
              titlePosition={"text-center"}
            />
            <div className="bg-white mt-3 flex items-center justify-evenly gap-4 px-2 py-4 rounded-lg">
              <img src="paintingAndCleaning/pnm-CityTempo.png" alt="" />
              <div>
                <div className="font-bold text-sm md:text-xl flex">
                  Home Repairs
                  <img
                    src="paintingAndCleaning/arrow-icon-right.svg"
                    alt=""
                    className="m-0"
                  />
                </div>
                <div className="opacity-50 text-sm">Starting @ रु99</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#004953] p-4 mb-1.5 md:px-[140px]">
          <div className="max-w-[1280px] mx-auto">
            <Testimonial
              review={review}
              title={"Customer Reviews"}
              scrollBy={400}
              titleColor="text-white"
            />
          </div>
        </div>
        <div className="bg-white md:px-[140px] px-4 py-12">
          <div className="max-w-[1280px] mx-auto">
            <div className={`font-medium md:text-3xl text-lg mb-4 text-center`}>
              Frequently Asked Questions
            </div>
            <FrequentAskedQuestion faq={faq} textColor={"text-teal-600"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingAndCleaning;
