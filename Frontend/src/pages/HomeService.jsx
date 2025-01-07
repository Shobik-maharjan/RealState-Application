import diwali_cleaning from "../assets/videos/Diwali_cleaning.mp4";
import cleaning from "../assets/illustration/cleaning_hs.svg";
import painting from "../assets/illustration/painting_hs.svg";
import repair from "../assets/illustration/repair_hs.png";
import betweenCity from "../assets/illustration/pnm-betwwen-city.png";
import withinCity from "../assets/illustration/pnmWithinCity.png";
import tempo from "../assets/illustration/pnm-CityTempo.png";
import {
  homeCleaningServices,
  homeRepair,
  servicesReviews,
} from "../components/fakeDatas";
import "../style/homeserv.css";
const HomeService = () => {
  const services = [
    { icon: "", title: "home cleaning", link: "", offer: "Upto 60% off*" },
    { icon: "", title: "packers & movers", link: "", offer: "lowest quote*" },
    { icon: "", title: "city tempo", link: "", offer: "Starts @ रु210" },
    { icon: "", title: "painting", link: "", offer: "flat 25% off" },
    { icon: "", title: "plumbing", link: "", offer: "" },
    { icon: "", title: "electrician", link: "", offer: "" },
    { icon: "", title: "carpentry", link: "", offer: "" },
    { icon: "", title: "weekly cleaning", link: "", offer: "रु 180/service" },
    { icon: "", title: "bathroom cleaning", link: "", offer: "Starts @ रु359" },
    { icon: "", title: "home interiors", link: "", offer: "" },
    { icon: "", title: "home renivation", link: "", offer: "" },
    { icon: "", title: "one wall painting", link: "", offer: "Flat 25% Off" },
    {
      icon: "",
      title: "ac service & repair",
      link: "",
      offer: "upto 30% off*",
    },
    { icon: "", title: "legal services", link: "", offer: "Flat 30% Off" },
    { icon: "", title: "sofa cleaning", link: "", offer: "upto 30% off*" },
    { icon: "", title: "vehicle shifting", link: "", offer: "" },
  ];
  const faqs = [
    {
      question: "How to book a service on NESTATE?",
      answer:
        "Just click on the service required by you, see the prices and fill some basic contact details to schedule the service.",
    },
    {
      question: "How to book a service on NESTATE?",
      answer:
        "Just click on the service required by you, see the prices and fill some basic contact details to schedule the service.",
    },
    {
      question: "How to book a service on NESTATE?",
      answer:
        "Just click on the service required by you, see the prices and fill some basic contact details to schedule the service.",
    },
    {
      question: "How to book a service on NESTATE?",
      answer:
        "Just click on the service required by you, see the prices and fill some basic contact details to schedule the service.",
    },
  ];

  return (
    <div className="w-full h-auto flex relative flex-col">
      <section className="bg-zinc-900 w-full sticky top-16 text-center py-2 h-10 z-30">
        <a
          className="text-yellow-500 no-underline text-sm font-semibold"
          href=""
        >
          Get upto 15% discount with VIP{" >"}
        </a>
      </section>

      <section className="bg-slate-300 w-full flex flex-col items-center md:py-10 py-4 gap-5">
        <div className="bg-white md:w-6/12 w-11/12 flex p-3 rounded-3xl gap-3">
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <input
            type="search"
            className="w-full outline-none"
            placeholder="Search"
          />
          <button>
            <i className="fa-solid fa-microphone"></i>
          </button>
        </div>
        <div className="md:w-9/12 w-11/12 flex gap-5 md:flex-row flex-col">
          <div className="flex flex-wrap items-center justify-center w-full gap-4">
            {services.map((serv, index) => {
              const { icon, title, link, offer } = serv;
              return (
                <div
                  key={index}
                  className="flex items-center justify-center flex-col gap-3 h-24 w-24"
                >
                  <div className="w-12 h-12 bg-white rounded-full relative flex items-center justify-center">
                    <span className="absolute text-xs -top-3 bg-yellow-200 w-24 px-2 rounded-full">
                      {offer}
                    </span>
                    <img
                      src={icon}
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h4 className="text-xs capitalize text-center">{title}</h4>
                </div>
              );
            })}
          </div>
          <div
            id="video"
            className="w-full flex items-center justify-center relative"
          >
            <div className="h-full w-full relative bg-red-500">
              <video
                autoPlay
                loop
                playsInline
                src={diwali_cleaning}
                muted
                controls
                className="w-full h-full object-cover"
              ></video>
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 flex items-center justify-between px-2.5 py-2">
                <h1 className="text-white text-base mb-0">hello</h1>
                <button className="bg-green px-3 capitalize font-semibold text-white rounded-md text-xs py-2">
                  book
                </button>
              </div>
            </div>

            <button className="absolute bg-black bg-opacity-50 py-2 px-3 left-0">
              <i className="fa-solid fa-angle-left text-white"></i>
            </button>
            <button className="absolute bg-black bg-opacity-50 py-2 px-3 right-0">
              <i className="fa-solid fa-angle-right text-white"></i>
            </button>
          </div>
        </div>
      </section>
      {/* offers  */}
      <section className="bg-white w-full flex items-center justify-center gap-4 flex-col py-8">
        <h1 className="text-dark_blue text-3xl font-semibold">
          Offers for you
        </h1>
        <div className="flex gap-6 md:flex-row flex-col">
          <div className="bg-black w-72 rounded-xl">
            <article className="flex flex-col gap-2 items-start p-3">
              <h4 className="text-base mb-0 text-gray">VIP MEMBERSHIP</h4>
              <h2 className="text-xl font-semibold mb-0 text-yellow-200">
                Get upto 15% discount on home services
              </h2>
              <button className="bg-gray text-white py-1 px-2 text-sm rounded-3xl">
                know more
              </button>
            </article>
          </div>
          <div className="bg-teal-300 w-72 rounded-xl">
            <article className="flex flex-col gap-2 items-start p-3">
              <h4 className="text-xs mb-0 text-lime-900">FESTIVE SALE</h4>
              <h2 className="text-xl font-semibold mb-0 text-lime-900">
                Flat 25% off on Home Painting
              </h2>
              <button className="bg-white text-lime-900 py-1 px-2 text-sm rounded-3xl">
                know more
              </button>
            </article>
          </div>
          <div className="bg-sky-200 w-72 rounded-xl">
            <article className="flex flex-col gap-2 items-start p-3">
              <h4 className="text-base mb-0 text-cyan-700">VIP MEMBERSHIP</h4>
              <h2 className="text-xl font-semibold mb-0 text-cyan-700">
                Flat 25% off on Home Painting
              </h2>
              <button className="bg-white text-cyan-700 py-1 px-2 text-sm rounded-3xl">
                know more
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-300 w-full flex flex-col items-center md:py-16 py-4 gap-5">
        <div className="flex gap-4 md:w-8/12 w-11/12 flex-col">
          <div className="w-full flex gap-3 md:flex-row flex-col">
            <div className="bg-white w-full flex items-center gap-20 h-36 rounded-lg overflow-hidden">
              <div className="h-full w-4/12 flex items-center justify-center bg-slate-100">
                <img src={painting} alt="painting" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl capitalize font-bold text-zinc-700">
                  festive painting
                </h1>
                <h3 className="text-sm">Flat 25% off</h3>
              </div>
            </div>
            <div className="bg-white w-full flex items-center gap-20 h-36 rounded-lg overflow-hidden">
              <div className="h-full w-4/12 flex items-center justify-center bg-slate-100">
                <img src={cleaning} alt="cleaning" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl capitalize font-bold text-zinc-700">
                  deep cleaning
                </h1>
                <h3 className="text-sm">Upto 60% off</h3>
              </div>
            </div>
          </div>
          <div className="bg-white w-full flex items-center gap-20 h-36 rounded-lg overflow-hidden">
            <div className="h-full w-4/12 flex items-center justify-center bg-slate-100">
              <img src={repair} alt="repair" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl capitalize font-bold text-zinc-700">
                home repairs
              </h1>
              <h3 className="text-sm">Starting @ रु99</h3>
            </div>
          </div>
        </div>
      </section>
      {/* home cleaning services  */}
      <section className="bg-white w-full flex items-center justify-center gap-4 flex-col py-8">
        <h1 className="text-3xl font-semibold">Home Cleaning Services</h1>
        <div className="flex gap-4 flex-wrap">
          {homeCleaningServices.map((item, index) => {
            const { img, title, link } = item;
            return (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="h-20 w-20 p-0.5 rounded-full border-2 border-red-400 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm capitalize">{title}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Relocation simplified */}
      <section className="bg-slate-300 w-full flex flex-col items-center md:py-16 py-4 gap-5">
        <h1 className="text-3xl font-semibold">Relocation simplified</h1>
        <div className="flex gap-4 md:w-8/12 w-11/12 flex-col">
          <div className="w-full flex gap-3 md:flex-row flex-col">
            <div className="bg-white w-full flex items-center gap-20 h-36 rounded-lg overflow-hidden">
              <div className="h-full w-4/12 flex items-center justify-center bg-slate-100">
                <img src={betweenCity} alt="illustration" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl capitalize font-bold text-zinc-700">
                  Between cities
                </h1>
                <h3 className="text-sm">Get free quote</h3>
              </div>
            </div>
            <div className="bg-white w-full flex items-center gap-20 h-36 rounded-lg overflow-hidden">
              <div className="h-full w-4/12 flex items-center justify-center bg-slate-100">
                <img src={withinCity} alt="illustration" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl capitalize font-bold text-zinc-700">
                  within the city
                </h1>
                <h3 className="text-sm">Upto 30% off</h3>
              </div>
            </div>
          </div>
          <div className="bg-white w-full flex items-center gap-20 h-36 rounded-lg overflow-hidden">
            <div className="h-full w-4/12 flex items-center justify-center bg-slate-100">
              <img src={tempo} alt="illustration" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl capitalize font-bold text-zinc-700">
                tempo services
              </h1>
              <h3 className="text-sm">
                Move Anything, Anywhere within City @ रु449
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* home repair  */}
      <section className="bg-white w-full flex items-center justify-center gap-4 flex-col py-8">
        <h1 className="text-3xl font-semibold">Home Repair Services</h1>
        <div className="flex gap-4 flex-wrap">
          {homeRepair.map((item, index) => {
            const { img, title, link } = item;
            return (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="h-20 w-20 p-0.5 rounded-full border-2 border-red-400 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm capitalize">{title}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* customer reviews  */}

      <section className="bg-slate-300 w-full flex flex-col items-center md:py-16 py-4 gap-5">
        <h1 className="text-3xl font-semibold">Customer reviews</h1>
        <div className="w-10/12 flex gap-3 lg:flex-row flex-col">
          {servicesReviews.map((item, index) => {
            const { name, service, img, comment, rating } = item;
            return (
              <article className="w-full bg-slate-50 rounded-lg p-3">
                <header className="flex gap-6">
                  <div className="h-10 w-10 rounded-full relative flex items-center">
                    <img
                      src={img}
                      alt={name}
                      className="h-full w-full rounded-full"
                    />
                    <span className="bg-black text-white text-xs p-0.5 rounded-2xl absolute -bottom-3 left-0">
                      {rating}⭐
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-0 text-base font-semibold capitalize">
                      {name}
                    </h3>
                    <span className="text-sm font-light">{service}</span>
                  </div>
                </header>
                <main className="mt-4">
                  <p className="text-base font-light">{comment}</p>
                </main>
              </article>
            );
          })}
        </div>
      </section>

      {/* Frequently asked questions  */}

      <section className="w-full flex flex-col items-center md:py-16 py-4 gap-5 my-10">
        <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
        <div className="w-8/12">
          {faqs.map((item, index) => {
            const { question, answer } = item;
            return (
              <details
                key={index}
                className="group w-full p-2.5 [&_summary::-webkit-details-marker]:hidden border-b-2 border-slate-200"
                close
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5">
                  <h2 className="text-base font-medium text-gray-900 group-open:text-green">
                    {question}
                  </h2>

                  <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-2 leading-relaxed text-gray">{answer}</p>
              </details>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HomeService;
