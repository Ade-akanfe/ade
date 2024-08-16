//field one
let row_1_starting = document.getElementsByName("row_1_starting");
let row_2_starting = document.getElementsByName("row_2_starting");
let row_3_starting = document.getElementsByName("row_3_starting");
let row_4_starting = document.getElementsByName("row_4_starting");
// field two
let row_1_digit = document.getElementsByName("row_1_digit");
let row_2_digit = document.getElementsByName("row_2_digit");
let row_3_digit = document.getElementsByName("row_3_digit");
let row_4_digit = document.getElementsByName("row_4_digit");

//field three
let row_1_calculate = document.getElementsByName("row_1_calculate");
let row_2_calculate = document.getElementsByName("row_2_calculate");
let row_3_calculate = document.getElementsByName("row_3_calculate");
let row_4_calculate = document.getElementsByName("row_4_calculate");

let row1changed = {
  1: false,
  2: false,
};
let row2changed = {
  1: false,
  2: false,
};
let row3changed = {
  1: false,
  2: false,
};

let row4changed = {
  1: false,
  2: false,
};

// row 1 starting event
row_1_starting[0].addEventListener("change", (event) => {
  event.preventDefault();
  if (event.target.value === "" || parseInt(event.target.value === NaN)) {
    row1changed[1] = false;
    return;
  }
  row1changed[1] = true;
  const rw1Val = document.querySelector("#rwd1").value;
  if (row1changed[1] && row1changed[2]) {
    const result = generateRandomeNumberAlgorithm(event.target.value, rw1Val);
    if (!row_1_calculate[0].hasAttribute("value")) {
      row_1_calculate[0].setAttribute("value", result);
    }
    row_1_calculate[0].value = result;
  }
});

row_1_digit[0].addEventListener("change", (event) => {
  event.preventDefault();
  if (event.target.value === "" || parseInt(event.target.value === NaN)) {
    row1changed[1] = false;
    return;
  }
  row1changed[2] = true;
  const rw1Val2 = document.querySelector("#rws1").value;
  if (row1changed[1] && row1changed[2]) {
    const result = generateRandomeNumberAlgorithm(rw1Val2, event.target.value);
    if (!row_1_calculate[0].hasAttribute("value")) {
      row_1_calculate[0].setAttribute("value", result);
    }
    row_1_calculate[0].value = result;
  }
});

const generateRandomeNumberAlgorithm = (_start, digits) => {
  if (+digits > 8) {
    return "******";
  }
  const maxValplus1 =
    +digits < 2
      ? 10
      : "1" +
        new Array(+digits - 1).fill("0").reduce((prev, next) => prev + next);
  const maxValue = +maxValplus1 - 1;
  let rndValue =
    +digits < 2
      ? _start
      : _start + Math.floor(Math.random() * maxValue).toString();
  let result = new Array(8 - +digits).fill("0");
  const solution = result.reduce((p, n) => p + n) + rndValue;
  console.log(solution);
  return solution;
};
