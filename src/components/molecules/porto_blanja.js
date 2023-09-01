/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

// IMPORT MATERIAL UI
import GitHubIcon from "@mui/icons-material/GitHub";
import InfoIcon from "@mui/icons-material/Info";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Blanja() {
  return (
    <div>
      <div className="portoBox">
        {/* WEB PICTURE */}
        <div className="picture">
          <img
            src={require("./../../asset/images/blanja/imgCover.webp")}
            className="mx-auto d-block webPicture"
            alt="web_picture"
          />
        </div>

        {/* WEB NAME */}
        <div className="webName">
          <p>Blanja</p>
          <p className="desc_short">
            Blanja is an application based on the Desktop E-commerce website in
            which users can see the items being sold by sellers and buy them.
            Users can also become sellers and sell their products. Blanja was
            developed using Javascript, Next.Js, Bootstrap and Material UI.
            Blanja is a project team, here I am responsible for handling the
            frontend.
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
            src={require("./../../asset/images/next.webp")}
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
            data-bs-target="#BlanjaModal"
          >
            Details <InfoIcon className="iconDetails" />
          </button>
          {/* <!-- Modal --> */}
          <div>
            <div
              className="modal fade"
              id="BlanjaModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Blanja
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
                    <div id="carouselBlanja" className="carousel slide">
                      {/* BUTTON TOTAL IMAGE */}
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselBlanja"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselBlanja"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselBlanja"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselBlanja"
                          data-bs-slide-to="3"
                          aria-label="Slide 4"
                        ></button>
                      </div>

                      {/* IMAGE WEB */}
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src={require("./../../asset/images/blanja/imgCover.webp")}
                            className="webPicture d-block w-100"
                            alt="web_picture"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src={require("./../../asset/images/blanja/img2.webp")}
                            className="webPicture d-block w-100"
                            alt="web_picture"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src={require("./../../asset/images/blanja/img3.webp")}
                            className="webPicture d-block w-100"
                            alt="web_picture"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src={require("./../../asset/images/blanja/img4.webp")}
                            className="webPicture d-block w-100"
                            alt="web_picture"
                          />
                        </div>
                      </div>

                      {/* BUTTON PREVIOUS AND NEXT IMAGE WEB */}
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselBlanja"
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
                        data-bs-target="#carouselBlanja"
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
                        Blanja is an application based on the Desktop E-commerce
                        website in which users can see the items being sold by
                        sellers and buy them. Users can also become sellers and
                        sell their products. Blanja was developed using{" "}
                        <strong>
                          Javascript, Next.Js, Bootstrap and Material UI.
                        </strong>{" "}
                        Blanja is a project team, here I am responsible for
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
                                src={require("./../../asset/images/materialUi.webp")}
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
                                src={require("./../../asset/images/next.webp")}
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
                          to="https://github.com/MaulanaIsmail26/blanja-fe.git"
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
                          to="https://blanja-rose.vercel.app/"
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
            to="https://blanja-rose.vercel.app/"
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
