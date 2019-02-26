// JavaScript For FCC - Documentation page

// Animate
function animateIt(elem) {
  $(".main-section").hide();
  $("#" + elem).show();
}

function onLoad() {
  document.getElementById('introduction').style.display = 'block';
};

