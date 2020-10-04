import React, { useEffect, useState } from "react";
import classNames from "classnames";
import "./style.css";

const Answer = ({ answer, handleAnswer, trueAnswers, status }) => {
  const option = [
    { value: "A", id: 1 },
    { value: "B", id: 2 },
    { value: "C", id: 3 },
    { value: "D", id: 4 },
  ];

  const [selected, setSelected] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);

  useEffect(() => {
    setWrong(false);
    setCorrect(false);
    setSelected(false);
  }, [status]);
  const selectedAnswer = (id) => {
    setSelected(!selected);

    if (trueAnswers.some((item) => item === id)) {
      setTimeout(() => setCorrect(true), 1000);
    } else {
      setTimeout(() => setWrong(true), 1000);
    }
    handleAnswer();
  };
  const styleButton = classNames("answer_block", {
    selected: selected,
    correct: correct,
    wrong: wrong,
  });
  return (
    <div className={styleButton} onClick={() => selectedAnswer(answer.id)}>
      <div className="before_block"></div>
      <div className="after_block"></div>
      <span className="option">{answer.option}</span>
      <span className="value"> {answer.value}</span>
    </div>
  );
};

export default Answer;
