export function handleInput() {
  const inputText = document.getElementById("inputText");
  const levelCount = document.getElementById("levelCount");
  const operation = document.getElementById("operation");
  const runButton = document.getElementById("runButton");
  const errorMessage = document.getElementById("errorMessage");
  const visualOutput = document.getElementById("visualOutput");

  runButton.addEventListener("click", () => {
    if (inputText.value == "") {
      errorMessage.innerText = "Input text field cannot be empty...";
      visualOutput.innerText = "";
      return;
    } else if (!/^[A-Za-z ]+$/.test(inputText.value)) {
      errorMessage.innerText = "Oops! This field accepts letters only....";
      visualOutput.innerText = "";
      return;
    } else if (levelCount.value == "") {
      errorMessage.innerText = "Column count field cannot be empty...";
      visualOutput.innerText = "";
      return;
    } else if (operation.value == "") {
      errorMessage.innerText = "Operation method must be selected...";
      visualOutput.innerText = "";
      return;
    }
  });
}
