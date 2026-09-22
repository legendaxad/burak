// M-TASK

interface type_array {
  number: number;
  square: number;
}

const getSquareNumbers = (array: number[]): type_array[] => {
  const result: type_array[] = [];
  let i = 0;
  for (i; i < array.length; i++) {
    let num = array[i];
    let square = num * num;

    let obj: type_array = {
      number: num,
      square: square,
    };

    result[i] = obj;
  }

  return result;
};

console.log(getSquareNumbers([1, 2, 3]));
