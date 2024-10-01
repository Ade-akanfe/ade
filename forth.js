




// let row_4_starting = document.getElementsByName("row_4_starting");
// let row_4_digit = document.getElementsByName("row_4_digit");
// let row_4_calculate = document.getElementsByName("row_4_calculate");

// let row4changed = {
//   1: false,
//   2: false,
// };

// row_4_starting[0].addEventListener("change", (event) => {
//   event.preventDefault();
//   if (event.target.value === "" || parseInt(event.target.value === NaN)) {
//     row4changed[1] = false;
//     return;
//   }
//   row4changed[1] = true;
//   const rw4Val = document.querySelector("#rwd4").value;
//   if (row4changed[1] && row4changed[2]) {
//     const result = generateRandomeNumberAlgorithm(event.target.value, rw4Val);
//     if (!row_4_calculate[0].hasAttribute("value")) {
//       row_4_calculate[0].setAttribute("value", result);
//     }
//     row_4_calculate[0].value = result;
//   }
// });

// row_4_digit[0].addEventListener("change", (event) => {
//   event.preventDefault();
//   if (event.target.value === "" || parseInt(event.target.value === NaN)) {
//     row4changed[1] = false;
//     return;
//   }
//   row4changed[2] = true;
//   const rw4Val4 = document.querySelector("#rws4").value;
//   if (row4changed[1] && row4changed[2]) {
//     const result = generateRandomeNumberAlgorithm(rw4Val4, event.target.value);
//     if (!row_4_calculate[0].hasAttribute("value")) {
//       row_4_calculate[0].setAttribute("value", result);
//     }
//     row_4_calculate[0].value = result;
//   }
// });
