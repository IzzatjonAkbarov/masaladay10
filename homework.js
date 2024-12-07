// let input1 = [1, 2, 3, 4];
// let input2 = [2, 1, 2, 3];

// input1.sort();
// input2.sort();
// if (input1.join("") === input2.join("")) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// ===================================masala1
// var numb = [4, 2, 9, 7, 5];

// var newnumber = numb.sort((a, b) => b - a);
// n = 3;
// console.log(newnumber[n - 1]);
// ==========================================masala2
// let arr = [3, 2, 3, 3, 3, 2, 3, 3, 2, 3];

// let newarr = [];

// arr.forEach((value) => {
//   if (!newarr.includes(value)) {
//     newarr.push(value);
//   }
// });

// console.log(newarr.length === 2 ? true : false);
// ===========================================masala5
let newarr = [];
let input = ["flower", "flow", "flight"];
for (let i = 0; i < input.length; i++) {
  newarr.push(input[i]);
  for (let j = 0; j < newarr.length; j++) {
    // const element = array[j];
    console.log(newarr[j]);
  }
  //   console.log(newarr);
}
