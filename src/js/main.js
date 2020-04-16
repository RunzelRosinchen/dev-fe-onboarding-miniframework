/* js version old
function contactBoxToggle(event) {
  let btn = event.target.getAttribute("linked-to");
  let box = document.getElementById(btn);
  let allBoxes = document.getElementsByClassName("contactToggleBox");
  if (box.className === "contactToggleBox") {
    for (let i = 0; i < allBoxes.length; i++) {
      allBoxes[i].className = "contactToggleBox";
    }
    box.className += " contactToggleBox--open";
  } else {
    for (let i = 0; i < allBoxes.length; i++) {
      allBoxes[i].className = "contactToggleBox";
    }
  }
}*/

/* js version */

function contactBoxToggle(event) {
  let closeEvent = new CustomEvent("close");
  let allBoxes = [].slice.call(
    document.querySelectorAll(".mainConversion__contactToggleBox")
  );
  let box = [].slice.call(
    event.target
      .closest(".mainConversion")
      .getElementsByClassName("mainConversion__contactToggleBox")
  );
  allBoxes = allBoxes.filter(function (item) {
    return !box.includes(item);
  });
  allBoxes.forEach((boxes) => {
    boxes.addEventListener("close", function () {
      boxes.className = "mainConversion__contactToggleBox";
    });
    boxes.dispatchEvent(closeEvent);
  });
  if (box[0].className === "mainConversion__contactToggleBox") {
    box[0].classList.add("mainConversion__contactToggleBox--open");
  } else {
    box[0].classList.remove("mainConversion__contactToggleBox--open");
  }
}

/* jQuery version
$("a.mainConversion__btn").click(function(){
  $("div.contactToggleBox").toggle();
});
*/
