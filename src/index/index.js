//window.onbeforeunload = function () {
//  window.scrollTo(0, 0);
//};

function amountscrolled() {
  var scrollTop = window.pageYOffset;
  var height = window.innerHeight;
  scrollTop = 100 - (scrollTop / height) * 100;
  if (scrollTop < 0) {
    scrollTop = 0;
  }
  document.getElementById("parallax").style.opacity = scrollTop + "%";
}

window.addEventListener(
  "scroll",
  function () {
    amountscrolled();
  },
  false
);

var tooSmall = false;
function checkWindowSize() {
  var w = window.innerWidth;
  if (w < 1280 & !tooSmall) {
    alert("This site is not optimized for smaller screen widths - sowwy!!");
    tooSmall = true;
  }
}

checkWindowSize();
addEventListener(
  "resize",
  function () {
    checkWindowSize();
  },
  false
);