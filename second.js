let row_2_starting = document.getElementsByName("row_2_starting");
let row_2_digit = document.getElementsByName("row_2_digit");
let row_2_calculate = document.getElementsByName("row_2_calculate");

let row2changed = {
  1: false,
  2: false,
};

row_2_starting[0].addEventListener("change", (event) => {
  event.preventDefault();
  if (event.target.value === "" || parseInt(event.target.value === NaN)) {
    row2changed[1] = false;
    return;
  }
  row2changed[1] = true;
  const rw2Val = document.querySelector("#rwd2").value;
  if (row2changed[1] && row2changed[2]) {
    const result = generateRandomeNumberAlgorithm(event.target.value, rw2Val);
    if (!row_2_calculate[0].hasAttribute("value")) {
      row_2_calculate[0].setAttribute("value", result);
    }
    row_2_calculate[0].value = result;
  }
});

row_2_digit[0].addEventListener("change", (event) => {
  event.preventDefault();
  if (event.target.value === "" || parseInt(event.target.value === NaN)) {
    row2changed[1] = false;
    return;
  }
  row2changed[2] = true;
  const rw2Val2 = document.querySelector("#rws2").value;
  if (row2changed[1] && row2changed[2]) {
    const result = generateRandomeNumberAlgorithm(rw2Val2, event.target.value);
    if (!row_2_calculate[0].hasAttribute("value")) {
      row_2_calculate[0].setAttribute("value", result);
    }
    row_2_calculate[0].value = result;
  }
});
