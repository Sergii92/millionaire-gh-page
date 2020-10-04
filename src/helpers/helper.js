export const handleAnswer = (arr, answer, id) => {
  const newArr = arr.map((item) => {
    const trueAnswers = item.trueAnswers.filter((point) => point !== answer.id);

    if (item.id === id) {
      if (trueAnswers.length === 0) {
        return {
          ...item,
          trueAnswers,
          answer: "resolve",
        };
      } else if (trueAnswers.length !== item.trueAnswers.length) {
        return {
          ...item,
          trueAnswers,
        };
      } else if (trueAnswers.length === item.trueAnswers.length) {
        return {
          ...item,
          trueAnswers,
          answer: "reject",
        };
      } else {
        return {
          ...item,
        };
      }
    } else {
      return {
        ...item,
      };
    }
  });

  const resolveElement = newArr.find((item) => item.answer === "resolve");

  const optimizeArr = newArr.map((item) => {
    if (!resolveElement) {
      return {
        ...item,
      };
    } else {
      if (item.id === id + 1) {
        return {
          ...item,
          answer: "pending",
        };
      } else {
        return {
          ...item,
        };
      }
    }
  });
  return optimizeArr;
};
