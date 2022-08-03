// 1-onload
// add class animation to logo

const logo = document.getElementById("logo");
window.onload = function () {
  logo.classList.add("active");
  
};

// 2-onmouseover 3-onmouseout 
// change color on carousel title 
var carouselTitles = document.getElementsByClassName("carousel-title");
var i;
for (i = 0; i < carouselTitles.length; i++) {
  carouselTitles[i].onmouseover = function () {
    this.style.color = "#fff";
  };
  carouselTitles[i].onmouseout = function () {
    this.style.color = "#19283f";
  };
}

// 4-click
//add accordion in section team

var headingAccordions = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < headingAccordions.length; i++) {
  headingAccordions[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var desc = this.nextElementSibling;
    if (desc.style.maxHeight) {
      desc.style.maxHeight = null;
    } else {
      desc.style.maxHeight = desc.scrollHeight + "px";
    }
  });
}
// 5-onfocus  6-onblur
// hide placeholder on input focus

var myInput = document.getElementById("my-input");

myInput.onfocus = function () {
  this.setAttribute("data-place", this.getAttribute("placeholder"));
  this.setAttribute("placeholder", "");
};
myInput.onblur = function () {
  this.setAttribute("placeholder", this.getAttribute("data-place"));
  this.setAttribute("data-place", "");
};
