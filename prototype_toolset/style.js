function onLoad() {
    loadModule(1);
}

function loadModule(id) {
    // Hide all elements with class="tabcontent" by default */
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Show the specific tab content
    document.getElementById(id).style.display = "block";
}