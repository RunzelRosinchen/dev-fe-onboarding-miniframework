function contactToggle(event) {
    let btn=event.target.getAttribute("linked-to");
    let box = document.getElementById(btn);
    if (box.className === "contactToggleBox") {
      box.className += " contactToggleBox--hidden";
    } else {
      box.className = "contactToggleBox";
    }
}