const img = document.querySelector("#getImg");
const p = document.querySelector("#text");

const rare1imgs = [
  "rare1-1.png",
  "rare1-2.png",
  "rare1-3.png",
  "rare1-4.png",
  "rare1-5.png",
];

function rare1() {
  const num = Math.floor(Math.random() * rare1imgs.length);
  img.src = "image/" + rare1imgs[num];
  p.textContent = "レア度１";
}

function rare2() {
  var num = Math.floor(Math.random() * 4) + 1;
  switch (num) {
    case 1:
      img.src = "image/rare2-1.png";
      p.innerHTML = "レア度2";
      break;
    case 2:
      img.src = "image/rare2-2.png";
      p.innerHTML = "レア度2";
      break;
    case 3:
      img.src = "image/rare2-3.png";
      p.innerHTML = "レア度2";
      break;
    case 4:
      img.src = "image/rare2-4.png";
      p.innerHTML = "レア度2";
      break;
  }
}

function rare3() {
  var num = Math.floor(Math.random() * 3) + 1;
  switch (num) {
    case 1:
      img.src = "image/rare3-1.png";
      p.innerHTML = "レア度3";
      break;
    case 2:
      img.src = "image/rare3-2.png";
      p.innerHTML = "レア度3";
      break;
    case 3:
      img.src = "image/rare3-3.png";
      p.innerHTML = "レア度3";
      break;
  }
}

function rare4() {
  var num = Math.floor(Math.random() * 2) + 1;
  switch (num) {
    case 1:
      img.src = "image/rare4-1.png";
      p.innerHTML = "レア度4";
      break;
    case 2:
      img.src = "image/rare4-2.png";
      p.innerHTML = "レア度4";
      break;
  }
}

function rare5() {
  img.src = "image/rare5.png";
  p.innerHTML = "レア度5";
}

function gacha(a) {
  if (a <= 100 && a >= 99) {
    rare5();
  } else if (a <= 98 && a >= 91) {
    rare4();
  } else if (a <= 90 && a >= 71) {
    rare3();
  } else if (a <= 70 && a >= 41) {
    rare2();
  } else {
    rare1();
  }
}

document.querySelector("#btn").onclick = function () {
  var num = Math.floor(Math.random() * 100) + 1;
  gacha(num);
};
