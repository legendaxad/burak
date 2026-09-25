// N-TASK

// const palindromCheck = (str: string): boolean => {
//   const reversedStr = str.split("").reverse().join("");
//   return str === reversedStr;
// };

// console.log(palindromCheck("dad")); // true
// console.log(palindromCheck("son")); // false

// const palindromeCheck = (str: string) => {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     result = str[i] + result;
//   }

//   console.log("before:", str);
//   console.log("after:", result);
//   console.log("Result:", str === result);
// };

// palindromeCheck("dad");

// M-TASK

// interface type_array {
//   number: number;
//   square: number;
// }

// const getSquareNumbers = (array: number[]): type_array[] => {
//   const result: type_array[] = [];
//   let i = 0;
//   for (i; i < array.length; i++) {
//     let num = array[i];
//     let square = num * num;

//     let obj: type_array = {
//       number: num,
//       square: square,
//     };

//     result[i] = obj;
//   }

//   return result;
// };

// console.log(getSquareNumbers([1, 2, 3]));
