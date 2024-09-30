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
const ade = (event) => {
  event.preventDefault();

  row1changed[1] = true;
  const rw1Val = document.querySelector("#rwd1").value;
};

const ade2 = (event) => {
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
};

const generateRandomeNumberAlgorithm = (_start, digits) => {
  if (
    row_1_starting[0].value === "" ||
    parseInt(row_1_starting[0].value === NaN)
  ) {
    row1changed[1] = false;
    return;
  }
  if (row_1_digit[0].value === "" || parseInt(row_1_digit[0].value === NaN)) {
    row1changed[1] = false;
    return;
  }
  if (
    row_1_calculate[0].value === "" ||
    parseInt(row_1_calculate[0].value === NaN)
  ) {
    row1changed[1] = false;
    return;
  }

  let values = {
    starting: row_1_starting[0].value,
    digit: row_1_digit[0].value,
    calculate: row_1_calculate[0].value,
  };

  if (+values.digit > 8) {
    return "******";
  }
  const rndValues = [];
  for (i = 0; i < +values.calculate; i++) {
    let rndValue = +values.digit < 2 ? +values.starting : +values.starting + i;
    let result = new Array(8 - +values.digit).fill("0");
    const solution =
      result.length === 0
        ? rndValue
        : result.reduce((p, n) => p + n) + rndValue;
    values.starting + digits > 8
      ? rndValues.push(solution)
      : rndValues.push(solution);
  }

  const newArayVal = rndValues.map((el) => {
    if (el.toString().length < +values.digit) {
      const newArray = new Array(8 - el.toString().length).fill("0");
      const newVal = newArray.reduce((a, b) => a + b);
      return newVal + el;
    }
  });

  const parent = document.getElementById("parent");
  console.log(newArayVal);

  for (let i = 0; i < newArayVal.length; i++) {
    const li = document.createElement("li");
    li.innerText = newArayVal[i];
    li.classList.add;
    parent.appendChild(li);
  }
};

const printButton = document.getElementById("print");
const btnClicked = (event) => {
  event.preventDefault();
  generateRandomeNumberAlgorithm();
  window.print();
};
printButton.addEventListener("click", btnClicked);
