import React from "react";
import { NAVIGATION } from "../../constants/navigations";
import { Link } from "react-router-dom";

import Button from "../../components/Button/Button";
import Img from "../../assets/img/hand1.png";
import "../../assets/css/reset.css";
import "./style.css";

const MainPage = () => {
  return (
    <div className="wraper main_page_wraper">
      <div className="contianer main_page_container">
        <div className="row main_page_row">
          <div className="col-md-6 col-sm-12 main_img">
            <div className="img">
              <img src={Img}></img>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 main_title">
            <div className="title">
              <h1>Who wants to be a millionaire?</h1>
            </div>

            <Link to={NAVIGATION.GAME}>
              <Button title="Start" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
