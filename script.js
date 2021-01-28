"use strict";
let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "A date",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "A date",
    passed: true,
  },

  {
    name: "Jack",
    score: 59,
    date: "A date",
    passed: false,
  },

  {
    name: "Jill",
    score: 88,
    date: "A date",
    passed: true,
  },
];
//const addLaptopToInventory = (array, brand, size, price, touchscreen) => {
//  const newObject = {
//  brand: brand,
//size: size,
//price: price,
//touchscreen: touchscreen,
//};
//array.push(newObject);
//};

const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newObject);
};
//console.log(addSubmission(submissions, "Pallavi", 100, "A date"));
//console.log(submissions);
const deleteSubmissionByIndex = (array, index) => {
  return array.splice(index);
};
console.log(deleteSubmissionByIndex(submissions, 5));
//console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((submissions) => {
    return submissions.name === name;
  });
  return array.splice(index, 1);
};
console.log(deleteSubmissionByName(submissions, "Jill"));
console.log(submissions);

const editSubmission = (array, index, score) => {};

const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name == name;
  });
};
console.log(findSubmissionByName(submissions, "Jack"));

const findLowestScore = (array) => {
  let lowest = 0;
  let currentScore = array.forEach((submissions) => {
    if (array.score <= submissions.score) {
      lowest = array.score;
    } else {
      lowest = submissions.score;
    }
  });
};

console.log(findLowestScore(submissions));

const finadAverageScore = (array) => {
  let itemsInArray = array.length;
  let avgSum = 0;
  for (let i = 0; i <= itemsInArray; i++) {
    avgSum += array.score;
  }
  return (avgSum = avgSum / itemsInArray);
};
console.log(finadAverageScore(submissions));

const filterPassing = (array) => {
  let newArray = array.filter((submissions) => {
    return submissions.passed == true;
  });
  return newArray;
};
console.log(filterPassing(submissions));

const filter90AndAbove = (array) => {
  let newArray = array.filter((submissions) => {
    return submissions.score >= 90;
  });
  return newArray;
};
console.log(filter90AndAbove(submissions));
