"use strict";
console.log("Hello, I am here!");
console.log("Hello, I am here!");

const user = {
  name: "John",
  surname: "Smith",
};

user.name = "Peter";

console.log(user);

delete user.name;

console.log(user);

const user2 = {};

const isEmpty = function (obj) {
  for (let key in obj) {
    return false;
  }
  return true;
};

console.log(isEmpty(user));

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = function (obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
};

multiplyNumeric(menu);

console.log(menu);

const styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = "Classics";

console.log(styles);

console.log(styles.shift());

styles.unshift("Rap", "Reggie");

console.log(styles);

// with arrays
const sumInput = function () {
  let numbers = [];
  while (true) {
    let value = prompt("Put a number");
    if (isNaN(value) === true || value === "") break;
    numbers.push(+value);
  }
  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  alert(sum);
};

// without arrays

const sumWithoutArrays = function () {
  let sum = 0;
  while (true) {
    let value = prompt("Put a number");
    if (isNaN(value) === true || value === "") break;
    sum += +value;
  }
  alert(sum);
};

const array1 = [8, 29, 6, -10, -8, 2];

// const getMaxSubSum = function (arr) {
//   let superSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let partialSum = 0;
//     for (let a = i; a < arr.length; a++) {
//       partialSum += arr[a];
//       superSum = Math.max(superSum, partialSum);
//     }
//   }
//   return superSum;
// };

const getMaxSubSum = function (arr) {
  let partialSum = 0;
  let superSum = 0;
  for (let i of arr) {
    partialSum += i;
    superSum = Math.max(superSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return superSum;
};

console.log(getMaxSubSum(array1));

const newArr = [1, 2];

const plusArr = [3, 4, 5, 6];

const plusObj = {
  0: "Hello!",
  1: "Bye!",
  name: "Jonh",
  surname: "Black",
  [Symbol.isConcatSpreadable]: true,
  5: "Okay!",
  length: 6,
};

let superNewArr = newArr.concat(plusArr);

console.log(superNewArr);

let array11 = [1, 2, 0, false];

// alert(array11.includes(false));

let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];

// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(function (item) {
  return item.id < 3;
});

console.log(someUsers);

// let arr = [1, 2, 15];

// arr.sort(function (a, b) {
//   return a - b;
// });

// alert(arr);

let arrSum = [1, 2, 3, 4, 5];

let result = arrSum.reduce((sum, current) => sum + current, 0);

// alert(result); // 15

const camelize = function (str) {
  // let result = "";
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i - 1] === "-") {
  //     result = `${result}${str[i].toUpperCase()}`;
  //   } else {
  //     result = `${result}${str[i]}`;
  //   }
  // }
  // return result.replace(/-/g, "");

  let arr = str.split("-");
  let newArr = arr.map((word, index) =>
    index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  );
  result = newArr.join("");
  return result;
};

console.log(camelize("background-color"));

let array3 = [5, 3, 8, 1, 2, 4, 9];

const filterRange = function (arr, a, b) {
  let result = arr.filter((item) => item >= a && item <= b);
  return result;
};

console.log(filterRange(array3, 1, 5));

const filterRange2 = function (arr, a, b) {
  let result = arr.filter((item) => item < a || item > b);
  return result;
};

console.log(filterRange2(array3, 4, 6));

const filterRange3 = function (arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

console.log(filterRange3(array3, 1, 7));

console.log(array3);

let arr11 = [5, 2, 1, -10, 8];

arr11.sort();
arr11.reverse();

console.log(arr11);

let arr12 = ["HTML", "JavaScript", "CSS"];

const copySorted = function (arr) {
  // let newCopy = arr.slice();
  // return newCopy.sort();

  return arr.slice().sort();
};

let sorted = copySorted(arr12);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr12);

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let allUsers = [vasya, petya, masha];

let names = allUsers.map((item) => (item = item.name));

let usersMapped = allUsers.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped);

let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };

let arr13 = [vasya1, petya1, masha1];

const sortByAge = function (arr) {
  return arr.sort((a, b) => a.age - b.age);
};

console.log(sortByAge(arr13));

let arrForShuffle = [1, 2, 3, 4, 5, 6, 7, 8];

const shuffle = function (arr) {
  return arr
    .map((item) => [Math.random(), item])
    .sort()
    .map((item) => item[1]);
};

console.log(shuffle(arrForShuffle));

const superUser = {
  name: "John",
  surname: "Smith",
};

superUser.name = "Pete";

console.log(superUser);

const isEmptyObj = function (obj) {
  for (let key in obj) {
    return false;
  }
  return true;
};

console.log(isEmptyObj(superUser));

let newSalaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let newSum = 0;

for (let key in newSalaries) {
  newSum += newSalaries[key];
}

console.log(newSum);

let newMenu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumericObj = function (obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
};

multiplyNumericObj(newMenu);

console.log(newMenu);

const newMusic = ["Jazz", "BLues"];

newMusic.push("Rock-n-Roll");

console.log(newMusic);

newMusic[Math.floor((newMusic.length - 1) / 2)] = "Classics";

console.log(newMusic);

console.log(newMusic.shift());
console.log(newMusic);

newMusic.unshift("Rap", "Reggie");
console.log(newMusic);

const newSumInput = function () {
  let newObj = [];
  while (true) {
    let value = prompt("Please enter a number");
    if (isNaN(value) || value === "") break;
    newObj.push(+value);
  }

  let sum = 0;
  for (let number in newObj) {
    sum += newObj[number];
  }
  return sum;
};

const superArr = [1, -2, 3, 4, -9, 6];

const getMaxSum = function (arr) {
  let partialSum = 0;
  let maxSum = 0;
  for (let i of arr) {
    partialSum += i;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
};

console.log(getMaxSum(superArr));

// const newCamelize = function (str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i - 1] === "-") {
//       result = `${result}${str[i].toUpperCase()}`;
//     } else {
//       result = `${result}${str[i]}`;
//     }
//   }
//   return result.replace(/-/g, "");
// };

const newCamelize = function (str) {
  return str
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
};

const newfilterRange = function (arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
};

let superNewArr2 = [1, 2, 3, 4, 5, 6, 7, 8];

newfilterRange(superNewArr2, 3, 5);

console.log(superNewArr2);

superNewArr2.sort((a, b) => b - a);

console.log(superNewArr2);

let vasya4 = { name: "Вася", age: 25 };
let petya4 = { name: "Петя", age: 30 };
let masha4 = { name: "Маша", age: 28 };

let users4 = [vasya, petya, masha];

let names4 = users4.map((item) => item.name);

console.log(names4);

let vasya5 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya5 = { name: "Петя", surname: "Иванов", id: 2 };
let masha5 = { name: "Маша", surname: "Петрова", id: 3 };

let users5 = [vasya, petya, masha];

let usersMapped5 = users5.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped5);

let vasya6 = { name: "Вася", age: 25 };
let petya6 = { name: "Петя", age: 30 };
let masha6 = { name: "Маша", age: 28 };

let arr6 = [vasya6, petya6, masha6];

const sortByAge2 = function (arr) {
  arr.sort((a, b) => a.age - b.age);
};

sortByAge2(arr6);

console.log(arr6);

const superShuffle = function (arr) {
  return arr
    .map((item) => [Math.random(), item])
    .sort()
    .map((item) => item[1]);
};

let randomNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(randomNumbers);
console.log(superShuffle(randomNumbers));

let vasya7 = { name: "Вася", age: 25 };
let petya7 = { name: "Петя", age: 30 };
let masha7 = { name: "Маша", age: 29 };

let arr88 = [vasya7, petya7, masha7];

const getAverageAge = function (arr) {
  return arr.reduce((sumAge, item) => sumAge + item.age, 0) / arr.length;
};

console.log(getAverageAge(arr88));

const unique = function (arr) {
  let result = [];

  for (let i of arr) {
    if (!result.includes(i)) {
      result.push(i);
    }
  }
  return result;
};

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

console.log(unique(strings));

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let users111 = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users111);

console.log(usersById);

console.log(323);
console.log(323);
console.log(3323);
console.log(3444);

console.log(usersById);
console.log("hey!");

const forecast = [14, 15, 1, -5, 6, 8, 9];

const printForecast = function (arr) {
  let day = 1;
  for (let i of arr) {
    console.log(`${i}${"C in "}${day}${" days... "}`);
    day++;
  }
};

printForecast(forecast);
