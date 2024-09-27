const printButton = document.getElementById("print");
const btnClicked = (event) => {
  event.preventDefault();
  window.print();
};
printButton.addEventListener("click", btnClicked);
