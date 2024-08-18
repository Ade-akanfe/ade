//field one
let row_1_starting = document.getElementsByName("row_1_starting");

// field two
let row_1_digit = document.getElementsByName("row_1_digit");

//field three
let row_1_calculate = document.getElementsByName("row_1_calculate");

let row1changed = {
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
  const solution =
    result.length === 0 ? rndValue : result.reduce((p, n) => p + n) + rndValue;
  return _start.length + digits > 8
    ? solution.slice(0, 8)
    : solution.slice(solution.length - 8, solution.length);
};
