/* eslint-disable no-unused-vars */
import React from "react";
import "./../styles/message_sent.css";
import { Link, useNavigate } from "react-router-dom";

// IMPORT ICON FROM MATERIAL UI
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";

export default function MessageSent() {
  const navigate = useNavigate();
  const [sentName, setSentName] = React.useState("");

  // CHECK IF MESSAGE SENT
  React.useEffect(() => {
    const messageSent = localStorage.getItem("messageSent");
    const sentName = localStorage.getItem("sentName");

    if (!messageSent && !sentName) {
      navigate("/");
    }
  });

  // DELETED LOCAL STORAGE
  const deletedLocalStorage = () => {
    localStorage.clear();
  }

  // GET SENT NAME
  React.useEffect(() => {
    const checkName = localStorage?.getItem("sentName")
      ? localStorage?.getItem("sentName")
      : null;

    setSentName(checkName);
  }, []);

  return (
    <div id="message-sent">
      <div className="container-fluid mainContainer">
        <div className="container secondContainer">
          <div className="row">
            <div
              className="col-12 d-flex justify-content-center align-items-center"
              style={{ height: "100vh" }}
            >
              <div>
                <img
                  src={require("./../asset/images/sent-message.png")}
                  className="mx-auto d-block"
                  alt="sentMessage"
                ></img>
                <div className="desc">
                  <p>{sentName}</p>
                  <p>
                    Thank you for contacting me{" "}
                    <DoneAllRoundedIcon className="checkIcon" />
                  </p>

                  <p>
                    I will reply as soon as possible, please check your email
                    within 24 hours, Thanks.
                  </p>
                </div>
                <div className="btn-back d-flex justify-content-center">
                  <Link
                    type="button"
                    className="btn d-flex align-items-center justify-content-center"
                    to="/"
                    onClick={() => {
                      deletedLocalStorage();
                    }}
                  >
                    <ArrowBackIcon className="backIcon" />
                    Go Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
