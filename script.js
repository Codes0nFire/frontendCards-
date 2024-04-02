var but = document.querySelector(".card button  ");
var h3 = document.querySelector(".card h3  ");
var card = document.querySelector(".card");

var ok = 0;

but.addEventListener("click", function () {
  if (ok == 0) {
    but.innerHTML = "SENding......";
    but.style.backgroundColor = "black";

    setTimeout(function () {
      h3.innerHTML = "DOST";
      h3.style.color = " green";
      but.innerHTML = "REMOV FRAIND";
      but.style.backgroundColor = "red";
    }, 4000);

    ok = 1;
  } else {
    h3.innerHTML = "ANJAN";
    h3.style.color = " rgb(85, 0, 255)";
    but.innerHTML = "ADD FRAIND";

    but.style.backgroundColor = "rgb(86, 67, 227)";
    ok = 0;
  }
});

var b = document.querySelector(".zero>button  ");
var h = document.querySelector(".zero>h3  ");
var c = document.querySelector(".zero");

var zero = 0;

b.addEventListener("click", function () {
  if (zero == 0) {
    b.innerHTML = "SENDing";
    b.style.backgroundColor = "black";
    setTimeout(function () {
      h.innerHTML = "DOST";
      h.style.color = " green";
      b.innerHTML = "REMOV FRAIND";
      b.style.backgroundColor = "red";
    }, 3000);

    zero = 1;
  } else {
    h.innerHTML = "ANJAN";
    h.style.color = " rgb(85, 0, 255)";
    b.innerHTML = "ADD FRAIND";

    b.style.backgroundColor = "rgb(86, 67, 227)";
    zero = 0;
  }
});

var bounce = document.querySelector(".one>button  ");
var horse = document.querySelector(".one>h3  ");
var cat = document.querySelector(".one");

var one = 0;

bounce.addEventListener("click", function () {
  if (one == 0) {
    bounce.innerHTML = "SENDing....";
    bounce.style.backgroundColor = "black";
    setTimeout(function () {
      horse.innerHTML = "DOST";
      horse.style.color = " green";
      bounce.innerHTML = "REMOV FRAIND";
      bounce.style.backgroundColor = "red";
    }, 4000);
    one = 1;
  } else {
    horse.innerHTML = "ANJAN";
    horse.style.color = " rgb(85, 0, 255)";
    bounce.innerHTML = "ADD FRAIND";

    bounce.style.backgroundColor = "rgb(86, 67, 227)";
    one = 0;
  }
});

var black = document.querySelector(".two>button  ");
var hello = document.querySelector(".two>h3  ");
var cui = document.querySelector(".two");

var two = 0;

black.addEventListener("click", function () {
  if (two == 0) {
    black.innerHTML = "SENDing....";
    black.style.backgroundColor = "black";
    setTimeout(function () {
      hello.innerHTML = "DOST";
      hello.style.color = " green";
      black.innerHTML = "REMOV FRAIND";
      black.style.backgroundColor = "red";
    }, 3000);
    two = 1;
  } else {
    hello.innerHTML = "ANJAN";
    hello.style.color = " rgb(85, 0, 255)";
    black.innerHTML = "ADD FRAIND";

    black.style.backgroundColor = "rgb(86, 67, 227)";
    two = 0;
  }
});

var red = document.querySelector(".three>button  ");
var bolo = document.querySelector(".three>h3  ");
var iconic = document.querySelector(".three");

var three = 0;

red.addEventListener("click", function () {
  if (three == 0) {
    red.innerHTML = "SENDing....";
    red.style.backgroundColor = "black";

    setTimeout(function () {
      bolo.innerHTML = "DOST";
      bolo.style.color = " green";
      red.innerHTML = "REMOV FRAIND";
      red.style.backgroundColor = "red";
      three = 1;
    }, 4000);
  } else {
    bolo.innerHTML = "ANJAN";
    bolo.style.color = " rgb(85, 0, 255)";
    red.innerHTML = "ADD FRAIND";

    red.style.backgroundColor = "rgb(86, 67, 227)";
    three = 0;
  }
});

var rose = document.querySelector(".four>button  ");
var kya = document.querySelector(".four>h3  ");
var picnic = document.querySelector(".four");

var four = 0;

rose.addEventListener("click", function () {
  if (four == 0) {
    rose.innerHTML = "SENDing...";
    rose.style.backgroundColor = "black";
    setTimeout(function () {
      kya.innerHTML = "DOST";
      kya.style.color = " green";
      rose.innerHTML = "REMOV FRAIND";
      rose.style.backgroundColor = "red";
      four = 1;
    }, 1000);
  } else {
    kya.innerHTML = "ANJAN";
    kya.style.color = " rgb(85, 0, 255)";
    rose.innerHTML = "ADD FRAIND";

    rose.style.backgroundColor = "rgb(86, 67, 227)";
    four = 0;
  }
});

var open = document.querySelector("#open");
var arrow = document.querySelector("#arrow");

arrow.addEventListener("click", function () {
  open.style.top = "-200%";
});

var cursor = document.querySelector("#cursor");

window.addEventListener("mousemove", function (elem) {
  cursor.style.left = elem.x + "px";
  cursor.style.top = elem.y + "px";
});
