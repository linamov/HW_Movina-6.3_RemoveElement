const button = document.getElementById("runButton");
const resultDiv = document.getElementById("result");

button.addEventListener("click", () => {
  const inputArray = prompt("Enter array elements separated by commas (e.g. 1, 3, 4, 6):");
  if (inputArray === null || inputArray.trim() === "") {
    resultDiv.style.display = "inline-block";
    resultDiv.innerText = "⚠️ You must enter an array!";
    return;
  }

  const array = inputArray.split(",").map(item => item.trim());

  const inputItem = prompt("Enter the element to remove:");
  if (inputItem === null || inputItem.trim() === "") {
    resultDiv.style.display = "inline-block";
    resultDiv.innerText = "⚠️ You must enter an element to remove!";
    return;
  }

  const itemToRemove = inputItem.trim();

  function removeElement(arr, item) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
  }

  removeElement(array, itemToRemove);

  resultDiv.style.display = "inline-block";
  resultDiv.innerText = "Resulting array: [" + array.join(", ") + "]";
});
