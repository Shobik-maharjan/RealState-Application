import React from "react";

const Services = ({ title }) => {
  const service = [
    {
      id: 1,
      image: "/paintingAndCleaning/BathroomCleaning.webp",
      title: "Bathroom Cleaning",
    },
    {
      id: 2,
      image: "/paintingAndCleaning/KitchenCleaning.webp",
      title: "Kitchen Cleaning",
    },
    {
      id: 3,
      image: "/paintingAndCleaning/PremiumHouseCleaning.webp",
      title: "Premium Cleaning",
    },
    {
      id: 4,
      image: "/paintingAndCleaning/SofaCleaning.webp",
      title: "Sofa Cleaning",
    },
    {
      id: 5,
      image: "/paintingAndCleaning/FullHouseCleaning.webp",
      title: "Full House Cleaning",
    },
  ];
  return (
    <div className="p-5 mb-1.5">
      <div className="font-semibold text-2xl text-center mb-4">{title}</div>
      <div className="flex items-center gap-4 px-2 overflow-x-scroll no-scrollbar xl:justify-center">
        {service.map((item) => (
          <div
            className="flex flex-col items-center gap-2 w-24 min-w-20 md:min-w-36"
            key={item.id}
          >
            <img
              src={item.image}
              alt=""
              className="m-0 border p-1 rounded-full border-[#fa3a57] md:w-20"
            />
            <div className="text-sm text-center">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
