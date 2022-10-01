//window.onbeforeunload = function () {
//  window.scrollTo(0, 0);
//};

/* Changes the opacity of the title image while scrolling down */
var windowHeight = window.innerHeight;
function amountscrolled() {
  var position = window.pageYOffset;
  newOpacity = 100 - (position / windowHeight) * 100;
  if (newOpacity < 0) {
    newOpacity = 0;
  }
  document.getElementById("parallax").style.opacity = newOpacity + "%";
}

window.addEventListener(
  "scroll",
  function () {
    amountscrolled();
  },
  false
);

/* Scrolls down to the content if the title image is being clicked */
async function scrollDown() {
  for (let i = window.pageYOffset; i <= windowHeight; i += 40) {
    if (i > windowHeight) {
      i = windowHeight;
    }
    await new Promise((r) => setTimeout(r, 1));
    window.scrollTo(0, i);
  }
  //very dirty fix for not scrolling to the bottom of the page
  window.scrollTo(0, windowHeight);
}