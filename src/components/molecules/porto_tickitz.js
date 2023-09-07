/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

// IMPORT MATERIAL UI
import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Tickitz() {
  return (
    <div>
      <div className="portoBox mb-xl-0 mb-2">
        {/* WEB PICTURE */}
        <div className="picture">
          <img
            src={require("./../../asset/images/tickitz/imgCover.webp")}
            className="mx-auto d-block webPicture"
            alt="web_picture"
          />
        </div>

        {/* WEB NAME */}
        <div className="webName">
          <p>Tickitz</p>
          <p className="desc_short">
            Tickitz is a Desktop website-based application in which there is a
            collection of lists of Movies that are currently and will be showing
            in Cinemas, where users can view detailed movie information and can
            order tickets to watch the movies that have been selected. Tickets
            are developed using Javascript, React.Js, and Bootstrap. Tickets is
            a project team, here I am responsible for handling the frontend.
          </p>
        </div>

        {/* STACK */}
        <div className="stack d-flex justify-content-start align-items-center">
          <p>Stack :</p>
          <img
            src={require("./../../asset/images/js.webp")}
            className="iconStack"
            alt="profile_picture"
          />
          <img
            src={require("./../../asset/images/bootstrap.webp")}
            className="iconStack"
            alt="profile_picture"
          />
          <img
            src={require("./../../asset/images/react.webp")}
            className="iconStack"
            alt="profile_picture"
          />
        </div>

        {/* BUTTON */}
        <div className="button">
          {/* MODAL DETAIL */}
          <button
            type="button"
            className="btn btn-modal d-flex align-items-center justify-content-center"
            data-bs-toggle="modal"
            data-bs-target="#tickitzModal"
          >
            Details <InfoIcon className="iconDetails" />
          </button>
          {/* <!-- Modal --> */}
          <div>
            <div
              className="modal fade"
              id="tickitzModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Tickitz
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      style={{ backgroundColor: "white" }}
                    ></button>
                  </div>
                  <div className="modal-body pb-0">
                    {/* CAROUSEL */}
                    <div id="carouselTickitz" className="carousel slide">
                      {/* BUTTON TOTAL IMAGE */}
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselTickitz"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselTickitz"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselTickitz"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselTickitz"
                          data-bs-slide-to="3"
                          aria-label="Slide 4"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselTickitz"
                          data-bs-slide-to="4"
                          aria-label="Slide 5"
                        ></button>
                      </div>

                      {/* IMAGE WEB */}
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src={require("./../../asset/images/tickitz/imgCover.webp")}
                            className="webPicture d-block w-100"
                            alt="web_picture"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src={require("./../../asset/images/tickitz/img2.webp")}
                            className="webPicture d-block w-100"
                            alt="web_picture"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src={require("./../../asset/images/tickitz/img3.webp")}
                            className="webPicture d-block w-100"
                            alt="web_picture"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src={require("./../../asset/images/tickitz/img4.webp")}
                            className="webPicture d-block w-100"
                            alt="web_picture"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src={require("./../../asset/images/tickitz/img5.webp")}
                            className="webPicture d-block w-100"
                            alt="web_picture"
                          />
                        </div>
                      </div>

                      {/* BUTTON PREVIOUS AND NEXT IMAGE WEB */}
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselTickitz"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselTickitz"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="desc">
                      <p>Description</p>
                      <p>
                        Tickitz a Desktop website-based application in which
                        there is a collection of lists of Movies that are
                        currently and will be showing in Cinemas, where users
                        can view detailed movie information and can order
                        tickets to watch the movies that have been selected.
                        Tickets are developed using{" "}
                        <strong>Javascript, React.Js, and Bootstrap</strong>.{" "}
                        Tickets is a project team, here I am responsible for
                        handling the frontend.
                      </p>
                    </div>

                    {/* STACK */}
                    <div className="stackWeb">
                      <p className="subTitle">Stack Used</p>
                      <div className="row">
                        <div className="col-xl-3 col-4">
                          <div className="iconBox">
                            <div>
                              <img
                                src={require("./../../asset/images/js.webp")}
                                className="mx-auto d-block iconSkill"
                                alt="profile_picture"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-4">
                          <div className="iconBox">
                            <div>
                              <img
                                src={require("./../../asset/images/bootstrap.webp")}
                                className="mx-auto d-block iconSkill"
                                alt="profile_picture"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-4">
                          <div className="iconBox">
                            <div>
                              <img
                                src={require("./../../asset/images/react.webp")}
                                className="mx-auto d-block iconSkill"
                                alt="profile_picture"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-4">
                          <div className="iconBox">
                            <div>
                              <img
                                src={require("./../../asset/images/nodeJs.webp")}
                                className="mx-auto d-block iconSkill"
                                alt="profile_picture"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="modal-footer d-flex justify-content-around">
                    <div className="row w-100">
                      <div className="col-6 ps-1">
                        <Link
                          type="button"
                          className="btn btn-git d-flex align-items-center justify-content-center"
                          to="https://github.com/MaulanaIsmail26/Tickets-App-fe.git"
                          target="_blank"
                        >
                          <GitHubIcon className="iconDetails me-1" />
                          Repo Frontend
                        </Link>
                      </div>
                      <div className="col-6 ps-1">
                        <Link
                          type="button"
                          className="btn btn-preview d-flex align-items-center justify-content-center"
                          to="https://tickets-app-fe.vercel.app/"
                          target="_blank"
                        >
                          Preview
                          <VisibilityIcon className="iconDetails" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BUTTON PREVIEW */}
          <Link
            type="button"
            className="btn btn-preview d-flex align-items-center justify-content-center"
            to="https://tickets-app-fe.vercel.app/"
            target="_blank"
          >
            Preview
            <VisibilityIcon className="iconDetails" />
          </Link>
        </div>
      </div>
    </div>
  );
}
