function contactBoxToggle(event) {
  let btn = event.target.getAttribute("linked-to");
  let box = document.getElementById(btn);
  let allBoxes = document.getElementsByClassName("contactToggleBox");
  if (box.className === "contactToggleBox") {
    for (let i = 0; i < allBoxes.length; i++) {
      allBoxes[i].className = "contactToggleBox";
      console.log(allBoxes);
    }
    box.className += " contactToggleBox--open";
  } else {
    for (let i = 0; i < allBoxes.length; i++) {
      allBoxes[i].className = "contactToggleBox";
      console.log(allBoxes);
    }
  }
}
