const button = document.getElementById("runButton");
const resultDiv = document.getElementById("result");

button.addEventListener("click", () => {
  const inputArray = prompt("Enter array elements separated by commas (e.g. 1, 3, 4, 6):");
  if (!inputArray) {
    resultDiv.style.display = "inline-block";
    resultDiv.innerText = "⚠️ You must enter an array!";
    return;
  }

  const array = inputArray.split(",");

  const inputItem = prompt("Enter the element to remove:");
  if (inputItem === "") {
    resultDiv.style.display = "inline-block";
    resultDiv.innerText = "⚠️ You must enter an element to remove!";
    return;
  }

  function removeElement(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        arr.splice(i, 1);
      }
    }
  }

  removeElement(array, inputItem);

  resultDiv.style.display = "inline-block";
  resultDiv.innerText = "Resulting array: [" + array.join(", ") + "]";
});
