/* eslint-disable no-unused-vars */
import React from "react";
import "./../styles/App.css";
import { Link } from "react-router-dom";

// IMPORT COMPONENT
import FoodRecipe from "../components/molecules/porto_foodRecipe";
import LinkPocket from "../components/molecules/porto_linkPocket";
import Blanja from "../components/molecules/porto_blanja";
import Tickitz from "../components/molecules/porto_tickitz";

// IMPORT MATERIAL UI
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SendIcon from "@mui/icons-material/Send";
import ContactsIcon from "@mui/icons-material/Contacts";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function PortoPage() {
  const [about, setAbout] = React.useState(true);
  const [resume, setResume] = React.useState(false);
  const [skill, setSkill] = React.useState(false);
  const [portfolio, setPortfolio] = React.useState(false);
  const [contact, setContact] = React.useState(false);
  const [sentName, setSentName] = React.useState("")

  // HANDLE ADD IS MESSAGE SENT
  const handleMessageSent = () => {
    localStorage.setItem("messageSent", "true");
    localStorage.setItem("sentName", sentName);
  }

  // DELETED LOCAL STORAGE AUTOMATIC 
  React.useEffect(() => {
    const messageSent = localStorage.getItem("messageSent");
    const sentName = localStorage.getItem("sentName");

    if (messageSent && sentName) {
      localStorage.clear();
    }
  });

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
                        setSkill(false);
                        setPortfolio(false);
                        setContact(false);
                      }}
                    >
                      About
                    </li>
                    <li
                      onClick={() => {
                        setAbout(false);
                        setResume(true);
                        setSkill(false);
                        setPortfolio(false);
                        setContact(false);
                      }}
                    >
                      Resume
                    </li>
                    <li
                      onClick={() => {
                        setAbout(false);
                        setResume(false);
                        setSkill(true);
                        setPortfolio(false);
                        setContact(false);
                      }}
                    >
                      Skill
                    </li>
                    <li
                      onClick={() => {
                        setAbout(false);
                        setResume(false);
                        setSkill(false);
                        setPortfolio(true);
                        setContact(false);
                      }}
                    >
                      Portfolio
                    </li>
                    <li
                      onClick={() => {
                        setAbout(false);
                        setResume(false);
                        setSkill(false);
                        setPortfolio(false);
                        setContact(true);
                      }}
                    >
                      Contact
                    </li>
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
                                  <p className="year">Nov 2022 - Feb 2023</p>
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

                {/* SKILL */}
                {skill && (
                  <div className="skill">
                    {/* HEADER */}
                    <div className="header">
                      <p className="title">My Skill</p>
                      <div className="underline"></div>
                    </div>

                    {/* CONTENT */}
                    <div className="content">
                      {/* SKILL */}
                      <div className="row skillList">
                        <div className="col-sm-3 col-6">
                          <div className="iconBox mb-4">
                            <div>
                              <img
                                src={require("./../asset/images/html.webp")}
                                className="mx-auto d-block iconSkill"
                                alt="profile_picture"
                              ></img>
                              <p className="text-center">HTML</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 col-6">
                          <div className="iconBox mb-4">
                            <div>
                              <img
                                src={require("./../asset/images/css.webp")}
                                className="mx-auto d-block iconSkill"
                                alt="profile_picture"
                              ></img>
                              <p className="text-center">CSS</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 col-6">
                          <div className="iconBox mb-4">
                            <div>
                              <img
                                src={require("./../asset/images/js.webp")}
                                className="mx-auto d-block iconSkill"
                                alt="profile_picture"
                              ></img>
                              <p className="text-center">Javascript</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 col-6">
                          <div className="iconBox mb-4">
                            <div>
                              <img
                                src={require("./../asset/images/react.webp")}
                                className="mx-auto d-block iconSkill"
                                alt="profile_picture"
                              ></img>
                              <p className="text-center">React.Js</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 col-6">
                          <div className="iconBox mb-4">
                            <div>
                              <img
                                src={require("./../asset/images/next.webp")}
                                className="mx-auto d-block iconSkill"
                                alt="profile_picture"
                              ></img>
                              <p className="text-center">Next.Js</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 col-6">
                          <div className="iconBox mb-4">
                            <div>
                              <img
                                src={require("./../asset/images/bootstrap.webp")}
                                className="mx-auto d-block iconSkill"
                                alt="profile_picture"
                              ></img>
                              <p className="text-center">Bootstrap 5</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 col-6">
                          <div className="iconBox mb-4">
                            <div>
                              <img
                                src={require("./../asset/images/materialUi.webp")}
                                className="mx-auto d-block iconSkill"
                                alt="profile_picture"
                              ></img>
                              <p className="text-center">Material UI</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 col-6">
                          <div className="iconBox mb-4">
                            <div>
                              <img
                                src={require("./../asset/images/sass.webp")}
                                className="mx-auto d-block iconSkill"
                                alt="profile_picture"
                              ></img>
                              <p className="text-center">Sass</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 col-6">
                          <div className="iconBox mb-4">
                            <div>
                              <img
                                src={require("./../asset/images/nodeJs.webp")}
                                className="mx-auto d-block iconSkill"
                                alt="profile_picture"
                              ></img>
                              <p className="text-center">Node.Js</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 col-6">
                          <div className="iconBox mb-4">
                            <div>
                              <img
                                src={require("./../asset/images/express.webp")}
                                className="mx-auto d-block iconSkill"
                                alt="profile_picture"
                              ></img>
                              <p className="text-center">Express.Js</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 col-6">
                          <div className="iconBox mb-4">
                            <div>
                              <img
                                src={require("./../asset/images/postgreSql.webp")}
                                className="mx-auto d-block iconSkill"
                                alt="profile_picture"
                              ></img>
                              <p className="text-center">PostgreSql</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 col-6">
                          <div className="iconBox mb-4">
                            <div>
                              <img
                                src={require("./../asset/images/typescript.webp")}
                                className="mx-auto d-block iconSkill"
                                alt="profile_picture"
                              ></img>
                              <p className="text-center">Typescript</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* END OF SKILL */}

                {/* PORTFOLIO */}
                {portfolio && (
                  <div className="portofolio">
                    {/* HEADER */}
                    <div className="header">
                      <p className="title">Portfolio</p>
                      <div className="underline"></div>
                    </div>

                    {/* CONTENT */}
                    <div className="content">
                      <div className="row">
                        <div className="col-xl-4 col-12">
                          <FoodRecipe />
                        </div>
                        <div className="col-xl-4 col-12">
                          <LinkPocket />
                        </div>
                        <div className="col-xl-4 col-12">
                          <Blanja />
                        </div>
                        <div className="col-xl-4 col-12">
                          <Tickitz />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* END OF PORTFOLIO */}

                {/* CONTACT */}
                {contact && (
                  <div className="contact">
                    {/* HEADER */}
                    <div className="header">
                      <p className="title">Contact</p>
                      <div className="underline"></div>
                    </div>

                    {/* CONTENT */}
                    <div className="content">
                      {/* CONTACT VIA WHATSAPP AND TELEGRAM */}
                      <div className="row contact-1 m-0">
                        <div className="col-6 whatsapp pe-3">
                          <div className="contactName d-flex justify-content-end">
                            <p>WhatsApp</p>
                            <div className="iconBox">
                              <WhatsAppIcon className="iconContact" />
                            </div>
                          </div>
                        </div>
                        <div className="col-6 telegram ps-3">
                          <div className="contactName d-flex justify-content-start">
                            <div className="iconBox">
                              <TelegramIcon className="iconContact" />
                            </div>
                            <p>Telegram</p>
                          </div>
                        </div>
                        <div className="col-12 number">
                          <p className="mx-auto title mb-0">
                            +62 851 5784 4290
                          </p>
                        </div>
                        <div className="col-6 btn-whatsapp pe-3 d-flex justify-content-end">
                          <Link
                            type="button"
                            className="btn d-flex align-items-center justify-content-center"
                            to="https://wa.me/6285157844290"
                            target="_blank"
                          >
                            Contact me
                            <WhatsAppIcon className="sendIcon" />
                          </Link>
                        </div>
                        <div className="col-6 btn-telegram ps-3 d-flex justify-content-start">
                          <Link
                            type="button"
                            className="btn d-flex align-items-center justify-content-center"
                            to="https://t.me/+6285157844290"
                            target="_blank"
                          >
                            <TelegramIcon className="sendIcon" />
                            Contact me
                          </Link>
                        </div>
                      </div>

                      {/* CONTACT VIA EMAIL AUTOMATIC */}
                      <div className="row contact-2 mx-0">
                        <div className="orText d-flex justify-content-center">
                          <p>Or</p>
                        </div>
                        <div className="p-0 contact-form">
                          <form
                            className="form p-0"
                            action="https://formsubmit.co/maulanaismail3466@gmail.com"
                            method="POST"
                          >
                            <div className="row m-0">
                              <div className="col-xl-6 p-0 pe-xl-3 col-12 mb-xl-0 mb-4">
                                <input
                                  type="text"
                                  name="name"
                                  className="w-100 input"
                                  placeholder="Your Name"
                                  required
                                  onChange={(e) => {
                                    setSentName(e.target.value);
                                  }}
                                />
                              </div>
                              <div className="col-xl-6 p-0 ps-xl-3 col-12 mb-4">
                                <input
                                  type="email"
                                  name="email"
                                  className="w-100 input"
                                  placeholder="Your Email Address"
                                  required
                                />
                              </div>
                              <div className="col-12 p-0 mb-4">
                                <input
                                  type="text"
                                  name="_subject"
                                  // value="New submission!"
                                  className="w-100 input"
                                  placeholder="Your Subject"
                                  required
                                />
                              </div>
                              <div className="col-12 p-0 mb-xl-1">
                                <textarea
                                  placeholder="Your Message"
                                  className="input message-form w-100"
                                  name="message"
                                  required
                                />
                              </div>

                              {/* SETTING FORMSUBMIT TO HANDLE SUBMIT CONTACT FORM */}
                              <input
                                type="hidden"
                                name="_captcha"
                                value="false"
                              />
                              <input
                                type="hidden"
                                name="_autoresponse"
                                value="your custom message"
                              />
                              <input
                                type="hidden"
                                name="_template"
                                value="table"
                              />
                              <input
                                type="hidden"
                                name="_next"
                                value="http://localhost:3000/message-sent"
                              />

                              <div className="col-12 p-0 d-flex justify-content-end">
                                <button
                                  type="submit"
                                  className="btn btn-submit d-flex align-items-center"
                                  onClick={() => {
                                    handleMessageSent();
                                  }}
                                >
                                  <SendIcon className="sendIcon" />
                                  Send Message
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* END OF CONTACT */}
              </div>
            </div>
            {/* END OF MAIN SECTION */}
          </div>
        </div>
      </div>
      {/* STYLE FOR SCROLLBAR */}
      <style>
        {`
          ::-webkit-scrollbar {
            width: 0em;
            height: 0.5em;
          }
          ::-webkit-scrollbar-thumb {
            background-color: rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </div>
  );
}
