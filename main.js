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
  console.log("Hallooo");
  hart1.style.zIndex = "1";
}

function show2() {
  console.log("Hallooo");
  hart2.style.zIndex = "1";
}

function show3() {
  console.log("Hallooo");
  hart3.style.zIndex = "1";
}

function show4() {
  console.log("Hallooo");
  hart4.style.zIndex = "1";
}

function show5() {
  console.log("Hallooo");
  hart5.style.zIndex = "1";
}

function reset() {
  document.getElementById('hartje1').style.zIndex = "-1";
  document.getElementById('hartje2').style.zIndex = "-1";
  document.getElementById('hartje3').style.zIndex = "-1";
  document.getElementById('hartje4').style.zIndex = "-1";
  document.getElementById('hartje5').style.zIndex = "-1";
}


figure1.addEventListener("mouseover",show1);
figure2.addEventListener("mouseover",show2);
figure3.addEventListener("mouseover",show3);
figure4.addEventListener("mouseover",show4);
figure5.addEventListener("mouseover",show5);

figure1.addEventListener("mouseout",reset);
figure2.addEventListener("mouseout",reset);
figure3.addEventListener("mouseout",reset);
figure4.addEventListener("mouseout",reset);
figure5.addEventListener("mouseout",reset);
