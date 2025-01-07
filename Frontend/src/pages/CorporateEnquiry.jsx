import React, { useState } from 'react'
import "../style/CorporateEnquiry.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function CorporateEnquiry() {
    const trusted = [
        { image: "https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_76.webp" },
        { image: "https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_77.webp" },
        { image: "https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_78.webp" },
        { image: "https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_79.webp" },
        { image: "https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_80.webp" },
        { image: "https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_81.webp" },
        { image: "https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_82.webp" },
        { image: "https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_83.webp" },
        { image: "https://www.nobroker.in/blog/wp-content/uploads/2024/09/Rectangle-86.png" },
        { image: "https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_78.webp" },
        { image: "https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_79.webp" },
        { image: "https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_80.webp" },
        { image: "https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_81.webp" },
        { image: "https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_82.webp" },
        { image: "https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_83.webp" },
        { image: "https://www.nobroker.in/blog/wp-content/uploads/2024/09/Rectangle-86.png" },
      ];

    const employees=[
        {
            title:'House Search',
            immage:'https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_69.webp'
        },
        {
            title:'Rental Agreement',
            immage:'https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_69-1.webp'
        },
        {
            title:'Packers and Movers',
            immage:'https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_69-2.webp'
        },
        {
            title:'Home Painting',
            immage:'https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_69-3.webp'
        },
        {
            title:'Home Cleaning',
            immage:'https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_69-4.webp'
        },
        {
            title:'AC Servicing',
            immage:'https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_69-5.webp'
        },
    ]

    const office=[
        {
            title:'Office Interiors',
            immage:'https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_69-6.webp'
        },
        {
            title:'Office Renovation',
            immage:'https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_69-7.webp'
        },
        {
            title:'Commercial Painting',
            immage:'https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_69-8.webp'
        },
        {
            title:'Commercial Cleaning',
            immage:'https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_69-9.webp'
        },
        {
            title:'Visitor Management',
            immage:'https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_69-10.webp'
        },
        {
            title:'Repair & Maintenance',
            immage:'https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_69-11.webp'
        },
        {
            title:'Asset & Office Relocation',
            immage:'https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_69-12.webp'
        },
        {
            title:'Employee Relocation',
            immage:'https://www.nobroker.in/blog/wp-content/uploads/2024/09/rectangle_69-13.webp'
        },
    ]

    const howItWorks =[
        {
            image:'https://www.nobroker.in/blog/wp-content/uploads/2024/09/hello3.gif',
            number:'1',
            title:'Sign up with us',
            description:'Once you are onboarded, we’ll create exclusive, customized offers tailored for your company'
        },
        {
            image:'https://www.nobroker.in/blog/wp-content/uploads/2024/09/hell02.gif',
            number:'2',
            title:'Employees choose their service',
            description:'Your employees can easily book the service of their choice through our user-friendly website or app'
        },
        {
            image:'https://www.nobroker.in/blog/wp-content/uploads/2024/09/hello4.gif',
            number:'3',
            title:'Unlock offers',
            description:'By simply filling in their basic details, employees can unlock exclusive offers'
        },
    ]

    const cities = [
        { value: "Sunsari", label: "Sunsari" },
        { value: "Udayapur", label: "Udayapur" },
        { value: "Okhaldhunga", label: "Okhaldhunga" },
        { value: "Solukhumbu", label: "Solukhumbu" },
        { value: "Khotang", label: "Khotang" },
        { value: "Dolakha", label: "Dolakha" },
        { value: "Ramechhap", label: "Ramechhap" },
        { value: "Rukum", label: "Rukum" },
        { value: "Dolpa", label: "Dolpa" },
        { value: "Humla", label: "Humla" },
        { value: "Mugu", label: "Mugu" },
        { value: "Jajarkot", label: "Jajarkot" },
        { value: "Surkhet", label: "Surkhet" },
        { value: "Dang", label: "Dang" },
        { value: "Rolpa", label: "Rolpa" },
        { value: "Pyuthan", label: "Pyuthan" },
        { value: "Arghakhanchi", label: "Arghakhanchi" },
        { value: "Syangja", label: "Syangja" },
        { value: "Lamjung", label: "Lamjung" },
        { value: "Manang", label: "Manang" },
        { value: "Mustang", label: "Mustang" },
        { value: "Kaski", label: "Kaski" },
        { value: "Saptari", label: "Saptari" },
        { value: "Bhojpur", label: "Bhojpur" },
        { value: "Rupandehi", label: "Rupandehi" },
        { value: "Nawalparasi", label: "Nawalparasi" },
        { value: "Panchthar", label: "Panchthar" },
        { value: "Taplejung", label: "Taplejung" },
        { value: "Illam", label: "Illam" },
        { value: "Dhankuta", label: "Dhankuta" },
        { value: "Terhathum", label: "Terhathum" },
        { value: "Sindhuli", label: "Sindhuli" },
        { value: "Sankhuwasabha", label: "Sankhuwasabha" },
        { value: "Chadani", label: "Chadani" },
        { value: "Bardiya", label: "Bardiya" },
        { value: "Gorkha", label: "Gorkha" },
        { value: "Baitadi", label: "Baitadi" },
        { value: "Rasuwa", label: "Rasuwa" },
        { value: "Sindhupalchok", label: "Sindhupalchok" },
        { value: "Chandrapur", label: "Chandrapur" },
        { value: "Bishal Nagar", label: "Bishal Nagar" },
        { value: "Chhetrapati", label: "Chhetrapati" },
        { value: "Pokhara Metropolitan", label: "Pokhara Metropolitan" },
        { value: "Patan (Lalitpur)", label: "Patan (Lalitpur)" },
        { value: "Banepa", label: "Banepa" },
        { value: "Suryabinayak", label: "Suryabinayak" },
        { value: "Bhadrapur", label: "Bhadrapur" },
        { value: "Baglung", label: "Baglung" },
        { value: "Hetauda", label: "Hetauda" },
        { value: "Purnabas", label: "Purnabas" },
        { value: "Kalaiya", label: "Kalaiya" },
        { value: "Shree Harsha", label: "Shree Harsha" },
        { value: "Kavre", label: "Kavre" },
        { value: "Tandi", label: "Tandi" },
        { value: "Panchgani", label: "Panchgani" },
        { value: "Mahakali", label: "Mahakali" },
        { value: "Sati", label: "Sati" },
        { value: "Buddhaneelkantha", label: "Buddhaneelkantha" },
        { value: "Dharmasthali", label: "Dharmasthali" },
        { value: "Madi", label: "Madi" },
        { value: "Madhyapur Thimi", label: "Madhyapur Thimi" },
        { value: "Bansbari", label: "Bansbari" },
        { value: "Bharatpur", label: "Bharatpur" },
        { value: "Kathmandu Valley", label: "Kathmandu Valley" },
        { value: "Gaur", label: "Gaur" },
        { value: "Jaleshwor", label: "Jaleshwor" },
        { value: "Kirtipur", label: "Kirtipur" },
        { value: "Chuchchech", label: "Chuchchech" },
        { value: "Brahmapuri", label: "Brahmapuri" },
      ];
    const [activeButton, setActiveButton] = useState("first-btn-pos-1");
    return (
    <>
      <section className='top'>
        <div className="container position-relative">
            <div className="d-flex flex-col align-items-center">
                <h1 className='top-title'>Comprehensive Corporate Solutions</h1>
                <p className='top-des'>Partner with us to receive the best price on a wide range of professional services</p>
                <div className='d-flex gap-5 mt-4'>
                    <a href="#form-singup"><button className=" btn-top-1">Sign up for your company</button></a>
                    <button className=" btn-top-2" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Know more</button>
                </div>
            </div>
            <div className='top-second'>
                <h1 className='text-center'>TRUSTED BY</h1>
                <Swiper
                spaceBetween={10}
                slidesPerView={10}
                centeredSlides={false}
                loop={true}
                autoplay={{
                delay: 0,
                disableOnInteraction: false,
                }}
                speed={3000}
                modules={[Autoplay]}
                className="mySwiper"
                >
                {trusted.map((item, index) => (
                <SwiperSlide key={index}>
                  <img className='silde-image' src={item.image} alt="trusted" />
                </SwiperSlide>
              ))}
                </Swiper>
            </div>
        </div>
      </section>
      <section className='first'>
      <div class="container">
            <h1 class="text-center mb-4" style={{fontSize:'20px', fontFamily:'700'}}>Explore our solutions for your</h1>
            <div className="d-flex justify-content-center position-relative">
            <div
              className={`first-btn first-btn-pos-1 ${activeButton === "first-btn-pos-1" ? "active" : ""}`}
              onClick={() => setActiveButton("first-btn-pos-1")}
            >
              Employees
            </div>
            <div
              className={`first-btn first-btn-pos-2 ${activeButton === "first-btn-pos-2" ? "active" : ""}`}
              onClick={() => setActiveButton("first-btn-pos-2")}
            >
              Office Space
            </div>
          </div>
          {activeButton === "first-btn-pos-1" && (
            <div className="first-content">
              <div className='first-img position-relative'>
                <h1>Services we offer to your employees</h1>
              </div>
              <div className="first-body d-flex flex-col">
                <div className="row d-flex justify-content-center ps-5">
                    {employees.map((item, index)=>(
                        <div className='col-lg-3 employee-item p-3'>
                            <div className='employees-card'>
                                <img src={item.immage} alt={item.title} />
                                <p className='text-center mt-2'>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button type="button" class=" btn-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Get in touch
                </button>
              </div>
            </div>
            )}
            {activeButton === "first-btn-pos-2" && (
            <div className="second-content">
              <div className='second-img position-relative'>
                <h1>Services we offer to your employees</h1>
              </div>
              <div className="second-body d-flex flex-col">
                <div className="row d-flex justify-content-center ps-5">
                    {office.map((item, index)=>(
                        <div className='col-lg-3 employee-item p-3'>
                            <div className='employees-card'>
                                <img src={item.immage} alt={item.title} />
                                <p className='text-center mt-2'>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button type="button" class=" btn-modal" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Get in touch
                </button>
              </div>
            </div>
            )}
        </div>
      </section>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-body d-flex flex-col text-center">
                        <h1>Want to know more?</h1>
                        <p>FIll up this form and we will contact you soon</p>
                        <form >
                            <div className="mb-3">
                                <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Your name"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                type="text"
                                name="companyName"
                                className="form-control"
                                placeholder="Company name"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email ID"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                type="tel"
                                name="phone"
                                className="form-control"
                                placeholder="Phone number"
                                />
                            </div>
                            <div className="mb-3">
                                <select
                                name="city"
                                className="form-select"
                                >
                                <option value="" >
                                    City
                                </option>
                                {cities.map((a)=>(
                    <option value={a.value}>{a.label}</option>
                ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <input
                                type="number"
                                name="employees"
                                className="form-control"
                                placeholder="Number of employees"
                                />
                            </div>
                            <button type="submit" className="btn btn-success ">
                                Connect with us
                            </button>
                        </form>
                    </div>
                    </div>
                </div>
       </div>
      <section>
        <div className="container">
            <h1 className='text-center' style={{fontSize:'24px', fontFamily:'700',margin:'70px 0'}}>how it works</h1>
            <div className="row">
                {howItWorks.map((a)=>(
                    <div className='col-lg-4'>
                        <div className="box p-5">
                            <img className='worksimg' src={a.image} alt="" />
                            <div className="circle">{a.number}</div>
                            <h1>{a.title}</h1>
                            <p>{a.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
      <section className='my-14'>
        <div className="container">
            <h1 className='text-center' style={{fontSize:'20px', fontWeight:'600'}}>Use NoBroker Corporate to help employees with all things real estate</h1>
            <div className="row d-flex justify-content-between mt-5">
                <div className="col-lg-3 d-flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="109" viewBox="0 0 12 109" fill="none">
                            <path d="M6 11.3333C8.94551 11.3333 11.3333 8.94553 11.3333 6.00001C11.3333 3.05449 8.94551 0.666672 6 0.666672C3.05448 0.666672 0.666662 3.05449 0.666662 6.00001C0.666662 8.94553 3.05448 11.3333 6 11.3333ZM7 109L7 6.00001L5 6.00001L5 109L7 109Z" fill="#181C51"></path>
                    </svg>
                    <div>
                        <h1 style={{fontSize:'20px',fontWeight:'600',color:'rgb(68, 68, 68)'}}>Packers & Movers</h1>
                        <p style={{fontSize:'16px',fontWeight:'400',color:'rgb(136, 136, 136)'}}>For hassle-free relocation & on-time delivery</p>
                    </div>
                </div>
                <div className="col-lg-3 d-flex gap-3 mr-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="109" viewBox="0 0 12 109" fill="none">
                            <path d="M6 11.3333C8.94551 11.3333 11.3333 8.94553 11.3333 6.00001C11.3333 3.05449 8.94551 0.666672 6 0.666672C3.05448 0.666672 0.666662 3.05449 0.666662 6.00001C0.666662 8.94553 3.05448 11.3333 6 11.3333ZM7 109L7 6.00001L5 6.00001L5 109L7 109Z" fill="#181C51"></path>
                    </svg>
                    <div>
                        <h1 style={{fontSize:'20px',fontWeight:'600',color:'rgb(68, 68, 68)'}}>Home Services</h1>
                        <p style={{fontSize:'16px',fontWeight:'400',color:'rgb(136, 136, 136)'}}>For professional home cleaning, painting, AC service & more</p>
                    </div>
                </div>
            </div>
            <div className="row">
            <div class="road">
                <div class="lane"></div>
            </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-lg-3 d-flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="109" viewBox="0 0 12 109" fill="none">
                        <path d="M6 97.6667C3.05448 97.6667 0.666668 100.054 0.666668 103C0.666668 105.946 3.05448 108.333 6 108.333C8.94552 108.333 11.3333 105.946 11.3333 103C11.3333 100.054 8.94552 97.6667 6 97.6667ZM5 1.19249e-08L5 103L7 103L7 -1.19249e-08L5 1.19249e-08Z" fill="#181C51"></path>
                    </svg>
                    <div>
                        <h1 style={{fontSize:'20px',fontWeight:'600',color:'rgb(68, 68, 68)'}}>Packers & Movers</h1>
                        <p style={{fontSize:'16px',fontWeight:'400',color:'rgb(136, 136, 136)'}}>For hassle-free relocation & on-time delivery</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <div className="container">
        <hr />
      </div>
      <section className="my-5" id="form-singup">
      <div className="container">
        <div className="text-center mb-4">
          <h3 style={{fontSize:'20px',fontWeight:'800'}}>Loved what you saw?</h3>
          <p style={{fontSize:'14px',fontWeight:'400'}}>It’s time to get started!</p>
        </div>
        <form>
          <div className="row g-3 d-flex justify-content-center mb-10">
            <div className="col-lg-4">
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
                required
              />
            </div>
            <div className="col-lg-4">
              <input
                type="text"
                className="form-control"
                placeholder="Company name"
                required
              />
            </div>
          </div>
          <div className="row g-3 d-flex justify-content-center mb-10">
            <div className="col-lg-4">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone number"
                required
              />
            </div>
            <div className="col-lg-4">
              <input
                type="email"
                className="form-control"
                placeholder="Official email ID"
                required
              />
            </div>
            
          </div>
          <div className="row g-3 d-flex justify-content-center mb-10">
            <div className="col-lg-4">
              <select className="form-select" required>
                <option value="" disabled selected>
                  City
                </option>
                {cities.map((a)=>(
                    <option value={a.value}>{a.label}</option>
                ))}
              </select>
            </div>
            <div className="col-lg-4">
              <input
                type="number"
                className="form-control"
                placeholder="Number of employees"
                required
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn-success-cus ">
              Connect with us
            </button>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}

export default CorporateEnquiry