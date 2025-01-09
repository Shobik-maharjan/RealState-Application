import React from "react";
import { GoDotFill } from "react-icons/go";

const VipMembership = ({ title, titlePosition }) => {
  const data = [
    {
      id: 1,
      top: "Extra",
      percentage: "15%",
      discount: "Discount",
      text: "On Nestate home services",
      points: { 1: "Fastest Closure", 2: "Personalised expert service" },
      image: "paintingAndCleaning/logo.png",
    },
    {
      id: 2,
      top: "Flat",
      percentage: "15%",
      discount: "Discount",
      text: "On Nestate plans",
      points: { 1: "Fastest Closure", 2: "Personalised expert service" },
      image: "paintingAndCleaning/logo.png",
    },
    {
      id: 3,
      top: "GET",
      percentage: "15%",
      discount: "Discount",
      text: "On all booking",
      points: {
        1: "NBCash = 1 Rupee",
        2: "Use to get extra discounts",
      },
      image: "paintingAndCleaning/logo.png",
    },
    {
      id: 4,
      top: "UPTO",
      percentage: "15%",
      discount: "Discount",
      text: "plus 2% extra for VIP on gift vouchers",
      points: "",
      image: "paintingAndCleaning/logo.png",
    },
  ];
  return (
    <>
      <div className={`${titlePosition} text-2xl font-medium mb-4`}>
        {title}
      </div>
      <div className="bg-black rounded-xl p-4 relative mx-auto px-5 xl:max-w-[1280px]">
        <div className="flex gap-4 w-[76%] flex-nowrap overflow-x-scroll no-scrollbar">
          {data?.map((item, i) => (
            <div
              className="flex flex-col gap-4 justify-between min-w-52 bg-white p-4 rounded-xl"
              key={i}
            >
              <div>
                <div>{item.top}</div>
                <div className="flex gap-2">
                  <div className="text-3xl font-bold">{item.percentage}</div>
                  <div className="text-2xl">{item.discount}</div>
                </div>
                <div>{item.text}</div>
              </div>
              <div className="flex items-end gap-2">
                <div className="flex flex-col gap-2">
                  {Object.values(item?.points).map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-2 items-start text-sm opacity-50"
                    >
                      <GoDotFill className="flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <img src={item.image} alt="" className="m-0 w-8 h-8" />
              </div>
            </div>
          ))}
        </div>

        <div className="min-w-60 h-full absolute right-0 top-0 bg-no-repeat bg-[url(/paintingAndCleaning/backgroundCar.png)] bg-black rounded-lg">
          <div
            className="bg-no-repeat p-4"
            style={{
              backgroundImage:
                "url(paintingAndCleaning/newVIPIconWithCircle.png)",
              backgroundPosition: "top left",
              backgroundSize: "40%",
            }}
          >
            <div className="flex flex-col gap-12">
              <div className="text-white mt-20">
                <div className="opacity-80">VIP MEMBERSHIP</div>
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-semibold">Rs.199</div>
                  <div className="opacity-40">
                    <strike> Rs.599 </strike>for 6 months
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center text-white">
                <button className="bg-gray/30 border px-4 py-2 border-white rounded-xl">
                  Buy
                </button>
                <div className="opacity-40 cursor-pointer">Know More</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VipMembership;
