window.onscroll = function() {scrollbar()};

function scrollbar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressbar").style.width = scrolled + "%";
}

hart1 = document.getElementById('hartje1');
hart2 = document.getElementById('hartje2');
hart3 = document.getElementById('hartje3');
hart4 = document.getElementById('hartje4');
hart5 = document.getElementById('hartje5');

function show1() {
  this.style.zindex = "1";
}

function reset() {
  this.style.zindex = "-1";
}


hart1.addEventListener("mouseover",show1);
hart1.addEventListener("mouseout",reset);
