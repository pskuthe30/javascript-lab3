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
const addSubmission = (array, newName, newScore, newDate) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    Date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};
addSubmission(submissions, "Pallavi", 83, "A date");
console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
const deleteSubmissionByName = (array, name) => {
  const index = array.findIndex((item) => {
    item.name == name;
  });
  array.splice(index, 1);
};

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

const findSubmissionByName = (array, name) => {
  return array.find((submission) => {
    return submission.name === name;
  });
};
//const findLowestScore = (array) => {
//let currentLowest = array[0];
//array.forEach = (item) => {
//if (item.score < currentLowest.score) {
//currentLowest = item;
//}
//};
//return currentLowest;
//};
//console.log(findLowestScore(submissions));
const findLowestScore = (array) => {
  return array.reduce((accumulator, currentValue) => {
    return currentValue.score < accumulator.score ? currentValue : accumulator;
  });
};
console.log(findLowestScore(submissions));
//
//const finadAverageScore = (array) => {
//  let.total = 0;
//  for (let item of array) {
//    total += item.score;
//  }
//  return total / array.length;
//};
const finadAverageScore = (array) => {
  return (
    array.reduce(
      (accumulator, currentValue) => accumulator + currentValue.score,
      0
    ) / array.length
  );
};
const filterPassing = (array) => {
  array.filter(() => {
    return item.passed;
  });
};
const filter90AndAbove = (array) => {
  array.filter((item) => {
    return item.passed;
  });
};
