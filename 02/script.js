let arr = [];

document
  .querySelectorAll(".as-imagegrid-item")
  .forEach((item) => arr.push(item.innerText.replace("\nSupport", "")));
console.log(arr);
