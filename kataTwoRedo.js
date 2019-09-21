const conditionalSum = function(array, condition) {
  let sumNum = 0;
  for (let i = 0; i < array.length; i++) {
    if (condition === "even" && array[i] % 2 === 0) {
      sumNum += array[i];
    }
    if (condition === "odd" && array[i] % 2 !== 0) {
      sumNum += array[i];
    }
  }
  return sumNum;
};


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

/*
ORIGINAL CODE FROM PREP WORK
const conditionalSum = function (values, condition) {
  let evenNum = [];
  let oddNum = [];

  for (i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      evenNum.push(values[i]);
    } else {
      oddNum.push(values[i])
    }
  }
  let sumEven = 0;
  let sumOdd = 0;

  for (i = 0; i < evenNum.length; i++) {
    sumEven += evenNum[i];
  }
  for (i = 0; i < oddNum.length; i++) {
    sumOdd += oddNum[i];
  }
  if (condition === "even") {
    return sumEven;
  } else if (condition === "odd") {
    return sumOdd;
  }
};
*/