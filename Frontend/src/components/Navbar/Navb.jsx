import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "../../style/nav.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown"; // Import Dropdown from Bootstrap
import {
  FaBars,
  FaChevronDown,
  FaChevronRight,
  FaChevronUp,
} from "react-icons/fa"; // Import the hamburger icon
import logo from "../../assets/images/post-01.png";
import rent from "../../assets/images/rent.png";

import flogo from "../../assets/images/flogo.png";
import tlogo from "../../assets/images/tlogo.png";
import glogo from "../../assets/images/glogo.png";
import neww from "../../assets/images/neww.png";
import house from "../../assets/small_nav_images/house.png";
import userss from "../../assets/small_nav_images/userss.png";
import painting from "../../assets/small_nav_images/painting.png";
import packers from "../../assets/small_nav_images/packers.png";
import homeCleaning from "../../assets/small_nav_images/homeCleaning.png";
import acRepair from "../../assets/small_nav_images/acRepair.png";
import electrician from "../../assets/small_nav_images/electrician.png";
import carpentry from "../../assets/small_nav_images/carpentry.png";
import plumbing from "../../assets/small_nav_images/plumbing.png";
import homeRenovation from "../../assets/small_nav_images/homeRenovation.png";
import walletSummary from "../../assets/small_nav_images/walletSummary.png";
import rewards from "../../assets/small_nav_images/rewards.png";
import forOwner from "../../assets/small_nav_images/forOwner.png";
import forSellers from "../../assets/small_nav_images/forSellers.png";
import forTenants from "../../assets/small_nav_images/forTenants.png";
import forBuyers from "../../assets/small_nav_images/forBuyersc.png";
import forOwnerc from "../../assets/small_nav_images/forOwnerc.png";
import forSellersc from "../../assets/small_nav_images/forSellersc.png";
import forTenantsc from "../../assets/small_nav_images/forTenantsc.png";
import forBuyersc from "../../assets/small_nav_images/forBuyersc.png";
import packers1 from "../../assets/small_nav_images/packers1.png";
import painting1 from "../../assets/small_nav_images/painting1.png";
import cleaning from "../../assets/small_nav_images/cleaning.png";
import interiors from "../../assets/small_nav_images/interiors.png";
import furniture from "../../assets/small_nav_images/furniture.png";
import payYourRent from "../../assets/small_nav_images/payYourRent.png";
import depositPayment from "../../assets/small_nav_images/depositPayment.png";
import maintenancePayment from "../../assets/small_nav_images/maintenancePayment.png";
import billPayments from "../../assets/small_nav_images/billPayments.png";
import rentalAgreement from "../../assets/small_nav_images/rentalAgreement.png";
import policeIntimation from "../../assets/small_nav_images/policeIntimation.png";
import tenantVerification from "../../assets/small_nav_images/tenantVerification.png";
import propertyLegalAssistance from "../../assets/small_nav_images/propertyLegalAssistance.png";
import homeLoan from "../../assets/small_nav_images/homeLoan.png";
import homeDepositLoan from "../../assets/small_nav_images/homeDepositLoan.png";
import knowYourRent from "../../assets/small_nav_images/knowYourRent.png";
import createRentReceipts from "../../assets/small_nav_images/createRentReceipts.png";
import clickEarn from "../../assets/small_nav_images/click&Earn.png";
import supportTopics from "../../assets/small_nav_images/supportTopics.png";
import blog from "../../assets/small_nav_images/blog.png";
import feedback from "../../assets/small_nav_images/feedback.png";
import aboutUs from "../../assets/small_nav_images/aboutUs.png";
import chatWithUs from "../../assets/small_nav_images/chatWithUs.png";
import Modal from "../Modal";
import LoginSignup from "../LoginSignup";
import { NonceProvider } from "react-select";
import { BiBrightness } from "react-icons/bi";
import suitcase from "../../assets/images/suitcase.png";

function Navb() {
  const location = useLocation();

  // Check if the current route is the home page
  const isHomePage = location.pathname === "/";

  const [user, setUser] = useState(false);
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [showResidentialPlans, setShowResidentialPlans] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showListing, setShowListing] = useState(false);

  const [showCommercialPlans, setShowCommercialPlans] = useState(false);
  const [showContactUs, setShowContactUs] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [showSmallResidentialPlans, setShowSmallResidentialPlans] =
    useState(false);
  const [showSmallCommercialPlans, setShowSmallCommercialPlans] =
    useState(false);
  const [showHomeServices, setshowHomeServices] = useState(false);
  const [showNESTATEPay, setshowNESTATEPay] = useState(false);
  const [showLegal, setShowLegal] = useState(false);
  const [showUtilities, setShowUtilities] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const [isLoginSignupModelOpen, setLoginSignupModelOpen] = useState(false);

  const videoSrc =
    "blob:https://www.NESTATE.in/cbd719f6-bc72-4621-8b6e-680031d0f281";

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  const toggleShowUserOptions = () => {
    setShowUserOptions(!showUserOptions);
  };

  const toggleResidentialPlans = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowResidentialPlans(!showResidentialPlans);
  };

  const toggleDashboard = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowDashboard(!showDashboard);
  };

  const toggleListing = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowListing(!showListing);
  };

  const toggleCommercialPlans = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowCommercialPlans(!showCommercialPlans);
  };

  const toggleContactUs = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setShowContactUs(!showContactUs);
  };

  const handleWalletToggle = () => {
    setShowWallet(!showWallet);
  };

  const handleResidentialToggle = () => {
    setShowSmallResidentialPlans(!showSmallResidentialPlans);
  };
  const handleCommercialToggle = () => {
    setShowSmallCommercialPlans(!showSmallCommercialPlans);
  };
  const handleHomeToggle = () => {
    setshowHomeServices(!showHomeServices);
  };
  const handleNESTATEToggle = () => {
    setshowNESTATEPay(!showNESTATEPay);
  };
  const handleLegalToggle = () => {
    setShowLegal(!showLegal);
  };
  const handleUtilitiesToggle = () => {
    setShowUtilities(!showUtilities);
  };
  const handleHelpToggle = () => {
    setShowHelp(!showHelp);
  };

  useEffect(() => {
    const nav = document.getElementById("navContainer");
    nav.classList.add("slide-in");
  }, []);

  // Close navbar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside both the nav and toggle button
      if (
        (navRef.current && !navRef.current.contains(event.target)) ||
        (toggleButtonRef.current &&
          !toggleButtonRef.current.contains(event.target))
      ) {
        setShowNav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="d-flex font" style={{}}>
        <Navbar
          user={user}
          expand="lg"
          className="bg-body-tertiary"
          fixed="top"
          style={{ boxShadow: "0 5px 10px rgba(0,0,0,0.1)", height: "70px" }}
        >
          <Container fluid className="">
            {/* Image as Navbar Brand */}
            <Navbar.Brand href="/">
              <img
                src={logo} // Use your imported image here
                alt="Brand Logo"
                width="160" // Adjust width as needed
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Nav
              className="ms-auto my-2 my-lg-0 d-none d-lg-flex justify-content align-items-center"
              style={{ fontSize: "0.8rem" }}
            >
              <Nav.Link
                href="https://travel-website-one-cyan.vercel.app/"
                className="makemytrip"
              >
                <span className="d-flex gap-2 align-items-center border nav-box px-2 py-5">
                  <div className="trip">
                    <img
                      src={suitcase} // Use your imported image here
                      alt="Brand Logo"
                      width="20" // Adjust width as needed
                      className="image-rent"
                      style={{ opacity: "0.3" }} // Adjust value as needed
                    />
                  </div>
                  <div style={{ color: "#424242" }}>|</div>
                  <div className="d-flex flex-column gap-0">
                    <div style={{ color: "#424242", marginBottom: "-4px" }}>
                      My Trips
                    </div>
                    <div className="" style={{ color: "#424242" }}>
                      Manage your booking
                    </div>
                  </div>
                </span>
              </Nav.Link>
              <Nav.Link href="pay-rent">
                <span className="d-flex gap-2 align-items-center border px-2 py-5 nav-box">
                  <div>
                    <img
                      src={rent} // Use your imported image here
                      alt="Brand Logo"
                      width="20" // Adjust width as needed
                      className="image-rent"
                      style={{ filter: "brightness(1)" }} // Adjust value as needed
                    />
                  </div>
                  <div style={{ color: "#424242" }}>|</div>

                  <div style={{ color: "#424242" }}>Pay Rent</div>
                </span>
              </Nav.Link>
              <Nav.Link href="post-property" className="">
                <button
                  className="nav-property px-2 py-2.5"
                  style={{ backgroundColor: "#004953", borderRadius: "1px" }}
                >
                  <span>For Property Owners</span>
                </button>
              </Nav.Link>

              {user ? (
                <>
                  <Nav.Link href="../../pages/PostProperty">
                    <img
                      src={neww} // Use your imported image here
                      alt="Property Icon"
                      width="40" // Adjust width as needed
                      height="auto" // Maintain aspect ratio
                    />
                  </Nav.Link>
                  <Dropdown align="end" onToggle={toggleShowUserOptions}>
                    <Dropdown.Toggle
                      variant="link"
                      id="dropdown-basic"
                      className="p-0 text-black no-arrow " // Text color black and no padding
                    >
                      <span className="d-flex align-items-center">
                        <i class="fa-regular fa-circle-user"></i> {user.name}{" "}
                        {showUserOptions ? (
                          <FaChevronUp className="ms-1" />
                        ) : (
                          <FaChevronDown className="ms-1" />
                        )}
                      </span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu border-1">
                      <Dropdown.Item
                        href="#action3"
                        className="text-dark text-decoration-none"
                      >
                        Profile
                      </Dropdown.Item>

                      <Dropdown.Item
                        href="#action3"
                        className="text-dark text-decoration-none"
                      >
                        My Chats
                      </Dropdown.Item>

                      <Dropdown.Item
                        className="text-dark text-decoration-none "
                        onClick={toggleResidentialPlans}
                        style={{ cursor: "pointer" }}
                      >
                        <span className="d-flex align-items-center">
                          My Residential Plans
                          {showResidentialPlans ? (
                            <FaChevronUp className="ms-5" />
                          ) : (
                            <FaChevronDown className="ms-5" />
                          )}
                        </span>

                        {showResidentialPlans && (
                          <li>
                            <ul className="custom-dropdown-ul">
                              <Nav.Link>Tenant Plan</Nav.Link>
                              <Nav.Link>Owner Plan</Nav.Link>
                              <Nav.Link>Buyer Plan</Nav.Link>
                              <Nav.Link>Seller Plans</Nav.Link>
                            </ul>
                          </li>
                        )}
                      </Dropdown.Item>

                      <Dropdown.Item
                        className="text-dark text-decoration-none "
                        onClick={toggleCommercialPlans}
                        style={{ cursor: "pointer" }}
                      >
                        <span className="d-flex align-items-center">
                          My Commercial Plan
                          {showCommercialPlans ? (
                            <FaChevronUp className="ms-5" />
                          ) : (
                            <FaChevronDown className="ms-5" />
                          )}
                        </span>

                        {showCommercialPlans && (
                          <li>
                            <ul className="custom-dropdown-ul">
                              <Nav.Link>Tenant Plan</Nav.Link>
                              <Nav.Link>Owner Plan</Nav.Link>
                              <Nav.Link>Buyer Plan</Nav.Link>
                              <Nav.Link>Seller Plans</Nav.Link>
                            </ul>
                          </li>
                        )}
                      </Dropdown.Item>

                      <Dropdown.Item
                        className="text-dark text-decoration-none "
                        onClick={toggleDashboard}
                        style={{ cursor: "pointer" }}
                      >
                        <span className="d-flex align-items-center">
                          My Dashboard
                          {showDashboard ? (
                            <FaChevronUp className="ms-5" />
                          ) : (
                            <FaChevronDown className="ms-5" />
                          )}
                        </span>

                        {showDashboard && (
                          <li>
                            <ul className="custom-dropdown-ul">
                              <Nav.Link>Tenant Plan</Nav.Link>
                              <Nav.Link>Owner Plan</Nav.Link>
                              <Nav.Link>Buyer Plan</Nav.Link>
                              <Nav.Link>Seller Plans</Nav.Link>
                            </ul>
                          </li>
                        )}
                      </Dropdown.Item>

                      <Dropdown.Item
                        className="text-dark text-decoration-none "
                        onClick={toggleListing}
                        style={{ cursor: "pointer" }}
                      >
                        <span className="d-flex align-items-center">
                          My Listing
                          {showListing ? (
                            <FaChevronUp className="ms-5" />
                          ) : (
                            <FaChevronDown className="ms-5" />
                          )}
                        </span>

                        {showListing && (
                          <li>
                            <ul className="custom-dropdown-ul">
                              <Nav.Link>Tenant Plan</Nav.Link>
                              <Nav.Link>Owner Plan</Nav.Link>
                              <Nav.Link>Buyer Plan</Nav.Link>
                              <Nav.Link>Seller Plans</Nav.Link>
                            </ul>
                          </li>
                        )}
                      </Dropdown.Item>

                      <Dropdown.Item
                        href="#action3"
                        className="text-dark text-decoration-none"
                      >
                        My Rental Adreements
                      </Dropdown.Item>

                      <Dropdown.Item
                        href="#action3"
                        className="text-dark text-decoration-none"
                      >
                        Sign Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Nav.Link href="#" disabled>
                    |
                  </Nav.Link>
                  <Nav.Link href="#">
                    <i className="fa-solid fa-bell"></i>
                  </Nav.Link>

                  <Nav.Link href="#" disabled>
                    |
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    className="nav-menu"
                    onClick={() => setLoginSignupModelOpen(true)}
                  >
                    Sign Up
                  </Nav.Link>
                  <Nav.Link className="nav-menu" href="#" disabled>
                    |
                  </Nav.Link>
                  <Nav.Link
                    className="nav-menu"
                    onClick={() => setLoginSignupModelOpen(true)}
                  >
                    Log In
                  </Nav.Link>
                  <Nav.Link className="nav-menu" href="#" disabled>
                    |
                  </Nav.Link>
                  <Modal
                    isOpen={isLoginSignupModelOpen}
                    onClose={() => setLoginSignupModelOpen(false)}
                  >
                    <LoginSignup />
                  </Modal>
                </>
              )}

              {/* Dropdown Menu with Hamburger Icon */}
              <Dropdown align="end">
                {/* Aligns the dropdown items to the right */}
                <Dropdown.Toggle
                  variant="link"
                  id="dropdown-basic"
                  className="p-0 text-black no-arrow" // Text color black and no padding
                  style={{ fontSize: "15px", textDecoration: "None" }} // Ensures normal font size
                >
                  <span className="d-flex align-items-center font-light nav-menu gap-1">
                    <FaBars /> Menu{" "}
                  </span>
                </Dropdown.Toggle>

                {/* Dropdown menu items */}
                <Dropdown.Menu className="dropdown-menu custom-scroll">
                  <Dropdown.Item
                    href="/post-property"
                    className="text-decoration-none menu-dropdown"
                  >
                    <Link
                      to="/post-property"
                      className="menu-dropdown text-decoration-none"
                    >
                      Post Your Property
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href="/rental-agreement"
                    className="menu-dropdown text-decoration-none"
                    style={{ fontSize: "normal" }} // Ensures normal font size
                  >
                    <Link
                      to="/rental-agreement"
                      className="menu-dropdown text-decoration-none"
                      style={{ fontSize: "normal" }} // Ensures normal font size
                    >
                      Rental Agreement
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href="/painting-and-cleaning"
                    className="menu-dropdown text-decoration-none"
                    style={{ fontSize: "normal" }} // Ensures normal font size
                  >
                    <Link
                      to="/painting-and-cleaning"
                      className="menu-dropdown text-decoration-none"
                      style={{ fontSize: "normal" }} // Ensures normal font size
                    >
                      Painting & Cleaning
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href="/"
                    className="menu-dropdown text-decoration-none"
                  >
                    <Link
                      to="/packers-and-movers"
                      className="menu-dropdown text-decoration-none"
                      style={{ fontSize: "normal" }} // Ensures normal font size
                    >
                      Packers and Movers
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href="/refer-and-earn"
                    className="menu-dropdown text-decoration-none"
                  >
                    <Link
                      to="/refer-and-earn"
                      className="menu-dropdown text-decoration-none"
                      style={{ fontSize: "normal" }} // Ensures normal font size
                    >
                      Refer & Earn
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href="/rent-receipt"
                    className="menu-dropdown text-decoration-none"
                  >
                    <Link
                      to="/rent-receipt"
                      className="menu-dropdown text-decoration-none"
                      style={{ fontSize: "normal" }}
                    >
                      Rent Receipts
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href="/"
                    className="menu-dropdown text-decoration-none"
                  >
                    <Link
                      to="/tenant-plan"
                      className="menu-dropdown text-decoration-none"
                      style={{ fontSize: "normal" }}
                    >
                      Tenant Plans
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href="/owner-plan"
                    className="menu-dropdown text-decoration-none"
                  >
                    <Link
                      to="/owner-plan"
                      className="menu-dropdown text-decoration-none"
                      style={{ fontSize: "normal" }}
                    >
                      Owner Plans
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href="/buyers-plan"
                    className="menu-dropdown text-decoration-none"
                  >
                    <Link
                      to="/buyers-plan"
                      className="menu-dropdown text-decoration-none"
                      style={{ fontSize: "normal" }}
                    >
                      Buyer Plans
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href="/seller-plan"
                    className="menu-dropdown text-decoration-none"
                  >
                    <Link
                      to="/seller-plan"
                      className="menu-dropdown text-decoration-none"
                      style={{ fontSize: "normal" }}
                    >
                      Seller Plans
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href=""
                    className="menu-dropdown text-decoration-none"
                    onClick={toggleCommercialPlans}
                    style={{ cursor: "pointer", fontSize: "normal" }}
                  >
                    <span className="d-flex align-items-center">
                      Commercial Plans
                      {showCommercialPlans ? (
                        <FaChevronUp className="ms-5" />
                      ) : (
                        <FaChevronDown className="ms-5" />
                      )}
                    </span>
                  </Dropdown.Item>

                  {showCommercialPlans && (
                    <ul className="custom-dropdown-ul">
                      <li>
                        <Nav.Link href="/tenant-plan">Tenant Plan</Nav.Link>
                      </li>
                      <li>
                        <Nav.Link href="/owner-plan">Owner Plan</Nav.Link>
                      </li>
                      <li>
                        <Nav.Link href="/buyer-plan">Buyer Plan</Nav.Link>
                      </li>
                      <li>
                        <Nav.Link href="/seller-plan">Seller Plans</Nav.Link>
                      </li>
                    </ul>
                  )}

                  <Dropdown.Item
                    href="/careers"
                    className="menu-dropdown text-decoration-none"
                  >
                    <Link
                      to="/careers"
                      className="menu-dropdown text-decoration-none"
                      style={{ fontSize: "normal" }}
                    >
                      Careers
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href="/corporate-enquiry"
                    className="menu-dropdown text-decoration-none"
                  >
                    <Link
                      to="/corporate-enquiry"
                      className="menu-dropdown text-decoration-none"
                      style={{ fontSize: "normal" }}
                    >
                      Corporate Enquiry
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href="/"
                    className="menu-dropdown text-decoration-none"
                  >
                    <Link
                      to="/blog"
                      className="menu-dropdown text-decoration-none"
                      style={{ fontSize: "normal" }}
                    >
                      Blog
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href="/"
                    className="menu-dropdown text-decoration-none"
                  >
                    <Link
                      to="/"
                      className="menu-dropdown text-decoration-none"
                      style={{ fontSize: "normal" }}
                    >
                      NESTATE Support
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item
                    href=""
                    className="menu-dropdown text-decoration-none"
                    onClick={toggleContactUs}
                    style={{ fontSize: "normal" }} // Ensures normal font size
                  >
                    <span className="d-flex align-items-center">
                      Contact Us
                      {showContactUs ? (
                        <FaChevronUp className="ms-5" />
                      ) : (
                        <FaChevronDown className="ms-5" />
                      )}
                    </span>
                  </Dropdown.Item>

                  {showContactUs && (
                    <>
                      <ul className="custom-dropdown-ul">
                        <div className="contact-menu">
                          <li>
                            Email <br />
                            <a href="">hello@noroker.in</a>
                          </li>
                        </div>

                        <div className="d-flex justify-content-center mx-4">
                          <Nav.Link href="#">
                            <img
                              src={flogo} // Use your imported image here
                              alt="Rent Icon"
                              width="40" // Adjust width as needed
                              height="auto" // Maintain aspect ratio
                              padding="0"
                            />
                          </Nav.Link>

                          <Nav.Link href="#">
                            <img
                              src={tlogo} // Use your imported image here
                              alt="Rent Icon"
                              width="40" // Adjust width as needed
                              height="auto" // Maintain aspect ratio
                              padding="0"
                            />
                          </Nav.Link>

                          <Nav.Link href="#">
                            <img
                              src={glogo} // Use your imported image here
                              alt="Rent Icon"
                              width="40" // Adjust width as needed
                              height="auto" // Maintain aspect ratio
                              padding="0"
                            />
                          </Nav.Link>
                        </div>
                      </ul>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>

        <Navbar
          ref={navRef}
          user={user}
          expand="lg"
          className="bg-body-tertiary d-flex d-lg-none"
          fixed="top"
        >
          <Container fluid>
            <button
              onClick={toggleNav}
              className="text-2xl p-2 bg-gray-100 rounded-md shadow-md lg:hidden font-light"
              style={{ fontSize: "15px", fontFamily: "light" }} // Ensures normal font size
            >
              {showNav ? "✕" : "☰"}
            </button>
            <Navbar.Brand href="/" className="mx-auto align-middle">
              <img
                src={logo} // Use your imported image here
                alt="Brand Logo"
                width="160" // Adjust width as needed
              />
            </Navbar.Brand>

            {isHomePage ? (
              // Options for the home page
              <>
                {/* Dropdown Menu */}

                <div
                  className={`transform transition-transform duration-300 ease-in-out ${
                    showNav ? "translate-x-0" : "-translate-x-full"
                  } fixed top-0 left-0 w-3/4 h-full bg-white z-50  lg:hidden`}
                >
                  <div id="navContainer" className="nav-container">
                    <Nav
                      className="me-auto d-lg-none custom-scroll"
                      style={{ fontSize: "0.9rem" }}
                    >
                      <div
                        className="container-fluid"
                        style={{
                          backgroundColor: "red",
                          fontSize: "1.2rem ",
                          padding: "5px",
                        }}
                      >
                        <Nav.Link
                          href="LoginSignUp"
                          style={{ color: "white" }}
                          className="d-flex justify-content-between "
                        >
                          <span style={{ marginBottom: "10px" }}>
                            <i className="fa-regular fa-circle-user mx-2"></i>
                            Login/Sign Up
                          </span>
                          <FaChevronRight />
                        </Nav.Link>

                        <Nav.Link
                          href="post-property"
                          style={{
                            backgroundColor: "white",
                            fontSize: "0.8rem",
                            marginLeft: "5px",
                          }}
                          className="d-flex justify-content-between align-items-center border rounded"
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src={house}
                              alt="House Icon"
                              width="40"
                              height="auto"
                              style={{ marginRight: "8px" }}
                            />
                            <span>
                              Post your property
                              <span
                                style={{
                                  backgroundColor: "black",
                                  color: "white",
                                  padding: "0 5px",
                                  marginLeft: "5px",
                                }}
                              >
                                FREE
                              </span>
                            </span>
                          </div>
                          <FaChevronRight />
                        </Nav.Link>

                        <br />
                      </div>
                      <div className="d-flex justify-content-between align-items-center my-3 mx-3">
                        <span style={{ fontSize: "1.2rem" }}>
                          Because{" "}
                          <span style={{ color: "green" }}> Your Home</span>
                          <br /> Deserves The Best.
                        </span>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="text-end">
                            <div className="d-flex flex-column align-items-end">
                              <img
                                src={userss}
                                alt="Users Icon"
                                width="30"
                                height="auto"
                              />
                              <div
                                className="text-right"
                                style={{ fontSize: "0.6rem" }}
                              >
                                <b>3Lacs+</b> Services <br />
                                booked in <b>last 3 months</b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <video
                            className="object-cover w-full rounded-0.8p"
                            type="video/mp4"
                            autoPlay
                            loop
                            playsInline
                            src="blob:https://www.NESTATE.in/cbd719f6-bc72-4621-8b6e-680031d0f281"
                            style={{
                              transition: "0.5s",
                              height: "12rem",
                              opacity: "1",
                            }}
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      </div>
                      <div>
                        <div
                          className="d-flex align-items-center gap-2 text-center"
                          style={{ fontSize: "0.8rem" }}
                        >
                          <Nav.Link
                            href="#"
                            className="d-flex flex-column align-items-center gap-2"
                          >
                            <img
                              src={painting}
                              alt="Painting Icon"
                              width="50px"
                              height="auto"
                              className="m-0"
                            />
                            <span>Painting</span>
                          </Nav.Link>
                          <Nav.Link
                            href="#"
                            className="d-flex flex-column align-items-center gap-2"
                          >
                            <img
                              src={packers}
                              alt="Packers & Movers Icon"
                              width="50px"
                              height="auto"
                              className="m-0"
                            />
                            <span>Packers & Movers</span>
                          </Nav.Link>
                          <Nav.Link
                            href="#"
                            className="d-flex flex-column align-items-center gap-2"
                          >
                            <img
                              src={homeCleaning}
                              alt="Home Cleaning Icon"
                              width="50px"
                              height="auto"
                              className="m-0"
                            />
                            <span>Home Cleaning</span>
                          </Nav.Link>
                          <Nav.Link
                            href="#"
                            className="d-flex flex-column align-items-center gap-2"
                          >
                            <img
                              src={acRepair}
                              alt="AC Repair Icon"
                              width="50px"
                              height="auto"
                              className="m-0"
                            />
                            <span>AC Repair</span>
                          </Nav.Link>
                        </div>

                        {/* Toggle content appears above the button */}
                        {showServices && (
                          <div
                            className="d-flex align-items-center gap-5 mx-5 mt-3"
                            style={{ fontSize: "0.8rem" }}
                          >
                            <Nav.Link
                              href="#"
                              className="d-flex flex-column align-items-center gap-2 mx-4"
                            >
                              <img
                                src={electrician}
                                alt="Electrician Icon"
                                width="100"
                                height="auto"
                              />
                              <span>Electrician</span>
                            </Nav.Link>
                            <Nav.Link
                              href="#"
                              className="d-flex flex-column align-items-center gap-2 mx-4"
                            >
                              <img
                                src={carpentry}
                                alt="Carpentry Icon"
                                width="150"
                                height="auto"
                              />
                              <span>Carpentry</span>
                            </Nav.Link>
                            <Nav.Link
                              href="#"
                              className="d-flex flex-column align-items-center gap-2 mx-4"
                            >
                              <img
                                src={plumbing}
                                alt="Plumbing Icon"
                                width="150"
                                height="auto"
                              />
                              <span>Plumbing</span>
                            </Nav.Link>
                            <Nav.Link
                              href="#"
                              className="d-flex flex-column align-items-center gap-2 mx-4"
                            >
                              <img
                                src={homeRenovation}
                                alt="Home Renovation Icon"
                                width="150"
                                height="auto"
                              />
                              <span>Home Renovation</span>
                            </Nav.Link>
                          </div>
                        )}

                        {/* Button for the content */}
                        <div className="d-flex justify-content-center mt-3">
                          <button
                            className="nav-property w-100"
                            onClick={toggleServices}
                          >
                            <span className="d-flex justify-content-center align-items-center">
                              {showServices ? "View Less" : "+4 More Services"}
                              {showServices ? (
                                <FaChevronUp className="ms-2" />
                              ) : (
                                <FaChevronDown className="ms-2" />
                              )}
                            </span>
                          </button>
                        </div>
                      </div>

                      <div
                        className="w-90 mx-4 my-2 pb-2 drop border-bottom border-white"
                        onClick={handleWalletToggle}
                      >
                        <div
                          className="d-flex justify-content-between align-items-center w-100"
                          style={{ cursor: "pointer" }}
                        >
                          <b> NBcash Wallet</b>
                          {showWallet ? (
                            <FaChevronUp className="ms-auto" />
                          ) : (
                            <FaChevronDown className="ms-auto" />
                          )}
                        </div>
                        {showWallet && (
                          <li>
                            <ul className="custom-dropdown-ul">
                              <Nav.Link>
                                <span className="d-flex align-items-center">
                                  <img
                                    src={walletSummary}
                                    alt="wallet icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Wallet Summary
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                <span className="d-flex align-items-center">
                                  <img
                                    src={rewards}
                                    alt="rewards Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Rewards
                                </span>
                              </Nav.Link>
                            </ul>
                          </li>
                        )}
                      </div>

                      <div
                        className="w-90 mx-4 my-2 pb-2 drop border-bottom border-white"
                        onClick={handleResidentialToggle}
                      >
                        <div
                          className="d-flex justify-content-between align-items-center w-100"
                          style={{ cursor: "pointer" }}
                        >
                          <b> Residential Plans</b>
                          {showSmallResidentialPlans ? (
                            <FaChevronUp className="ms-auto" />
                          ) : (
                            <FaChevronDown className="ms-auto" />
                          )}
                        </div>
                        {showSmallResidentialPlans && (
                          <li>
                            <ul className="custom-dropdown-ul">
                              <Nav.Link>
                                <span className="d-flex align-items-center">
                                  <img
                                    src={forOwner}
                                    alt="House Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  For Owner
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                <span className="d-flex align-items-center">
                                  <img
                                    src={forSellers}
                                    alt="House Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  For Sellers
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={forTenants}
                                    alt="key Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  For Tenants
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={forBuyers}
                                    alt="House Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  For Buyers
                                </span>
                              </Nav.Link>
                            </ul>
                          </li>
                        )}
                      </div>

                      <div
                        className="w-90 mx-4 my-2 pb-2 drop border-bottom border-white"
                        onClick={handleCommercialToggle}
                      >
                        <div
                          className="d-flex justify-content-between align-items-center w-100"
                          style={{ cursor: "pointer" }}
                        >
                          <b> Commercial Plans</b>
                          {showSmallCommercialPlans ? (
                            <FaChevronUp className="ms-auto" />
                          ) : (
                            <FaChevronDown className="ms-auto" />
                          )}
                        </div>
                        {showSmallCommercialPlans && (
                          <li>
                            <ul className="custom-dropdown-ul">
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={forOwnerc}
                                    alt="House Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  For Owner
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={forSellersc}
                                    alt="House Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  For Sellers
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={forTenantsc}
                                    alt="House Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  For Tenants
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={forBuyersc}
                                    alt="House Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  For Buyers
                                </span>
                              </Nav.Link>
                            </ul>
                          </li>
                        )}
                      </div>

                      <div
                        className="w-90 mx-4 my-2 pb-2 drop border-bottom border-white"
                        onClick={handleHomeToggle}
                      >
                        <div
                          className="d-flex justify-content-between align-items-center w-100"
                          style={{ cursor: "pointer" }}
                        >
                          <b> Home Services</b>
                          {showHomeServices ? (
                            <FaChevronUp className="ms-auto" />
                          ) : (
                            <FaChevronDown className="ms-auto" />
                          )}
                        </div>
                        {showHomeServices && (
                          <li>
                            <ul className="custom-dropdown-ul">
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={packers1}
                                    alt="packers Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Packers and Movers
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={painting1}
                                    alt="painting Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Painting
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={cleaning}
                                    alt="Cleaning Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Cleaning
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={interiors}
                                    alt="Interior Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Interiors
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={furniture}
                                    alt="Furniture Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Furniture
                                </span>
                              </Nav.Link>
                            </ul>
                          </li>
                        )}
                      </div>

                      <div
                        className="w-90 mx-4 my-2 pb-2 drop border-bottom border-white"
                        onClick={handleNESTATEToggle}
                      >
                        <div
                          className="d-flex justify-content-between align-items-center w-100"
                          style={{ cursor: "pointer" }}
                        >
                          <b> NESTATE Pay</b>
                          {showNESTATEPay ? (
                            <FaChevronUp className="ms-auto" />
                          ) : (
                            <FaChevronDown className="ms-auto" />
                          )}
                        </div>

                        {showNESTATEPay && (
                          <li>
                            <ul className="custom-dropdown-ul">
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={payYourRent}
                                    alt="Pay Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Pay Your Rent
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={depositPayment}
                                    alt="deposit Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Deposit Payment
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={maintenancePayment}
                                    alt="Bill Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Maintenance Payments
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={billPayments}
                                    alt="Bill Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Bill Payments
                                </span>
                              </Nav.Link>
                            </ul>
                          </li>
                        )}
                      </div>

                      <div
                        className="w-90 mx-4 my-2 pb-2 drop border-bottom border-white"
                        onClick={handleLegalToggle}
                      >
                        <div
                          className="d-flex justify-content-between align-items-center w-100"
                          style={{ cursor: "pointer" }}
                        >
                          <b> Legal Assistance & Loan</b>
                          {showLegal ? <FaChevronUp /> : <FaChevronDown />}
                        </div>

                        {showLegal && (
                          <li>
                            <ul className="custom-dropdown-ul">
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={rentalAgreement}
                                    alt="Agreement Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Rental Agreement
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={policeIntimation}
                                    alt="police Intimation Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Police Intimation
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={tenantVerification}
                                    alt="House Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Tenant Verification
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={propertyLegalAssistance}
                                    alt="LegalAssistance Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Property Legal Assistance
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={homeLoan}
                                    alt="House Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Home Loan
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={homeDepositLoan}
                                    alt="House Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Home Deposit Loan
                                </span>
                              </Nav.Link>
                            </ul>
                          </li>
                        )}
                      </div>

                      <div
                        className="w-90 mx-4 my-2 pb-2 drop border-bottom border-white"
                        onClick={handleUtilitiesToggle}
                      >
                        <div
                          className="d-flex justify-content-between align-items-center w-100"
                          style={{ cursor: "pointer" }}
                        >
                          <b> Utilities</b>
                          {showUtilities ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        {showUtilities && (
                          <li>
                            <ul className="custom-dropdown-ul">
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={knowYourRent}
                                    alt="KnowYourRent Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Know Your Rent
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={createRentReceipts}
                                    alt="createRentReceipts Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Create Rent Receipts
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={clickEarn}
                                    alt="Click & Earn Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Click & Earn
                                </span>
                              </Nav.Link>
                            </ul>
                          </li>
                        )}
                      </div>

                      <div
                        className="w-90 mx-4 my-2 pb-2 drop border-bottom border-white"
                        onClick={handleHelpToggle}
                      >
                        <div
                          className="d-flex justify-content-between align-items-center w-100"
                          style={{ cursor: "pointer" }}
                        >
                          <b>Help & Support</b>
                          {showHelp ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                        {showHelp && (
                          <li>
                            <ul className="custom-dropdown-ul">
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={supportTopics}
                                    alt="support Topics Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Support Topics
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={blog}
                                    alt="Blog Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Blog
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={feedback}
                                    alt="Feedback Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Feedback
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={aboutUs}
                                    alt="About Us Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  About Us
                                </span>
                              </Nav.Link>
                              <Nav.Link>
                                {" "}
                                <span className="d-flex align-items-center">
                                  <img
                                    src={chatWithUs}
                                    alt="Chat Icon"
                                    width="40"
                                    height="auto"
                                    style={{ marginRight: "8px" }}
                                  />
                                  Chat With Us
                                </span>
                              </Nav.Link>
                            </ul>
                          </li>
                        )}
                      </div>
                    </Nav>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Nav>
                  <div
                    ref={navRef}
                    className={`transform transition-transform duration-300 ease-in-out ${
                      showNav
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-4 opacity-0"
                    } 
                    absolute top-full left-0 w-full pl-4 bg-white z-50 shadow-lg rounded-md lg:hidden`}
                  >
                    <div id="navContainer" className="nav-container">
                      <Nav.Link href="/">NESTATE Home</Nav.Link>
                      <Nav.Link href="/LoginSignup">Login</Nav.Link>
                      <Nav.Link href="/LoginSignup">SignUp</Nav.Link>
                    </div>
                  </div>
                </Nav>
              </>
            )}
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Navb;
