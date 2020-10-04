import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { NAVIGATION } from "../../constants/navigations";
import Img from "../../assets/img/hand1.png";
import "./style.css";

const GameOver = ({ onClickNewGame, resolveQuestion }) => {
  console.log(resolveQuestion);
  const priceArray = resolveQuestion.map((item) => item.price);
  const totalPrice = priceArray[priceArray.length - 1];

  return (
    <div className="wraper game_wraper ">
      <div className="contianer game_container">
        <div className="row game_row">
          <div className="col-md-6 col-sm-12 ">
            <div className="game_over_img">
              <img src={Img}></img>
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="game_over_title">
              <h3>Total score:</h3>
              <h2>${totalPrice || 0} earned</h2>
              <Link to={NAVIGATION.GAME}>
                <Button title="Try again" onClickNewGame={onClickNewGame} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOver;
