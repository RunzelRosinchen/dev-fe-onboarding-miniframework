function contactBoxToggle(event) {
    let btn=event.target.getAttribute("linked-to");
    let box = document.getElementById(btn);
    let allBoxes = document.getElementsByClassName("contactToggleBox");
    for (let i=0; i<allBoxes.length; i++){
      allBoxes[i].className = "contactToggleBox contactToggleBox--hidden";
    console.log(allBoxes);
    }
    if (box.className === "contactToggleBox") {
      box.className += " contactToggleBox--hidden";
    } else {
      box.className = "contactToggleBox";
    }
}