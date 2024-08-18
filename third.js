let row_3_starting = document.getElementsByName("row_3_starting");
let row_3_digit = document.getElementsByName("row_3_digit");
let row_3_calculate = document.getElementsByName("row_3_calculate");

let row3changed = {
  1: false,
  2: false,
};

row_3_starting[0].addEventListener("change", (event) => {
  event.preventDefault();
  if (event.target.value === "" || parseInt(event.target.value === NaN)) {
    row3changed[1] = false;
    return;
  }
  row3changed[1] = true;
  const rw3Val = document.querySelector("#rwd3").value;
  if (row3changed[1] && row3changed[2]) {
    const result = generateRandomeNumberAlgorithm(event.target.value, rw3Val);
    if (!row_3_calculate[0].hasAttribute("value")) {
      row_3_calculate[0].setAttribute("value", result);
    }
    row_3_calculate[0].value = result;
  }
});

row_3_digit[0].addEventListener("change", (event) => {
  event.preventDefault();
  if (event.target.value === "" || parseInt(event.target.value === NaN)) {
    row3changed[1] = false;
    return;
  }
  row3changed[2] = true;
  const rw3Val3 = document.querySelector("#rws3").value;
  if (row3changed[1] && row3changed[2]) {
    const result = generateRandomeNumberAlgorithm(rw3Val3, event.target.value);
    if (!row_3_calculate[0].hasAttribute("value")) {
      row_3_calculate[0].setAttribute("value", result);
    }
    row_3_calculate[0].value = result;
  }
});
