import React, { useState } from "react";
import Money from "../../components/Money/Money";

const Result = ({ price, pendingQuestion, arr, resultMobile }) => {
  return (
    <div className={resultMobile}>
      {price.reverse().map((item) => {
        return (
          <Money
            money={item}
            key={item}
            pendingQuestion={pendingQuestion}
            arr={arr}
          />
        );
      })}
    </div>
  );
};

export default Result;
