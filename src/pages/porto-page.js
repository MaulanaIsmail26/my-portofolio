/* eslint-disable no-unused-vars */
import React from "react";
import "./../styles/App.css";
import { Link } from "react-router-dom";

// IMPORT MATERIAL UI
// material ui icon
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SendIcon from "@mui/icons-material/Send";
import ContactsIcon from "@mui/icons-material/Contacts";

export default function PortoPage() {
  const [about, setAbout] = React.useState(true);
  const [resume, setResume] = React.useState(false);

  return (
    <div id="portoPage">
      <div className="container-fluid mainContainer d-flex justify-content-center clearfix">
        <div className="container-xxl secondContainer">
          <div className="row">
            {/* SIDE BAR */}
            <div className="col-xl-3 sidebar">
              <div className="card">
                {/* PROFILE SECTION */}
                <div className="profile">
                  {/* photo profile */}
                  <div className="profilePicture">
                    <img
                      src={require("./../asset/images/profile-picture-v1.webp")}
                      class="mx-auto d-block"
                      alt="profile_picture"
                    ></img>
                  </div>

                  {/* name and job */}
                  <div className="infoPersonal">
                    <h1 className="text-sm-center name">Maulana Ismail</h1>
                    <p className="mx-auto title">Fullstack Web Developer</p>
                  </div>
                </div>

                {/* CONTACT SECTION */}
                <div className="contact">
                  {/* email */}
                  <div className="row" style={{ marginBottom: "30px" }}>
                    <div className="col-3">
                      <div className="iconBox">
                        <MailOutlineIcon className="iconContact" />
                      </div>
                    </div>
                    <div className="col-9 ps-1">
                      <div>
                        <p className="title">EMAIL</p>
                        <Link
                          to="mailto:maulanaismail3466@gmail.com"
                          className="subTitle"
                        >
                          maulanaismail3466@gmail.com
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* phone number */}
                  <div className="row mb-3">
                    <div className="col-3">
                      <div className="iconBox">
                        <SmartphoneIcon className="iconContact" />
                      </div>
                    </div>
                    <div className="col-9 ps-1">
                      <div>
                        <p className="title">PHONE</p>
                        <p className="subTitle">+62 851 5784 4290</p>
                      </div>
                    </div>
                  </div>

                  {/* linked in */}
                  <div className="row" style={{ marginBottom: "30px" }}>
                    <div className="col-3">
                      <div className="iconBox">
                        <LinkedInIcon className="iconContact" />
                      </div>
                    </div>
                    <div className="col-9 ps-1">
                      <div>
                        <p className="title">LINKED IN</p>
                        <Link
                          to="https://www.linkedin.com/in/maulana-ismail/"
                          target="_blank"
                          className="subTitle"
                        >
                          Maulana Ismail
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* github */}
                  <div className="row" style={{ marginBottom: "30px" }}>
                    <div className="col-3">
                      <div className="iconBox">
                        <GitHubIcon className="iconContact" />
                      </div>
                    </div>
                    <div className="col-9 ps-1">
                      <div>
                        <p className="title">GITHUB</p>
                        <Link
                          to="https://github.com/MaulanaIsmail26"
                          target="_blank"
                          className="subTitle"
                        >
                          Maulana Ismail
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* location */}
                  <div className="row mb-3">
                    <div className="col-3 pt-1">
                      <div className="iconBox">
                        <LocationOnOutlinedIcon className="iconContact" />
                      </div>
                    </div>
                    <div className="col-9 ps-1">
                      <div>
                        <p className="title">LOCATION</p>
                        <p className="subTitleLoc">
                          Kab. Sumedang, Jawa Barat, Indonesia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END OF SIDE BAR */}

            {/* MAIN SECTION */}
            <div className="col-xl-9 ps-xl-4 mainContent">
              <div className="card">
                {/* NAVBAR */}
                <div className="navbar d-flex justify-content-end">
                  <ul className="d-flex justify-content-evenly">
                    <li
                      onClick={() => {
                        setAbout(true);
                        setResume(false);
                      }}
                    >
                      About
                    </li>
                    <li
                      onClick={() => {
                        setAbout(false);
                        setResume(true);
                      }}
                    >
                      Resume
                    </li>
                    <li>Skill</li>
                    <li>Portofolio</li>
                    <li>Contact</li>
                  </ul>
                </div>
                {/* END OF NAVBAR */}

                {/* ABOUT */}
                {about && (
                  <div className="about">
                    {/* HEADER */}
                    <div className="header">
                      <p className="title">About Me</p>
                      <div className="underline"></div>
                    </div>

                    {/* CONTENT */}
                    <div className="content">
                      {/* about self */}
                      <div className="aboutSelf">
                        <p>
                          I am a Web Developer from Sumedang, Indonesia. A
                          graduate of a Vocational High School majoring in
                          Computer Network Engineering and having passed the
                          Fullstack Web Developer Bootcamp from Pijar Camp makes
                          me happy to build functional, user-friendly and
                          attractive websites.
                        </p>
                        <p>
                          Enjoys learning new things, able to work individually
                          or in a team, upholds discipline and honesty. I make
                          sure to build your website to the fullest with the
                          same abilities you have, so as to produce a website
                          that attracts attention and is easy to use.
                        </p>
                      </div>

                      {/* MY SERVICE */}
                      <div className="service">
                        {/* SUBTITLE */}
                        <div className="subTitle">
                          <p>My services</p>
                        </div>

                        {/* SERVICE LIST */}
                        <div className="row p-0">
                          {/* FULLSTACK SERVICE */}
                          <div className="col-xl-6 serviceList">
                            <div className="boxService">
                              <div className="row">
                                <div className="col-3 iconFullstack">
                                  <img
                                    src={require("./../asset/images/fullstack dev.png")}
                                    className="mx-auto d-block"
                                    alt="fullstack-icon"
                                  ></img>
                                </div>
                                <div className="col-9 p-0 info">
                                  <h5 className="title">
                                    Fullstack Web Developer
                                  </h5>
                                  <p className="explanation">
                                    Build websites with secure and structured
                                    backend code and an attractive and
                                    user-friendly Frontend.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* FRONTEND SERVICE */}
                          <div className="col-xl-6 serviceList">
                            <div className="boxService">
                              <div className="row">
                                <div className="col-3 iconFrontend">
                                  <img
                                    src={require("./../asset/images/frontend dev.png")}
                                    className="mx-auto d-block"
                                    alt="fullstack-icon"
                                  ></img>
                                </div>
                                <div className="col-9 p-0 info">
                                  <h5 className="title">
                                    Frontend Web Developer
                                  </h5>
                                  <p className="explanation">
                                    Build a website as a Frontend Web Developer
                                    which will ensure an attractive and
                                    user-friendly frontend.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* BACKEND SERVICE */}
                          <div className="col-xl-6 serviceList">
                            <div className="boxService">
                              <div className="row">
                                <div className="col-3 iconBackend">
                                  <img
                                    src={require("./../asset/images/backend dev.png")}
                                    className="mx-auto d-block"
                                    alt="fullstack-icon"
                                  ></img>
                                </div>
                                <div className="col-9 p-0 info">
                                  <h5 className="title">
                                    Backend Web Developer
                                  </h5>
                                  <p className="explanation">
                                    Build websites as a Backend Web Developer
                                    which will ensure secure and structured code
                                    on the backend side.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* END OF ABOUT */}

                {/* RESUME */}
                {resume && (
                  <div className="resume">
                    {/* HEADER */}
                    <div className="header">
                      <p className="title">Resume</p>
                      <div className="underline"></div>
                    </div>

                    {/* CONTENT */}
                    <div className="content">
                      {/* EDUCATION */}
                      <div className="educationList">
                        <div className="row">
                          <div className="col-12">
                            {/* SUBTITLE */}
                            <div className="subTitle d-flex align-items-center">
                              <div className="iconBox">
                                <SchoolOutlinedIcon className="iconEducation" />
                              </div>
                              <p className="my-auto">Education</p>
                            </div>
                            <div className="education">
                              <div class="eduBox">
                                <div className="info">
                                  <p class="schoolName">
                                    {
                                      "Bootcamp by Pijar Camp (Fullstack Web Developer)"
                                    }
                                  </p>
                                  <p className="year">
                                    Nov 2022 - Feb 2023
                                  </p>
                                  <p className="text">
                                    Nemo enims ipsam voluptatem, blanditiis
                                    praesentium voluptum delenit atque corrupti,
                                    quos dolores et quas molestias exceptur.
                                  </p>
                                </div>
                              </div>
                              <div class="eduBox">
                                <div className="info">
                                  <p class="schoolName">
                                    {
                                      "Vocational School (Computer network Engineering)"
                                    }
                                  </p>
                                  <p className="year">2019 - 2022</p>
                                  <p className="text">
                                    Nemo enims ipsam voluptatem, blanditiis
                                    praesentium voluptum delenit atque corrupti,
                                    quos dolores et quas molestias exceptur.
                                  </p>
                                </div>
                              </div>
                              <div class="eduBox">
                                <div className="info">
                                  <p class="schoolName">
                                    Ganeas 1 Junior High School
                                  </p>
                                  <p className="year">2016 - 2019</p>
                                  <p className="text">
                                    Nemo enims ipsam voluptatem, blanditiis
                                    praesentium voluptum delenit atque corrupti,
                                    quos dolores et quas molestias exceptur.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* END OF RESUME */}
              </div>
            </div>
            {/* END OF MAIN SECTION */}
          </div>
        </div>
      </div>
    </div>
  );
}
