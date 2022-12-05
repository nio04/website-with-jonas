const inputFirst = [1, 2, 4, 5];
// const inputSecond = [4, 2, 5, 1];
let storeResFirst = [];
for (let i = 0; i < inputFirst.length - 1; i += 1) {
  // console.log(inputFirst[i] +1);
  if (inputFirst[i] + 1 == inputFirst[i + 1]) {
    storeResFirst.push("true");
  } else {
    storeResFirst.push("false");
  }
}
// console.log(storeResFirst)
const includes = storeResFirst.includes("false");
if (includes) {
  console.log("array is messed up!");
} else {
  console.log("array is correct");
}
