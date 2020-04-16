// js version old
// function contactBoxToggle(event) {
//   let btn = event.target.getAttribute("linked-to");
//   let box = document.getElementById(btn);
//   let allBoxes = document.getElementsByClassName("contactToggleBox");
//   if (box.className === "contactToggleBox") {
//     for (let i = 0; i < allBoxes.length; i++) {
//       allBoxes[i].className = "contactToggleBox";
//     }
//     box.className += " contactToggleBox--open";
//   } else {
//     for (let i = 0; i < allBoxes.length; i++) {
//       allBoxes[i].className = "contactToggleBox";
//     }
//   }
// }



//js version
let allBtns = document.querySelectorAll(".mainConversion__btn");
allBtns.forEach((btn) => {
  btn.addEventListener("click",
    function() {contactBoxToggle(event)});
});

function contactBoxToggle(event) {
  let openBoxes = document.querySelectorAll(".mainConversion__contactToggleBox--open");
  let targetBox = event.target
    .closest(".mainConversion")
    .querySelector(".mainConversion__contactToggleBox");
  if (!targetBox.classList.contains("mainConversion__contactToggleBox--open")) {
    targetBox.classList.add("mainConversion__contactToggleBox--open");
    targetBox.classList.remove("mainConversion__contactToggleBox--close");
  }
  openBoxes.forEach((box) => {
    box.classList.remove("mainConversion__contactToggleBox--open");
    box.classList.add("mainConversion__contactToggleBox--close");
  });
}



// // jQuery version 
// $("a.mainConversion__btn").click(function(){
//   $("a.mainConversion__btn").closest(".mainConversion").find("div.mainConversion__contactToggleBox").removeClass("mainConversion__contactToggleBox--hidden");
//   $("a.mainConversion__btn").closest(".mainConversion").find("div.mainConversion__contactToggleBox").toggleClass("mainConversion__contactToggleBox--open mainConversion__contactToggleBox--close");
// });
