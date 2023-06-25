const sumAll = function (firstNum, secondNum) {
  if (
    firstNum < secondNum &&
    firstNum > 0 &&
    secondNum > 0 &&
    Number.isInteger(firstNum) &&
    Number.isInteger(secondNum)
  ) {
    numDiff = secondNum - firstNum;
    let newNum = firstNum;
    for (i = 1; i <= numDiff; i++) {
      newNum += firstNum + i;
    }
    return newNum;
  } else if (
    secondNum < firstNum &&
    firstNum > 0 &&
    secondNum > 0 &&
    Number.isInteger(firstNum) &&
    Number.isInteger(secondNum)
  ) {
    numDiff = firstNum - secondNum;
    let newNum = secondNum;
    for (i = 1; i < numDiff + 1; i++) {
      newNum += secondNum + i;
    }
    return newNum;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = sumAll;
