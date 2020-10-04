import React, { useState } from "react";
import classNames from "classnames";
import "./style.css";

const Money = ({ money, pendingQuestion, arr }) => {
  const resolveQuestion = arr.filter((item) => item.answer === "resolve");
  console.log(resolveQuestion);
  const moneyStyle = classNames("money_block", {
    correntStatus: pendingQuestion.some(
      (item) => item.answer === "pending" && item.price === money
    ),
    closeQuestion: arr.some(
      (item) => item.answer === "resolve" && item.price === money
    ),
  });

  return (
    <div className={moneyStyle}>
      <div className="money_before"></div>${money}
      <div className="money_after"></div>
    </div>
  );
};

export default Money;
