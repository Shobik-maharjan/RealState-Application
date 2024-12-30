import React, { useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Blog.css";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BlogList from '../components/BlogList';

function Blog() {
    const buttons=[
        { text:'Real Estate'},
        { text:'Home Services'},
        { text:'Finance'},
        { text:'Interior'},
        { text:'Legale'},
        { text:'Packers & Movers'},
        { text:'NRI'},
        { text:'Payment'},
        { text:'News'},
    ]

    const slider1 = [
        {
            id: '1',
            title: 'Bill payment',
            description: 'MSEB Bill Payment: Easy and Quick Online and Offline Payment Methods, and View Bill in 2025',
            image: 'https://www.nobroker.in/blog/wp-content/uploads/2024/04/mseb-bill-payment.jpg',
            date: 'December 6, 2024',
            author: 'Suju',
            link: 'https://www.nobroker.in/blog/mseb-bill-payment/',
            tag: 'https://www.nobroker.in/blog/bill-payment/'
        },
        {
            id: '2',
            title: 'Property Buyers Guide',
            description: 'Construction Cost in Bangalore: Detailed Guide to Per Sq. Ft. Rates (2025)',
            image: 'https://www.nobroker.in/blog/wp-content/uploads/2022/04/Exact-Construction-Cost.jpg',
            date: 'December 6, 2024',
            author: 'Vivek Mishra',
            link: 'https://www.nobroker.in/blog/exact-construction-cost-in-bangalore/',
            tag: 'https://www.nobroker.in/blog/buyers-guide/'
        },
        {
            id: '3',
            title: 'Tenant',
            description: 'Top 18 Asia\'s Biggest Malls in India 2024: Location, Timing, Opening Days and Contact Details',
            image: 'https://www.nobroker.in/blog/wp-content/uploads/2024/09/list-of-top-biggest-malls-in-india.jpg',
            date: 'December 6, 2024',
            author: 'Vivek Mishra',
            link: 'https://www.nobroker.in/blog/biggest-malls-in-india/',
            tag: 'https://www.nobroker.in/blog/rental-guide/tenant/'
        },
        {
            id: '4',
            title: 'Vastu Tips',
            description: 'Snake Plant Vastu: Direction, Benefits and Harness Positive Energy for Your Home in 2024',
            image: 'https://www.nobroker.in/blog/wp-content/uploads/2023/11/Snake-Plant-Vastu.jpg',
            date: 'December 6, 2024',
            author: 'Prakhar Sushant',
            link: 'https://www.nobroker.in/blog/snake-plant-vastu/',
            tag: 'https://www.nobroker.in/blog/interior-design-tips/vastu-tips/'
        },
        {
            id: '5',
            title: 'Interiors Design',
            description: 'Luxury Bedroom Interior Design: Transform Your Space with Elegance in 2024',
            image: 'https://www.nobroker.in/blog/wp-content/uploads/2023/04/luxury-bedroom-interior-design.webp',
            date: 'December 6, 2024',
            author: 'Simon Ghosh',
            link: 'https://www.nobroker.in/blog/luxury-bedroom-interior-design/',
            tag: 'https://www.nobroker.in/blog/interior-design-tips/'
        }
    ];

    const slider2=[
        {
            id:'1',
            titile:'Interiors Design',
            articles_no:'628+',
            image:'https://www.nobroker.in/blog/wp-content/uploads/2024/07/eb8f74a64c214ff101c5c49fad6f47ad.jpeg',
        },
        {
            id:'2',
            titile:'Real Estate Lega; Guide',
            articles_no:'313+',
            image:'https://www.nobroker.in/blog/wp-content/uploads/2024/07/2023c86061f60ed73713ce2d6d569e87.jpeg',
        },
        {
            id:'3',
            titile:'Home Lone',
            articles_no:'232+',
            image:'https://www.nobroker.in/blog/wp-content/uploads/2024/07/764aa6b07e2d59de773e3b9caf50fd09.jpeg',
        },
        {
            id:'4',
            titile:'Property Buyers Guide',
            articles_no:'204+',
            image:'https://www.nobroker.in/blog/wp-content/uploads/2024/07/2e29b83d58c0b99f55e825327e10dd8f.jpeg',
        },
        {
            id:'5',
            titile:'Real Estate News',
            articles_no:'147+',
            image:'https://www.nobroker.in/blog/wp-content/uploads/2024/07/2be5f08c40ef2e2306af6521d71d3b9c.jpeg',
        },
        {
            id:'6',
            titile:'Hindi',
            articles_no:'137+',
            image:'https://www.nobroker.in/blog/wp-content/uploads/2024/07/de09ba782ca1dfe74759f065381a176a.jpeg',
        },
        {
            id:'7',
            titile:'Marathi',
            articles_no:'127+',
            image:'https://www.nobroker.in/blog/wp-content/uploads/2024/07/de09ba782ca1dfe74759f065381a176a.jpeg',
        },
        {
            id:'8',
            titile:'Packers And Movers',
            articles_no:'113+',
            image:'https://www.nobroker.in/blog/wp-content/uploads/2024/07/de09ba782ca1dfe74759f065381a176a.jpeg',
        },
        {
            id:'9',
            titile:'Bill Patment',
            articles_no:'63+',
            image:'https://www.nobroker.in/blog/wp-content/uploads/2024/07/7118b7e89671381fb109e2a67e24e30c.png',
        },
        {
            id:'10',
            titile:'NRI Real State Guide',
            articles_no:'58+',
            image:'https://www.nobroker.in/blog/wp-content/uploads/2024/07/7d3f166fd4dd984b00880a48ce7c50a3.jpeg',
        }
    ]

    const mumbaiBlogs = [
      {
          title: "Best Vehicle Shifting Services in Mumbai",
          description: "Vehicle shifting in Mumbai is a major task. Citing the high traffic and crowded roads the risk of damage becomes very high. It is therefore suggested to seek expert help while doing this.",
          date: "January 11, 2023",
          author: "Simon Ghosh",
          link: "https://www.nobroker.in/blog/vehicle-shifting-in-mumbai/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2023/01/Vehicle-Shifting-in-Mumbai-.jpg"
      },
      {
          title: "Top 10 Tallest Buildings in Mumbai",
          description: "Almost touching the skyline, there are multiple skyscrapers in the glamorous city of Mumbai. Tall buildings determine how urbanised a city is. Mumbai has about 4000 high-rise buildings.",
          date: "August 25, 2023",
          author: "NoBroker.com",
          link: "https://www.nobroker.in/blog/tallest-buildings-in-mumbai/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2020/05/blog_mumbai.png"
      },
      {
          title: "Top 12 Posh Areas in Mumbai: Property Prices, Connectivity, Nearby Areas in 2024",
          description: "Posh Areas in Mumbai embody the pinnacle of luxury, exclusivity, and the highest living standards in India's financial and entertainment capital. Home to Bollywood celebrities, business tycoons.",
          date: "September 3, 2024",
          author: "Vivek Mishra",
          link: "https://www.nobroker.in/blog/posh-areas-in-mumbai/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2024/02/top-posh-areas-in-mumbai-1.jpg"
      },
      {
          title: "Cost of Living in Mumbai in 2024!",
          description: "The cost of living in Mumbai beckons as a primary concern for many envisioning life in India's bustling city of dreams. Mumbai, beyond its fame for Bollywood, cricket, and street food, stands out.",
          date: "February 22, 2024",
          author: "Vivek Mishra",
          link: "https://www.nobroker.in/blog/cost-of-living-in-mumbai/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2021/03/Cost-Of-iving-in-Mumbai.jpg"
      },
      {
          title: "FSI in Mumbai 2024: Calculate FSI in Mumbai Municipal Corporation",
          description: "Floor Space Index or FSI in Mumbai refers to the ratio between the complete built-up area of a plot and the available plot area. The guidelines for FSI for residential building in Mumbai.",
          date: "February 21, 2022",
          author: "Vivek Mishra",
          link: "https://www.nobroker.in/blog/fsi-in-mumbai/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2022/02/FSI-in-Mumbai.jpg"
      }
  ];
  
  const puneBlogs = [
      {
          title: "Stamp Duty and Registration Charges in Pune: Rate Calculator and Key Factors in 2024",
          description: "Stamp duty and registration charges in Pune are essential aspects of property transactions. In 2024, stamp duty rates typically range from 5% to 7% of the property value.",
          date: "September 11, 2024",
          author: "Kruthi",
          link: "https://www.nobroker.in/blog/stamp-duty-and-registration-charges-in-pune/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2021/12/Stamp-duty-and-registration-charges-in-pune-1.jpg"
      },
      {
          title: "FSI In Pune 2024: Calculate FSI In Pune Municipal Corporation",
          description: "FSI is a very common real estate term used very often to describe a property. FSI in Pune city refers to the ratio between the complete built-up area of a plot and the available plot area.",
          date: "February 2, 2022",
          author: "Prakhar Sushant",
          link: "https://www.nobroker.in/blog/fsi-in-pune/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2022/02/FSI-in-Pune.jpg"
      },
      {
          title: "An Insight on the Cost of Living in Pune",
          description: "The average cost of living in Pune totally depends on the way you live and the type of life that you are used to leading. Though we have put together some of the main categories.",
          date: "December 31, 2021",
          author: "Vivek Mishra",
          link: "https://www.nobroker.in/blog/cost-of-living-in-pune/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2021/03/cost-of-living-in-pune.jpg"
      },
      {
          title: "Posh Areas in Pune to Help You Live Life Luxuriously",
          description: "Over time, the cultural capital of Maharashtra, Pune is gaining more importance in terms of property values. There has also been an increase in the number of posh areas in Pune.",
          date: "May 1, 2024",
          author: "Pooja",
          link: "https://www.nobroker.in/blog/posh-areas-in-pune/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2021/06/Posh-Areas-in-Pune-1.jpg"
      },
      {
          title: "Puneeth Rajkumar House: The Next Big Thing in Bangalore",
          description: "Late actor Puneeth Rajkumar House is the most talked-about topic in Karnataka because of its exclusively trendy look and contemporary construction.",
          date: "November 29, 2021",
          author: "Pooja",
          link: "https://www.nobroker.in/blog/puneeth-rajkumar-house/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2021/11/Puneeth-Rajkumar-House-1.jpg"
      }
  ];
  
  const hyderabadBlogs = [
      {
          title: "Celebrity Homes in Hyderabad: A Peek Into The Actors and Actresses Luxurious Residences in 2024",
          description: "Have you always wanted to know where the celebrities in Hyderabad live? This article will shed some light on the celebrity homes in Hyderabad and what makes the neighbourhood so special.",
          date: "December 20, 2023",
          author: "Simon Ghosh",
          link: "https://www.nobroker.in/blog/celebrity-homes-in-hyderabad/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2023/12/top-celebrity-homes-in-jubilee-hills-hyderabad-1.jpg"
      },
      {
          title: "Cost of Living in Hyderabad: Breakdown of the Average Monthly Cost",
          description: "Considering a move to Hyderabad? You've come to the right place! Hyderabad offers a unique blend of rich history, modern development, and a delicious food scene.",
          date: "April 27, 2024",
          author: "Susan",
          link: "https://www.nobroker.in/blog/cost-of-living-in-hyderabad/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2021/12/cost-of-living-in-hyderabad.jpg"
      },
      {
          title: "Latest Trends and Property Rates in Hyderabad",
          description: "Hyderabad is not only the capital of Andhra Pradesh but also the largest city of the Indian state of Telangana. Situated on the Deccan Plateau the city expands to almost 650 square kilometers.",
          date: "February 17, 2022",
          author: "Pooja",
          link: "https://www.nobroker.in/blog/property-rates-in-hyderabad/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2022/02/Property-rates-in-Hyderabad-1.jpg"
      },
      {
          title: "Posh Areas in Hyderabad: Discovering Hyderabad’s Most Expensive Areas",
          description: "Hyderabad is a city that has everything – Telugu Cinema, A+ high-tech culture, tasty biryani, ancient history, and the beautiful Charminar.",
          date: "September 30, 2021",
          author: "Jessica Solomon",
          link: "https://www.nobroker.in/blog/posh-areas-in-hyderabad/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2021/09/posh-areas-in-Hyderabad.jpg"
      },
      {
          title: "Stamp Duty and Property Registration Charges in Hyderabad",
          description: "Are you planning to buy a home in Hyderabad? The land of authentic dum biryani, it’s a great time to consider buying a house in the city.",
          date: "December 24, 2021",
          author: "Jessica Solomon",
          link: "https://www.nobroker.in/blog /stamp-duty-and-registration-charges-in-hyderabad/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2021/12/Stamp-Duty-in-Hyderabad.jpg"
      }
  ];
  
  const bangaloreBlogs = [
      {
          title: "Best Car & Bike Shifting Services in Bangalore",
          description: "Vehicle shifting in Bangalore is a major task. Citing the high traffic and crowded roads the risk of damage becomes very high. It is therefore suggested to seek expert help while doing this.",
          date: "January 11, 2023",
          author: "Simon Ghosh",
          link: "https://www.nobroker.in/blog/vehicle-shifting-in-bangalore/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2023/01/Vehicle-Shifting-in-Bangalore-.jpg"
      },
      {
          title: "Stamp Duty and Registration Charges in Bangalore in 2024",
          description: "With its urban lifestyle, work-life balance, excellent infrastructure, and pleasant weather, Bangalore is a top choice for Indians and NRIs.",
          date: "September 11, 2024",
          author: "Vivek Mishra",
          link: "https://www.nobroker.in/blog/stamp-duty-and-registration-charges-in-bangalore/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2021/12/Stamp-duty-in-Bangalore.jpg"
      },
      {
          title: "Car Parking Charges in Bangalore Airport: Details and Important Information",
          description: "Bangalore Airport is a busy entry point to Bangalore, a city well-known for its thriving IT sector and rich cultural legacy.",
          date: "September 9, 2024",
          author: "Priyanka Saha",
          link: "https://www.nobroker.in/blog/car-parking-charges-in-bangalore-airport/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2024/03/car-parking-charges-in-bangalore-airport.jpg"
      },
      {
          title: "Stamp Duty in Karnataka: A Detailed Guide",
          description: "When you buy a property, the government requires you to pay taxes on several factors. One such important tax is the stamp duty charges paid against a property.",
          date: "July 26, 2023",
          author: "Prakhar Sushant",
          link: "https://www.nobroker.in/blog/stamp-duty-in-karnataka/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2021/09/stamp-duty-in-Karnataka-1.jpg"
      },
      {
          title: "A Detailed Look into the Karnataka EC Online Bangalore",
          description: "Imagine buying a property only to find out it is under the mortgage or has unpaid dues. To avoid these kinds of situations, it is crucial to check the EC.",
          date: "October 25, 2021",
          author: "Kruthi",
          link: "https://www.nobroker.in/blog/ec-online-bangalore/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2021/10/Karnataka-EC-Certificate.jpg"
      }
  ];
  
  const chennaiBlogs = [
      {
          title: "FSI in Chennai: A Comprehensive Guide to Regulations and Calculations",
          description: "Responsible usage of space can help maintain sustainable growth in a heavily populated metro city like Chennai. The Tamil Nadu government is constantly modifying the regulations.",
          date: "February 18, 2022",
          author: "Vivek Mishra",
          link: "https://www.nobroker.in/blog/fsi-in-chennai/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2022/02/FSI-in-Chennai.jpg"
      },
      {
          title: "Find Out More About the Top Construction Companies in Chennai",
          description: "The capital of Tamil Nadu is Chennai, formerly called Madras. It is India's fourth-largest metropolitan area.",
          date: "September 1, 2022",
          author: "Anda Warner",
          link: "https://www.nobroker.in/blog/construction-companies-in-chennai/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2022/07/construction-companies.jpg"
      },
      {
          title: "The Top Posh Areas in Chennai - Landmarks, Real Estate Prices and More",
          description: "Chennai is not limited by its rich and glorious past, its fanfare to Rajnikanth, the unique mantle of culture, or its filter-coffee-soaked aroma.",
          date: "January 30, 2024",
          author: "Simon Ghosh",
          link : "https://www.nobroker.in/blog/posh-areas-in-chennai/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2021/10/Posh-Areas-In-Chennai.jpg"
      },
      {
          title: "List of Top 10 Best Builders in Chennai 2024",
          description: "Explore Chennai's top 10 builders and developers who are reshaping the city's real estate landscape. Discover exquisite homes, sustainable designs, and futuristic living concepts.",
          date: "August 21, 2023",
          author: "Siri Hegde K",
          link: "https://www.nobroker.in/blog/top-builders-in-chennai/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2023/08/Best-Builders-in-Chennai.jpg"
      },
      {
          title: "Guideline Value in Chennai: Meaning, Importance and Steps to Check",
          description: "Property guideline value in Chennai is a must if you are looking to purchase a house or land in Chennai. The guideline value can be easily accessed via the online portal.",
          date: "August 25, 2023",
          author: "Vivek Mishra",
          link: "https://www.nobroker.in/blog/guideline-value-in-chennai/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2021/03/Guideline-Value-in-Chennai.jpg"
      }
  ];
  
  const delhiBlogs = [
      {
          title: "Top 20 Posh Areas in Delhi: Most Expensive & Best Residential Areas in Delhi",
          description: "South Delhi stands out for its upscale neighbourhoods, such as Lutyen's Bungalow Zone and Vasant Kunj, attracting affluent individuals and public figures with its promise of superior living.",
          date: "September 6, 2024",
          author: "Prakhar Sushant",
          link: "https://www.nobroker.in/blog/posh-areas-in-delhi/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2024/02/posh-areas-in-delhi-1.jpg"
      },
      {
          title: "Delhi Police Tenant Verification: Everything You Need to Know",
          description: "We have been taught to always see the good in others, but with caution. That’s because every single person we meet in our short lives follows his or her unique set of rules or principles.",
          date: "March 25, 2024",
          author: "Kruthi",
          link: "https://www.nobroker.in/blog/delhi-police-tenant-verification/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2022/01/Delhi-Police-Tenant-Verification-1.jpg"
      },
      {
          title: "Stamp Duty and Property Registration Charges in Delhi",
          description: "Are you a potential property buyer in Delhi? Understanding Stamp Duty is crucial for a seamless real estate transaction. In this blog, we demystify the complexities.",
          date: "September 22, 2021",
          author: "Prakhar Sushant",
          link: "https://www.nobroker.in/blog/stamp-duty-and-property-registration-charges-in-delhi/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2021/09/Stamp-Duty-in-Delhi-1.jpg"
      },
      {
          title: "Circle Rate in Delhi: Meaning, Latest Updates and Calculation 2024",
          description: "Price speculations of various properties have forced the state government to come out with a ready reckoner to inform the public at large of the various circle rates in the city.",
          date: "August 28, 2023",
          author: "Kruthi",
          link: "https://www.nobroker.in/blog/circle-rate-in-delhi/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2021/03/circle-rate-in-Delhi.jpg"
      },
      {
          title: "2024 Real Estate Trends and Property Rates in Delhi",
          description: "Delhi, or NCT of Delhi, is an Indian city and union territory that includes New Delhi, the country's capital. The NCT is 1,484 square kilometres in size.",
          date: "February 28, 2022",
          author: "Pooja",
          link: "https://www.nobroker.in/blog/property-rates-in-delhi/",
          image: "https://www.nobroker.in/blog/wp-content/uploads/2022/02/Property-rates-in-Delhi-1.jpg"
      }
  ];

    const realbtn=['Property Buyers Guide','Property Sellers Guide','Property Rental Guide']
    const realbtn1=['Painting','Cleaning','AC Services','Electrician Services','Home & Garden','Pest Control']
    const realbtn2=['Renovation','Vastu Tips','Celebrity Homes']
    const realbtn3=['Home Loan','Cash Loan']
    const realbtn4=['Kathmandu', 'Bhaktapur', 'Lalitpur', 'Pokhara', 'Chitwan', 'Gorkha']
    const realbtn5=['Home & Garden','Commercial Loan','NoBroker News','Property Sellers Guide','Property Buyers Guide','Property Rental Guide','Celebrity Homes']


    const [selectedCategory, setSelectedCategory] = useState('Property Buyers Guide'); 
    const [selectedCategory1, setSelectedCategory1] = useState('Painting');
    const [selectedCategory2, setSelectedCategory2] = useState('Renovation');
    const [selectedCategory3, setSelectedCategory3] = useState('Home Loan');
    const [selectedCategory4, setSelectedCategory4] = useState('Mumbai');
    const [selectedCategory5, setSelectedCategory5] = useState('Home & Garden');

      
  return (
    <>
        <section style={{background:'#D6E5F5'}} >
            <div className="container">
            <div className="row ">
                <div className="col-lg-5 mt-5">
                    <h1 style={{fontSize:'60px',fontWeight:'600'}}>The NESTATE Times</h1>
                    <p style={{fontSize:'40px',fontWeight:'400'}}>Real Estate, Services & Inspiration Unbounded</p>
                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Subscribe to our blogs
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">
                                    <h4>Subscribe to our newsletter</h4>
                                    <p>Get latest news delivered straight to you inbox</p>
                                </h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Write your email address" required/>
                                    </div>
                                </form>
                                <div>
                                    {buttons.map((button)=>(
                                        <button  type="button" class="btn btn-primary mx-5">{button.text}</button>
                                    ))}
                                    <button type="button" class="btn btn-primary">Subscribe Now</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 slider-1">
                <Swiper
        spaceBetween={70}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slider1.map((slider) => (
    <SwiperSlide key={slider.id}>
    <div
        style={{
            backgroundImage: `url(${slider.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '320px',
            height: '245px',
            borderRadius: '5px',
            position: 'relative',
            overflow: 'hidden',
        }}
    >
        {/* Overlay mask */}
        <div
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with opacity
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '5px',
            }}
        ></div>
        
        {/* Content inside the slider */}
        <div
            style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                color: 'white',
                zIndex: 1,
            }}
        >
            <div className='bg-light rounded-1 fw-light text-dark p-2 d-inline-block'><p style={{ fontWeight: 'bold', fontSize:'10px' }}>{slider.title}</p></div>
            <div className='bg-danger bg-opacity-75 text-light p-2 my-2 rounded-1'><p style={{ fontSize: '12px', fontSize:'14px' }}>{slider.description}</p></div>
            <div>
            <p style={{fontSize:'12px'}}>
                {slider.date} <span style={{color:'rgb(253, 55, 83)'}}>{slider.author}</span>
            </p>
            </div>
        </div>
    </div>
</SwiperSlide>

))}

      </Swiper>
                </div>
            </div>
            </div>
        </section>
        <section className='my-5'>
            <div className="container">
            <Swiper
        spaceBetween={10}
        slidesPerView={7}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slider2.map((slider)=>(
            <SwiperSlide>
                <div  style={{
            backgroundImage: `url(${slider.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '140px',
            height: '140px',
            borderRadius: '5px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            <div style={{ width: '140px',height: '140px',background:'black',opacity:'50%'}}></div>
            <div className='position-absolute bottom-0 start-0 p-2 text-light '>
                <h4 style={{fontSize:'14px',fontWeight:'700'}}>{slider.titile}</h4>
                <p style={{fontSize:'12px', fontWeight:'500'}}>{slider.articles_no} Articles</p>
            </div>
                </div>
            </SwiperSlide>
        ))}
      </Swiper>
            </div>
        </section>
        <section className='my-5'>
        <div className="container mt-5"  style={{background:'#EBEDFB',borderRadius:'10px',padding:'10px'}}>
      <div
        className="p-4 rounded shadow-sm row"
      >
        <div className="col-lg-5">
        <h3 className="mb-2" style={{fontSize:'24px',fontWeight:'700',color:'rgb(68, 68, 68)'}}>Subscribe to our newsletter</h3>
        <p className="text-muted" style={{fontSize:'16px',fontWeight:'500',color:'rgb(68, 68, 68)'}}>  
          Get the latest news delivered straight to your inbox
        </p>
        </div>
        <div className="col-lg-7">
        <div className="d-flex align-items-center">
          <input
            type="email"
            className="form-control me-2"
            placeholder="Enter your email address"
            style={{ maxWidth: "500px",height:'58px' }}
          />
          <button className="btn btn-danger" style={{width:'179px',height:'43px'}}>Subscribe Now</button>
        </div>
        </div>
      </div>
    </div>
        </section>
        <section className='my-5 '>
            <div className="container section-box">
                <h1 className='mb-5' style={{fontSize:'24px',fontWeight:'600'}}>Real Estate</h1>
                <div className="d-flex gap-4">
                {realbtn.map((category,a)=>(
                    <div className=' '>
                        <button
                className={`real-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
                    </div>
                ))}
                </div>
                <div className={selectedCategory === 'Property Buyers Guide' ? 'one' : 'd-none'}>
                  <div className="row mt-5">
                    <div className="col-lg-4 rounded-3">
                      <img src="https://www.nobroker.in/blog/wp-content/uploads/2022/04/Exact-Construction-Cost.jpg" style={{ width: "420px", height: "180px" }}  className='overflow-hidden'  alt="" />
                      <div className='mx-4 my-5'>
                      <h1 style={{fontSize:'16px', fontWeight:'700'}}>Construction Cost in Bangalore: Detailed Guide to Per Sq. Ft. Rates (2025)</h1>
                      <p className='mt-3' style={{fontSize:'14px', fontWeight:'400'}}>Bangalore, a hub of technological innovation, has witnessed significant social development since the Information Technology revolution. In 2025, the real</p>
                      <p className='mt-3' style={{fontSize:'12px', fontWeight:'600'}}>December 6, 2024 by <span className='text-danger'>Vivek Mishra</span></p>
                    </div>
                      </div>
                    <div className="col-lg-4">
                      <div className='position-relative mb-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/12/best-place-to-invest-in-bangalore.webp')`,backgroundSize:'cover',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>Best Place to Invest in Bangalore: Top Areas for Property Investment in 2024</p>
                      </div>
                      <div className='position-relative mt-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/07/top-real-estate-companies-in-india.jpg')`,backgroundSize:'contain',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>Top 10 Real Estate Companies in India 2025</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                    <BlogList />
                    </div>
                  </div>
                  {realbtn.slice(0,1).map((category1) => (
           <div className='d-flex justify-content-center my-5'>
           <button className='button-rental'><a href="#">View More in {category1}</a></button>
         </div>
          ))}
                </div>
                <div className={selectedCategory === 'Property Sellers Guide' ? 'two' : 'd-none'}>
                <div className="row mt-5">
                    <div className="col-lg-4 rounded-3">
                      <img src="https://www.nobroker.in/blog/wp-content/uploads/2022/01/Capital-Gain-On-The-Sale-Of-A-Property.jpg" style={{ width: "420px", height: "180px" }} className='overflow-hidden' alt=""  />
                      <div className='mx-4 my-5'>
                      <h1 style={{fontSize:'16px', fontWeight:'700'}}>Capital Gain on Sale of Property: Know How It Affects Your Taxes in 2024</h1>
                      <p className='mt-3' style={{fontSize:'14px', fontWeight:'400'}}>Capital Gain on Sale of Property refers to the profit you make when you sell a property for more than what you originally paid. This profit is called a capital</p>
                      <p className='mt-3' style={{fontSize:'12px', fontWeight:'600'}}>December 6, 2024 by <span className='text-danger'>Vivek Mishra</span></p>
                    </div>
                      </div>
                    <div className="col-lg-4">
                      <div className='position-relative mb-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/12/how-location-impacts-property-sale-prices.webp')`,backgroundSize:'contain',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>How Location Impacts Property Sale Prices</p>
                      </div>
                      <div className='position-relative mt-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/12/real-estate-roi-comparisons-india-vs-other-countries.webp')`,backgroundSize:'cover',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <div className='w-100 h-100 bg-dark opacity-50'></div>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>Top 10 Real Estate Companies in India 2025</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                    <BlogList />
                    </div>
                  </div>
                  {realbtn.slice(1,2).map((category1) => (
           <div className='d-flex justify-content-center my-5'>
           <button className='button-rental'><a href="#">View More in {category1}</a></button>
         </div>
          ))}
                </div>
                <div className={selectedCategory === 'Property Rental Guide' ? 'three' : 'd-none'}>
                <div className="row mt-5">
                    <div className="col-lg-4 rounded-3">
                      <img src="https://www.nobroker.in/blog/wp-content/uploads/2024/10/best-property-inspection-apps.jpg" style={{ width: "420px", height: "180px" }} className='overflow-hidden' alt="" />
                      <div className='mx-4 my-5'>
                      <h1 style={{fontSize:'16px', fontWeight:'700'}}>10 Best Property Inspection Apps in Indian in 2024</h1>
                      <p className='mt-3' style={{fontSize:'14px', fontWeight:'400'}}>Looking for a property can be exciting, but you need to check it well before making a decision. That’s why using the best property inspection apps is a smart</p>
                      <p className='mt-3' style={{fontSize:'12px', fontWeight:'600'}}>December 6, 2024 by <span className='text-danger'>Priyanka Saha</span></p>
                    </div>
                      </div>
                    <div className="col-lg-4">
                      <div className='position-relative mb-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/06/magenta-line-delhi-metro-key-features-schedule-and-benefits.jpg')`,backgroundSize:'contain',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>Best Place to Invest in Bangalore: Top Areas for Property Investment in 2024</p>
                      </div>
                      <div className='position-relative mt-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/06/10-best-society-management-apps-in-india.jpg')`,backgroundSize:'cover',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>Top 10 Real Estate Companies in India 2025</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                    <BlogList />
                    </div>
                  </div>
                  {realbtn.slice(2,3).map((category1) => (
           <div className='d-flex justify-content-center my-5'>
           <button className='button-rental'><a href="#">View More in {category1}</a></button>
         </div>
          ))}
                </div>
            </div>
        </section>
        <section className="my-5">
      <div className="container section-box">
        <h1 className='mb-5' style={{ fontSize: "24px", fontWeight: "600" }}>Home Services</h1>
        <div className="d-flex gap-4 my-4">
          {realbtn1.map((category1) => (
            <button
              key={category1}
              className={`real-btn ${
                selectedCategory1 === category1 ? "active" : ""
              }`}
              onClick={() => setSelectedCategory1(category1)}
            >
              {category1}
            </button>
          ))}
        </div>

        <div className={selectedCategory1 === "Painting" ? "" : "d-none"}>
            <div className="row mt-5">
                    <div className="col-lg-4 rounded-3">
                      <img src="https://www.nobroker.in/blog/wp-content/uploads/2024/03/dark-coffee-colour-paint-1.jpg" style={{ width: "420px", height: "180px" }} className='overflow-hidden' alt="" />
                      <div className='mx-4 my-5'>
                      <h1 style={{fontSize:'16px', fontWeight:'700'}}>25+ Creative Flower Wall Painting Design Ideas for a Stylish Home in 2025</h1>
                      <p className='mt-3' style={{fontSize:'14px', fontWeight:'400'}}>Have you ever thought about living in a place filled with colourful flowers? Imagine a stunning array of flowers decorating your walls, taking you to a peaceful garden. This dream can becom</p>
                      <p className='mt-3' style={{fontSize:'12px', fontWeight:'600'}}>December 6, 2024 by <span className='text-danger'>Kiran K S </span></p>
                    </div>
                      </div>
                    <div className="col-lg-4">
                      <div className='position-relative mb-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2023/09/wall-paint-design-for-drawing-room.jpg')`,backgroundSize:'contain',backgroundPosition:'center',width:'100%',height:'180px'}}>
                      <div className='w-100 h-100 bg-dark opacity-25 '></div>
                      <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        Best Wall Paint Design for Drawing Room in 2024</p>
                      </div>
                      <div className='position-relative mt-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/05/asian-paints-distemper-price-20-litre.webp')`,backgroundSize:'cover',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <div className='w-100 h-100 bg-dark opacity-25 '></div>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        Asian Paints Distemper Price 20 litre 2024</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                    <BlogList />
                    </div>
            </div>
            {realbtn1.slice(0,1).map((category1) => (
           <div className='d-flex justify-content-center my-5'>
           <button className='button-rental'><a href="#">View More in {category1}</a></button>
         </div>
          ))}
        </div>
        <div className={selectedCategory1 === "Cleaning" ? "" : "d-none"}>
        <div className="row mt-5">
                    <div className="col-lg-4 rounded-3">
                      <img src="https://www.nobroker.in/blog/wp-content/uploads/2024/12/steps-for-bathtub-cleaning.webp" style={{ width: "420px", height: "180px" }} className='overflow-hidden' alt="" />
                      <div className='mx-4 my-5'>
                      <h1 style={{fontSize:'16px', fontWeight:'700'}}>Bathtub Cleaning Solutions: Step-wise Cleaning Methods to Keep Your Tub Sparkling Clean in 2025</h1>
                      <p className='mt-3' style={{fontSize:'14px', fontWeight:'400'}}>Stubborn stains in your bathtub that won't go away? Does it feel like you've tried every method, from the so-called best way to clean your tub to various</p>
                      <p className='mt-3' style={{fontSize:'12px', fontWeight:'600'}}>December 6, 2024 by <span className='text-danger'> Krishnanunni H M </span></p>
                    </div>
                      </div>
                    <div className="col-lg-4">
                      <div className='position-relative mb-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2023/10/bathroom-cleaning-checklist-1.jpg')`,backgroundSize:'contain',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        Bathroom Cleaning Checklist: Daily, Weekly, and Monthly Tasks Made Easy</p>
                      </div>
                      <div className='position-relative mt-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/11/how-to-wash-glass-windows.webp')`,backgroundSize:'cover',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        How to Wash Glass Windows | Step-by-Step Guide for Streak-Free Cleaning</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                    <BlogList />
                    </div>
            </div>
            {realbtn1.slice(1,2).map((category1) => (
           <div className='d-flex justify-content-center my-5'>
           <button className='button-rental'><a href="#">View More in {category1}</a></button>
         </div>
          ))}
        </div>
        <div className={selectedCategory1 === "AC Services" ? "" : "d-none"}>
        <div className="row mt-5">
                    <div className="col-lg-4 rounded-3">
                      <img src="https://www.nobroker.in/blog/wp-content/uploads/2024/03/best-ac-service-apps-in-india.jpg" style={{ width: "420px", height: "180px" }} className='overflow-hidden' alt="" />
                      <div className='mx-4 my-5'>
                      <h1 style={{fontSize:'16px', fontWeight:'700'}}>List of 10 Best AC Service Apps in 2024
                      </h1>
                      <p className='mt-3' style={{fontSize:'14px', fontWeight:'400'}}>Best AC service apps are transforming the approach to air conditioner upkeep and repair. These innovative platforms connect users effortlessly with skilled and trustworthy AC services throu</p>
                      <p className='mt-3' style={{fontSize:'12px', fontWeight:'600'}}>December 6, 2024 by <span className='text-danger'>Priyanka Saha </span></p>
                    </div>
                      </div>
                    <div className="col-lg-4">
                      <div className='position-relative mb-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/02/air-conditioner-gas-leak_-signs-prevention-and-action.jpg')`,backgroundSize:'contain',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        Air Conditioner Gas Leaks: How to Detect and Prevent</p>
                      </div>
                      <div className='position-relative mt-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/02/best-air-conditioner-brand-in-india.jpg')`,backgroundSize:'cover',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        Best Air Conditioner Brands in India: Beat the Heat with the Finest</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                    <BlogList />
                    </div>
            </div>
            {realbtn1.slice(2,3).map((category1) => (
           <div className='d-flex justify-content-center my-5'>
           <button className='button-rental'><a href="#">View More in {category1}</a></button>
         </div>
          ))}
        </div>
        <div className={selectedCategory1 === "Electrician Services" ? "" : "d-none"}
        >
          <div className="row mt-5">
                    <div className="col-lg-4 rounded-3">
                      <img src="https://www.nobroker.in/blog/wp-content/uploads/2024/12/best-inverter-battery-for-home.webp" className='overflow-hidden' alt="" style={{ width: "420px", height: "180px" }} />
                      <div className='mx-4 my-5'>
                      <h1 style={{fontSize:'16px', fontWeight:'700'}}>Top 10 Best Inverter Batteries for Home in 2025: Ultimate Buying Guide</h1>
                      <p className='mt-3' style={{fontSize:'14px', fontWeight:'400'}}>Choosing the best inverter battery for home is essential for ensuring a seamless power backup during electricity outages. With an array of options</p>
                      <p className='mt-3' style={{fontSize:'12px', fontWeight:'600'}}>December 6, 2024 by <span className='text-danger'>srivalli susarla </span></p>
                    </div>
                      </div>
                    <div className="col-lg-4">
                      <div className='position-relative mb-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/12/types-of-motor-starters.webp')`,backgroundSize:'contain',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        Types of Motor Starters Explained: Features & Uses</p>
                      </div>
                      <div className='position-relative mt-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/12/what-is-the-difference-between-mcb-mccb-rcb-rcd-rccb-and-rcbo.webp')`,backgroundSize:'cover',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        What is the Difference Between MCB, MCCB, RCB, RCD, RCCB, and RCBO: All you Need to Know</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                    <BlogList />
                    </div>
            </div>
            {realbtn1.slice(3,4).map((category1) => (
           <div className='d-flex justify-content-center my-5'>
           <button className='button-rental'><a href="#">View More in {category1}</a></button>
         </div>
          ))}
        </div>
        <div className={selectedCategory1 === "Home & Garden" ? "" : "d-none"}>
        <div className="row mt-5">
                    <div className="col-lg-4 rounded-3">
                      <img src="https://www.nobroker.in/blog/wp-content/uploads/2023/12/garden-makeover-1.jpg" className='overflow-hidden' alt="" style={{ width: "420px", height: "180px" }} />
                      <div className='mx-4 my-5'>
                      <h1 style={{fontSize:'16px', fontWeight:'700'}}>Garden Makeover Delights: Transforming Your Outdoor Haven</h1>
                      <p className='mt-3' style={{fontSize:'14px', fontWeight:'400'}}>Picture a neglected garden corner, tangled in overgrown greens, begging for a touch of revival. Here lies the canvas of possibilities—a canvas awaiting the</p>
                      <p className='mt-3' style={{fontSize:'12px', fontWeight:'600'}}>December 6, 2024 by <span className='text-danger'>Priyanka Saha </span></p>
                    </div>
                      </div>
                    <div className="col-lg-4">
                      <div className='position-relative mb-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2021/03/Effective-Ways-to-Get-Rid-of-those-Buzzing-Houseflies.jpg')`,backgroundSize:'contain',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        The Ten Most Effective Ways to Get Rid of those Buzzing Houseflies!</p>
                      </div>
                      <div className='position-relative mt-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2019/01/lohri.jpg')`,backgroundSize:'cover',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        Lohri 2024: The Importance and Significance Of Lohri Festival</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                    <BlogList />
                    </div>
            </div>
            {realbtn1.slice(4,5).map((category1) => (
           <div className='d-flex justify-content-center my-5'>
           <button className='button-rental'><a href="#">View More in {category1}</a></button>
         </div>
          ))}
        </div>
        <div className={selectedCategory1 === "Pest Control" ? "" : "d-none"}>
        <div className="row mt-5">
                    <div className="col-lg-4 rounded-3">
                      <img src="https://www.nobroker.in/blog/wp-content/uploads/2024/11/best-termite-killer-chemical-in-india.webp" className='overflow-hidden' alt="" style={{ width: "420px", height: "180px" }} />
                      <div className='mx-4 my-5'>
                      <h1 style={{fontSize:'16px', fontWeight:'700'}}>10 Best Termite Killer Chemical in India for Long-Lasting Protection of Your Home in 2025</h1>
                      <p className='mt-3' style={{fontSize:'14px', fontWeight:'400'}}>Good termite treatment is very important since termites may seriously destroy buildings. Made to eliminate colonies and prov</p>
                      <p className='mt-3' style={{fontSize:'12px', fontWeight:'600'}}>December 6, 2024 by <span className='text-danger'>Kruthi</span></p>
                    </div>
                      </div>
                    <div className="col-lg-4">
                      <div className='position-relative mb-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/01/how-to-get-rid-of-bed-bugs.jpg')`,backgroundSize:'contain',backgroundPosition:'center',width:'100%',height:'180px'}}>
                      <div className='w-100 h-100 bg-dark opacity-25'></div>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        How to Get Rid of Bed Bugs: Best Tips and Natural Methods for a Pest-Free Home in 2024</p>
                      </div>
                      <div className='position-relative mt-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2022/02/eliminate-cockroaches-from-your-homes.jpg')`,backgroundSize:'cover',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <div className='w-100 h-100 bg-dark opacity-25'></div>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        10 Ways to Eliminate Cockroaches from Your Homes Forever!</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <BlogList/>
                    </div>
            </div>

{realbtn1.slice(5,6).map((category1) => (
           <div className='d-flex justify-content-center my-5'>
           <button className='button-rental'><a href="#">View More in {category1}</a></button>
         </div>
          ))}
        </div>
        
      </div>
        </section>
        <section className='my-5'>
            <div className="container section-box">
                <h1 className='mb-5' style={{fontSize:'24px',fontWeight:'600'}}>Home Interiors</h1>
                <div className="d-flex gap-4">
                {realbtn2.map((category2,a)=>(
                    <div className=' '>
                        <button
                className={`real-btn ${selectedCategory2 === category2 ? 'active' : ''}`}
                onClick={() => setSelectedCategory2(category2)}
              >
                {category2}
              </button>
                    </div>
                ))}
                </div>
                <div className={selectedCategory2 === 'Renovation' ? '' : 'd-none'}>
                  <div className="row mt-5">
                    <div className="col-lg-4 rounded-3">
                      <img src="https://www.nobroker.in/blog/wp-content/uploads/2024/10/best-tiles-company-in-india.jpg" style={{ width: "420px", height: "180px" }}  className='overflow-hidden'  alt="" />
                      <div className='mx-4 my-5'>
                      <h1 style={{fontSize:'16px', fontWeight:'700'}}>Top 10 Tiles Company in India: Location, Valuation, Market Share Value and Quality Certifications in 2024</h1>
                      <p className='mt-3' style={{fontSize:'14px', fontWeight:'400'}}>Do you want to redecorate your space with gorgeous digitally printed tiles but are unsure of the company from which to purchase them? Whether it is a digital</p>
                      <p className='mt-3' style={{fontSize:'12px', fontWeight:'600'}}>December 6, 2024 by <span className='text-danger'>Siri Hegde K</span></p>
                    </div>
                      </div>
                    <div className="col-lg-4">
                      <div className='position-relative mb-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/06/best-home-renovation-apps-for-every-budget.jpg')`,backgroundSize:'contain',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        10 Best Home Renovation Apps for Every Budget 2024</p>
                      </div>
                      <div className='position-relative mt-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2023/11/Home-Renovation-Cost-1.jpg')`,backgroundSize:'cover',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        Home Renovation Costs: Know Before You Renovate</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                    <BlogList />
                    </div>
                  </div>
                  {realbtn2.slice(0,1).map((category1) => (
           <div className='d-flex justify-content-center my-5'>
           <button className='button-rental'><a href="#">View More in {category1}</a></button>
         </div>
          ))}
                </div>
                <div className={selectedCategory2 === 'Vastu Tips' ? '' : 'd-none'}>
                <div className="row mt-5">
                    <div className="col-lg-4 rounded-3">
                      <img src="https://www.nobroker.in/blog/wp-content/uploads/2023/11/Snake-Plant-Vastu.jpg" style={{ width: "420px", height: "180px" }}  className='overflow-hidden'  alt="" />
                      <div className='mx-4 my-5'>
                      <h1 style={{fontSize:'16px', fontWeight:'700'}}>Snake Plant Vastu: Direction, Benefits and Harness Positive Energy for Your Home in 2024</h1>
                      <p className='mt-3' style={{fontSize:'14px', fontWeight:'400'}}>The Snake Plant, scientifically known as Sansevieria, is celebrated for its elegant, sword-like leaves and resilience. This plant belongs to the Asparagaceae</p>
                      <p className='mt-3' style={{fontSize:'12px', fontWeight:'600'}}>December 6, 2024 by <span className='text-danger'>Prakhar Sushant</span></p>
                    </div>
                      </div>
                    <div className="col-lg-4">
                      <div className='position-relative mb-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2022/10/different-types-of-vastu-fishes.webp')`,backgroundSize:'contain',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        Types of Vastu Fishes for Aquarium to Attract Positive Energy and Prosperity to Your Space in 2024</p>
                      </div>
                      <div className='position-relative mt-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/12/dream-catcher-benefits.webp')`,backgroundSize:'cover',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        Benefits of Dream Catchers: Better Sleep, Mindfulness, and Emotional Healing</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                    <BlogList />
                    </div>
                  </div>
                  {realbtn2.slice(1,2).map((category1) => (
           <div className='d-flex justify-content-center my-5'>
           <button className='button-rental'><a href="#">View More in {category1}</a></button>
         </div>
          ))}
                </div>
                <div className={selectedCategory2 === 'Celebrity Homes' ? '' : 'd-none'}>
                <div className="row mt-5">
                    <div className="col-lg-4 rounded-3">
                      <img src="https://www.nobroker.in/blog/wp-content/uploads/2021/07/allu-arjun-house.jpg" style={{ width: "420px", height: "180px" }}  className='overflow-hidden'  alt="" />
                      <div className='mx-4 my-5'>
                      <h1 style={{fontSize:'16px', fontWeight:'700'}}>Allu Arjun House in Jubilee Hills Hyderabad: A Perfect Combination of Minimalism and Style</h1>
                      <p className='mt-3' style={{fontSize:'14px', fontWeight:'400'}}>In the heart of Hyderabad's prestigious Jubilee Hills, Allu Arjun, the iconic Telugu cinema superstar, resides in a home that perfectly embodies his dynamic</p>
                      <p className='mt-3' style={{fontSize:'12px', fontWeight:'600'}}>December 6, 2024 by <span className='text-danger'>Pooja</span></p>
                    </div>
                      </div>
                    <div className="col-lg-4">
                      <div className='position-relative mb-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/12/nora-fatehi-house.webp')`,backgroundSize:'contain',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        Inside Nora Fatehi’s Luxurious House: A Glimpse of Her Opulent Lifestyle</p>
                      </div>
                      <div className='position-relative mt-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/12/vijay-sethupathi-house.webp')`,backgroundSize:'cover',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        Vijay Sethupathi House: A Perfect Blend of Luxury, Simplicity, and Privacy</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                    <BlogList />
                    </div>
                  </div>
                  {realbtn2.slice(2,3).map((category1) => (
           <div className='d-flex justify-content-center my-5'>
           <button className='button-rental'><a href="#">View More in {category1}</a></button>
         </div>
          ))}
                </div>
            </div>
        </section>
        <section className='my-5'> 
            <div className="container section-box">
                <h1 className='mb-5' style={{fontSize:'24px',fontWeight:'600'}}>Finance</h1>
                <div className="d-flex gap-4">
                {realbtn3.map((category3,a)=>(
                    <div className=' '>
                        <button
                className={`real-btn ${selectedCategory3 === category3 ? 'active' : ''}`}
                onClick={() => setSelectedCategory3(category3)}
              >
                {category3}
              </button>
                    </div>
                ))}
                </div>
                <div className={selectedCategory3 === 'Home Loan' ? '' : 'd-none'}>
                <div className="row mt-5">
                    <div className="col-lg-4 rounded-3">
                      <img src="https://www.nobroker.in/blog/wp-content/uploads/2023/07/Union-Bank-Home-Loan-Interest-Rate-1.jpg" style={{ width: "420px", height: "180px" }}  className='overflow-hidden'  alt="" />
                      <div className='mx-4 my-5'>
                      <h1 style={{fontSize:'16px', fontWeight:'700'}}>Union Bank Home Loan Interest Rates - Updated in December 2024</h1>
                      <p className='mt-3' style={{fontSize:'14px', fontWeight:'400'}}>For customers wishing to buy their dream homes, Union Bank provides alluring home loan interest rates starting at 8.70% p.a. These rates are fair, and they</p>
                      <p className='mt-3' style={{fontSize:'12px', fontWeight:'600'}}>December 6, 2024 by <span className='text-danger'>NoBroker.com</span></p>
                    </div>
                      </div>
                    <div className="col-lg-4">
                      <div className='position-relative mb-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2023/09/40-LakhHome-Loan-EMI.jpg')`,backgroundSize:'contain',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        ₹40 Lakh Home Loan EMI With Calculator and Interest Rates in 2025</p>
                      </div>
                      <div className='position-relative mt-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2023/09/30-Lakh-Home-Loan-EMI.jpg')`,backgroundSize:'cover',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        ₹30 Lakh Home Loan EMI With Calculator and Interest Rates in 2025</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                    <BlogList />
                    </div>
                  </div>
                  {realbtn3.slice(0,1).map((category1) => (
           <div className='d-flex justify-content-center my-5'>
           <button className='button-rental'><a href="#">View More in {category1}</a></button>
         </div>
          ))}
                </div>
                <div className={selectedCategory3 === 'Cash Loan' ? '' : 'd-none'}>
                <div className="row mt-5">
                    <div className="col-lg-4 rounded-3">
                      <img src="https://www.nobroker.in/blog/wp-content/uploads/2024/06/pnb-personal-loan-interest-rates.jpg" style={{ width: "420px", height: "180px" }}  className='overflow-hidden'  alt="" />
                      <div className='mx-4 my-5'>
                      <h1 style={{fontSize:'16px', fontWeight:'700'}}>PNB Personal Loan Interest Rates – December 2024</h1>
                      <p className='mt-3' style={{fontSize:'14px', fontWeight:'400'}}>Are you looking for reliable information on the PNB Personal Loan Interest Rate? Understanding the current rates can help you make informed financial</p>
                      <p className='mt-3' style={{fontSize:'12px', fontWeight:'600'}}>December 6, 2024 by <span className='text-danger'>Nivriti Saha</span></p>
                    </div>
                      </div>
                    <div className="col-lg-4">
                      <div className='position-relative mb-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/05/bob-personal-loan-interest-rates.jpg')`,backgroundSize:'contain',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        BOB Personal Loan Interest Rate - December 2024</p>
                      </div>
                      <div className='position-relative mt-5' style={{background:`url('https://www.nobroker.in/blog/wp-content/uploads/2024/11/15-days-loan-apps-list.webp')`,backgroundSize:'Cover',backgroundPosition:'center',width:'100%',height:'180px'}}>
                        <p className='position-absolute bottom-0 p-2 text-light fw-semibold'>
                        Top 15 Days Loan Apps List in India: Quick Short-Term Loans and Low Interest Rates in 2025</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                    <BlogList />
                    </div>
                  </div>
                  {realbtn3.slice(1,2).map((category1) => (
           <div className='d-flex justify-content-center my-5'>
           <button className='button-rental'><a href="#">View More in {category1}</a></button>
         </div>
          ))}
                </div>
            </div>
        </section>
        <section className='my-5'>
            <div className="container section-box">
                <h1 className='mb-5' style={{fontSize:'24px',fontWeight:'600'}}>Trending News in Real Estate</h1>
                <div className="d-flex gap-4 mb-5">
                {realbtn4.map((category4,a)=>(
                    <div className=' '>
                        <button
                className={`real-btn ${selectedCategory4 === category4 ? 'active' : ''}`}
                onClick={() => setSelectedCategory4(category4)}
              >
                {category4}
              </button>
                    </div>
                ))}
                </div>
                <div className={selectedCategory4 === 'Kathmandu' ? '' : 'd-none'}>
                <Swiper navigation={true} slidesPerView={3} modules={[Navigation]} className="mySwiper">
                  {mumbaiBlogs.map((a)=>(
                  <SwiperSlide>
                    <div key={a} className="rounded-3 mb-4">
                  <img
                    src={a.image}
                    style={{ width: "400px", height: "180px" }}
                    className="overflow-hidden"
                    alt="Union Bank Home Loan"
                  />
                  <div className="mx-4 my-3">
                    <h1 style={{ fontSize: "16px", fontWeight: "700" }}>
                      {a.title}
                    </h1>
                    <p className="mt-3" style={{ fontSize: "14px", fontWeight: "400" }}>
                      {a.description}
                    </p>
                    <p className="mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>
                      {a.date} by <span className="text-danger">{a.author}</span>
                    </p>
                  </div>
                </div>
                  </SwiperSlide>
                ))}
                </Swiper>
                </div>
                <div className={selectedCategory4 === 'Bhaktapur' ? '' : 'd-none'}>
                  <Swiper navigation={true} slidesPerView={3} modules={[Navigation]} className="mySwiper">
                  {puneBlogs.map((a)=>(
                  <SwiperSlide>
                    <div key={a} className="rounded-3 mb-4">
                  <img
                    src={a.image}
                    style={{ width: "400px", height: "180px" }}
                    className="overflow-hidden"
                    alt="Union Bank Home Loan"
                  />
                  <div className="mx-4 my-3">
                    <h1 style={{ fontSize: "16px", fontWeight: "700" }}>
                      {a.title}
                    </h1>
                    <p className="mt-3" style={{ fontSize: "14px", fontWeight: "400" }}>
                      {a.description}
                    </p>
                    <p className="mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>
                      {a.date} by <span className="text-danger">{a.author}</span>
                    </p>
                  </div>
                </div>
                  </SwiperSlide>
                ))}
                </Swiper>
                </div>
                <div className={selectedCategory4 === 'Lalitpur' ? '' : 'd-none'}>
                <Swiper navigation={true} slidesPerView={3} modules={[Navigation]} className="mySwiper">
                  {hyderabadBlogs.map((a)=>(
                  <SwiperSlide>
                    <div key={a} className="rounded-3 mb-4">
                  <img
                    src={a.image}
                    style={{ width: "400px", height: "180px" }}
                    className="overflow-hidden"
                    alt="Union Bank Home Loan"
                  />
                  <div className="mx-4 my-3">
                    <h1 style={{ fontSize: "16px", fontWeight: "700" }}>
                      {a.title}
                    </h1>
                    <p className="mt-3" style={{ fontSize: "14px", fontWeight: "400" }}>
                      {a.description}
                    </p>
                    <p className="mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>
                      {a.date} by <span className="text-danger">{a.author}</span>
                    </p>
                  </div>
                </div>
                  </SwiperSlide>
                ))}
                </Swiper>
                </div>
                <div className={selectedCategory4 === 'Pokhara' ? '' : 'd-none'}>
                <Swiper navigation={true} slidesPerView={3} modules={[Navigation]} className="mySwiper">
                  {bangaloreBlogs.map((a)=>(
                  <SwiperSlide>
                    <div key={a} className="rounded-3 mb-4">
                  <img
                    src={a.image}
                    style={{ width: "400px", height: "180px" }}
                    className="overflow-hidden"
                    alt="Union Bank Home Loan"
                  />
                  <div className="mx-4 my-3">
                    <h1 style={{ fontSize: "16px", fontWeight: "700" }}>
                      {a.title}
                    </h1>
                    <p className="mt-3" style={{ fontSize: "14px", fontWeight: "400" }}>
                      {a.description}
                    </p>
                    <p className="mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>
                      {a.date} by <span className="text-danger">{a.author}</span>
                    </p>
                  </div>
                </div>
                  </SwiperSlide>
                ))}
                </Swiper>
                </div>
                <div className={selectedCategory4 === 'Chitwan' ? '' : 'd-none'}>
                <Swiper navigation={true} slidesPerView={3} modules={[Navigation]} className="mySwiper">
                  {chennaiBlogs.map((a)=>(
                  <SwiperSlide>
                    <div key={a} className="rounded-3 mb-4">
                  <img
                    src={a.image}
                    style={{ width: "400px", height: "180px" }}
                    className="overflow-hidden"
                    alt="Union Bank Home Loan"
                  />
                  <div className="mx-4 my-3">
                    <h1 style={{ fontSize: "16px", fontWeight: "700" }}>
                      {a.title}
                    </h1>
                    <p className="mt-3" style={{ fontSize: "14px", fontWeight: "400" }}>
                      {a.description}
                    </p>
                    <p className="mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>
                      {a.date} by <span className="text-danger">{a.author}</span>
                    </p>
                  </div>
                </div>
                  </SwiperSlide>
                ))}
                </Swiper>
                </div>
                <div className={selectedCategory4 === 'Gorkha' ? '' : 'd-none'}>
                <Swiper navigation={true} slidesPerView={3} modules={[Navigation]} className="mySwiper">
                  {delhiBlogs.map((a)=>(
                  <SwiperSlide>
                    <div key={a} className="rounded-3 mb-4">
                  <img
                    src={a.image}
                    style={{ width: "400px", height: "180px" }}
                    className="overflow-hidden"
                    alt="Union Bank Home Loan"
                  />
                  <div className="mx-4 my-3">
                    <h1 style={{ fontSize: "16px", fontWeight: "700" }}>
                      {a.title}
                    </h1>
                    <p className="mt-3" style={{ fontSize: "14px", fontWeight: "400" }}>
                      {a.description}
                    </p>
                    <p className="mt-3" style={{ fontSize: "12px", fontWeight: "600" }}>
                      {a.date} by <span className="text-danger">{a.author}</span>
                    </p>
                  </div>
                </div>
                  </SwiperSlide>
                ))}
                </Swiper>
                </div>
            </div>
        </section>
        <section className='my-5'>
        <div className="container">
        <div className="d-flex gap-4 mb-5">
                {realbtn5.map((category5,a)=>(
                    <div className=' '>
                        <button
                className={`${selectedCategory4 === category5 ? 'active' : ''}`}
                onClick={() => setSelectedCategory5(category5)}
              >
                {category5}
              </button>
                    </div>
                ))}
        </div>
        <div className={selectedCategory5 === 'Home & Garden' ? '' : 'd-none'}>
        <ul>
    <li>4 BHK House Plans</li>
    <li>Garden Makeover</li>
    <li>Ways to Get Rid Of Houseflies</li>
    <li>Lohri 2024: The Importance and Significance Of Lohri Festival</li>
    <li>Lawn Care</li>
    <li>Best Wood for Beds</li>
    <li>Climbing Plants with Flowers</li>
    <li>How to Keep Your House Smelling Good</li>
    <li>Indoor Air Purifying Plants</li>
    <li>Best out of Waste Ideas for Home Decoration</li>
    <li>Home Decoration Ideas for Diwali</li>
    <li>5 Signs You Need to Hire A Professional Cleaner</li>
    <li>Indian Kitchen Garden Plants</li>
    <li>Christmas Decorations Ideas</li>
    <li>Space Management Tips</li>
    <li>DIY Christmas Decoration</li>
    <li>Christmas Decorations for Kids</li>
    <li>Winter Plants</li>
    <li>Flowering Plants</li>
    <li>Onam Festival</li>
    <li>Ceramic Tiles vs Vitrified Tiles - Understanding the Differences</li>
    <li>Plants That Need Only Water to Grow and How it is Different from Hydroponics</li>
</ul>

        </div>
        <div className={selectedCategory5 === 'Commercial Loan' ? '' : 'd-none'}>
                  <ul>
                <li>what is a bank loan</li>
                <li>commercial property loan interest rates</li>
                </ul>     
        </div>
        <div className={selectedCategory5 === 'NoBroker News' ? '' : 'd-none'}>
        <ul>
    <li>BDA 279 Illegal Layouts</li>
    <li>Earn Money Online without Investment for Students via NoBroker Ambassador Club</li>
    <li>Use NoBroker Pay To Jump The Queue And Pay Your College Fees Online</li>
    <li>Find Out Which is The Best Credit Card For Paying Rent Every Month</li>
    <li>Too busy and have no time, don’t worry! Switch to NoBroker Shop Rent Payment</li>
    <li>Check Out How NoBroker’s Rent Payment Service can make Your Life Easier</li>
    <li>All About World Environment Day 2024: #Onlyoneearth</li>
    <li>Coming Back to your House After the Pandemic? You Need to Book These Services ASAP</li>
    <li>Covid Fuels NoBrokerHood Expansion to 5 more cities</li>
    <li>NoBroker.com ties-up with OYO LIFE, to scale up its co-living services</li>
    <li>NoBrokerHOOD Adds a Bundle of Security Features to Help Residents Fight Covid-19</li>
    <li>Cut the Crap!</li>
    <li>NoBroker अब दिल्ली-एनसीआर में</li>
    <li>Interns at NoBroker 2019</li>
    <li>NoBroker is Now in DELHI NCR</li>
    <li>#NoBrokerNumbers</li>
    <li>#Citygrapher</li>
    <li>How NHB directive on subvention schemes will impact residential real estate sector</li>
    <li>The Always “ON” Mode of the Indian Worker</li>
    <li>Life Score By NoBroker</li>
</ul>

        </div>
        <div className={selectedCategory5 === 'Property Sellers Guide' ? '' : 'd-none'}>
        <ul>
    <li>Capital Gain on Sale of Property</li>
    <li>How Location Impacts Property Sale Prices</li>
    <li>Real Estate ROI Comparisons: India vs. Other Countries</li>
    <li>TDS on Sale of Property</li>
    <li>Capital Gain Account Scheme</li>
    <li>Section 54 of Transfer of Property Act</li>
    <li>Capital Gain on Sale of Agricultural Land</li>
    <li>How Location Impacts Property Sale Prices</li>
    <li>Difference Between Sale and Agreement to Sell</li>
    <li>Sale Deed Format</li>
    <li>Section 54F of the Income Tax Act</li>
    <li>Section 54 of Income Tax Act</li>
    <li>Section 27 of Income Tax Act 1961</li>
    <li>Section 50C of Income Tax Act 1961</li>
    <li>Short Term Capital Gains Tax</li>
    <li>Increase the Value of Your Home</li>
    <li>Marketing Strategies to Sell a House</li>
    <li>Things to Do After Selling Your House</li>
    <li>Selling a House with Solar Panels</li>
    <li>Delhi Apartment Ownership Act</li>
</ul>

        </div>
        <div className={selectedCategory5 === 'Property Buyers Guide' ? '' : 'd-none'}>
        <ul>
    <li>Construction Cost in Bangalore</li>
    <li>Best Places to Invest in Bangalore</li>
    <li>Top 10 Real Estate Companies in India</li>
    <li>Real Estate Investment in Pune</li>
    <li>Bhumi Pujan Muhurat</li>
    <li>Best Place to Invest in Noida</li>
    <li>Auspicious Dates for Property Registration</li>
    <li>Luxury Apartments in Mumbai: Exclusive Homes with World-Class Amenities and Iconic City Views in 2024</li>
    <li>Leasehold vs Freehold</li>
    <li>Most Expensive Apartments in Pune</li>
    <li>Most Expensive Houses in Mumbai</li>
    <li>Most Expensive House in Delhi</li>
    <li>Real Estate Company in Noida</li>
    <li>Real Estate Company in Coimbatore</li>
    <li>Real Estate Company in Kolkata</li>
    <li>Most Expensive Houses in Bangalore</li>
    <li>Property Consultant in Delhi</li>
    <li>Best Commercial Investment in Noida</li>
    <li>Mumbai Pune Expressway</li>
    <li>Real Estate Companies in Chennai</li>
</ul>

        </div>
        <div className={selectedCategory5 === 'Property Rental Guide' ? '' : 'd-none'}>
        <ul>
    <li>Best Property Inspection Apps</li>
    <li>Magenta Line Delhi Metro</li>
    <li>Best Society Management Apps in India</li>
    <li>Rent Control Act Kerala</li>
    <li>Rent Slip</li>
    <li>Room Rent Receipt Format</li>
    <li>Rent Receipt Format</li>
    <li>Type of Rental Property</li>
    <li>Rental Yield in Delhi</li>
    <li>Rental Yield in Mumbai</li>
    <li>Rental Yield in Bangalore</li>
    <li>Best App for Rent House in Bangalore</li>
    <li>Best App for Rent House in Hyderabad</li>
    <li>Paying Guest Apps</li>
    <li>Flat Searching App</li>
    <li>Renting a House vs Renting an Apartment</li>
    <li>Best App for House Rent</li>
    <li>Best App for House Rent in Chennai</li>
    <li>Best Home Search Apps</li>
    <li>Bangalore vs Gurgaon</li>
</ul>

        </div>
        <div className={selectedCategory5 === 'Celebrity Homes' ? '' : 'd-none'}>
        <ul>
    <li>Allu Arjun House</li>
    <li>Nora Fatehi House</li>
    <li>Vijay Sethupathi House</li>
    <li>Most Expensive House in India</li>
    <li>Hrithik Roshan’s House: Inside House Picture and Address</li>
    <li>Harshad Mehta House</li>
    <li>Mahesh Babu House</li>
    <li>Akshay Kumar's House</li>
    <li>Rajinikanth House</li>
    <li>Inside Janhvi Kapoor House</li>
    <li>Saif Ali Khan House</li>
    <li>Mukesh Ambani House</li>
    <li>Kartik Aaryan House</li>
    <li>Expensive House in the World</li>
    <li>Rohit Sharma’s House</li>
    <li>Yashasvi Jaiswal House</li>
    <li>Manoj Bajpayee House</li>
    <li>Rishabh Pant House</li>
    <li>Shubman Gill House</li>
    <li>Celebrity Houses in Mumbai</li>
</ul>

        </div>
        </div>
        </section>
        <section className='my-5'>
        <div className="d-flex justify-center align-items-center">
                  <div className="">
                <img src="https://assets.nobroker.in/nb-new/public/Home/homeAppPromotion.png" alt="" />
                  </div>
                  <div className="">
                    <p className='my-5' style={{fontSize:'24px',color:'rgb(253, 55, 82)',fontWeight:'500 '}}>Find A New Home On The Go</p>
                    <p className='mt-3' style={{fontSize:'19px',fontWeight:'500',color:'rgb(70, 70, 70)'}}>Download our app</p>
                    <p className='mb-5' style={{fontSize:'16px',fontWeight:'300',color:'rgb(70, 70, 70)'}}>Where convenience is at your fingertip</p>
                    <div className='d-flex gap-5 mt-5'>
                      <a style={{width:'150px',height:'45px'}} href="#"><img src="https://www.nobroker.in/locality-iq/images/en_badge_web_generic-1.png" alt="" srcset="" /></a>
                      <a style={{width:'150px',height:'45px'}} href="#"><img src="https://www.nobroker.in/locality-iq/images/Download_on_the_App_Store_Badge-1.png" alt="" /></a>
                    </div>
                  </div>
          </div>
           
        </section>
    </>
  )
}

export default Blog
