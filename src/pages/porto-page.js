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

export default function portoPage() {
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
                          to="https://github.com/MaulanaIsmail26" target="_blank"
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
          </div>
        </div>
      </div>
    </div>
  );
}
