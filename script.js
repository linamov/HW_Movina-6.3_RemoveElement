const button = document.getElementById("runButton");
const resultDiv = document.getElementById("result");

button.addEventListener("click", () => {
  const inputArray = prompt("Enter array elements separated by commas (e.g. 1,l,yu,222,\\,2):");
  if (!inputArray || inputArray.trim() === "") {
    resultDiv.style.display = "inline-block";
    resultDiv.innerText = "⚠️ You must enter an array!";
    return;
  }

  const array = inputArray.split(",").map(item => item.trim());

  const inputItems = prompt("Enter elements to remove, separated by commas (e.g. y,\\):");
  if (!inputItems || inputItems.trim() === "") {
    resultDiv.style.display = "inline-block";
    resultDiv.innerText = "⚠️ You must enter elements to remove!";
    return;
  }

  const itemsToRemove = inputItems.split(",").map(item => item.trim());

  function removeElements(arr, items) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (items.includes(arr[i])) {
        arr.splice(i, 1);
      }
    }
  }

  removeElements(array, itemsToRemove);

  resultDiv.style.display = "inline-block";
  resultDiv.innerText = "Resulting array: [" + array.join(", ") + "]";
});
