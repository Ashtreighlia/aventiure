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
  if (w < 1280) {
    document.body.innerHTML =
      "<div style='margin-top: 40%;'><p style='text-align: center;'>This site is not optimized for smaller screen widths - yet.</p><h1 style='border-style: none; margin-top: -20px;'>Sowwy!</h1></div>";
    tooSmall = true;
  } else {
    if (tooSmall) {
      window.location.reload();
    }
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