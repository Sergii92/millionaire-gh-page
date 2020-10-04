import React, { useEffect, useState } from "react";
import Result from "../../components/Result/Result";
import classNames from "classnames";
import GameOver from "../../components/GameOver/GameOver";
import { handleAnswer } from "../../helpers/helper";
import "./style.css";

import { QUESTIONS } from "../../constants/questions";
import Answer from "../../components/Answer/Answer";

const Game = () => {
  const [arr, setArr] = useState(QUESTIONS);
  const [openDropdaun, setOpenDropdaun] = useState(false);

  const dropdownStyle = classNames("dropdown", {
    close: openDropdaun,
  });

  const onClickNewGame = () => {
    setArr(QUESTIONS);
  };

  const price = arr.map((item) => item.price);

  const resultStyle = classNames("total_money col-md-3 col-sm-12", {
    openResult: openDropdaun,
  });
  const resultMobile = classNames("result", {
    resultBlock: openDropdaun,
  });
  const handleDropdown = () => {
    setOpenDropdaun(!openDropdaun);
  };

  const getQuestion = (arr, answer, id) => {
    setTimeout(() => setArr(handleAnswer(arr, answer, id)), 3000);
  };

  const pendingQuestion = arr.filter((item) => item.answer === "pending");
  const resolveQuestion = arr.filter((item) => item.answer === "resolve");

  if (arr.some((item) => item.answer === "reject")) {
    return (
      <GameOver
        onClickNewGame={onClickNewGame}
        resolveQuestion={resolveQuestion}
      />
    );
  }
  if (arr.every((item) => item.answer === "resolve")) {
    return (
      <GameOver
        text="win"
        onClickNewGame={onClickNewGame}
        resolveQuestion={resolveQuestion}
      />
    );
  }

  return (
    <div className="wraper game_wraper">
      <div className="container game_container">
        <div className="row game_row">
          <div className={dropdownStyle} onClick={handleDropdown}>
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
            <span className="line line4"></span>
          </div>
          <div className="col-md-9 col-sm-12 target">
            <div className="task">
              <div className="question">
                {pendingQuestion.map((item) => {
                  return <p key={item.id}>{item.label}</p>;
                })}
              </div>

              <div className="answer">
                {pendingQuestion.map((point) => {
                  return point.answers.map((answer) => {
                    return (
                      <Answer
                        answer={answer}
                        key={answer.id}
                        handleAnswer={() => getQuestion(arr, answer, point.id)}
                        trueAnswers={point.trueAnswers}
                        status={point.id}
                      />
                    );
                  });
                })}
              </div>
            </div>
          </div>
          <div className={resultStyle}>
            <Result
              price={price}
              pendingQuestion={pendingQuestion}
              arr={arr}
              resultMobile={resultMobile}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
