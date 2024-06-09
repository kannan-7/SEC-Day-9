// pacman styling orientation
// right/default - transform: rotate(0deg) scaleX(1);
// down - transform: rotate(90deg) scaleX(1);
// up - transform: rotate(-90deg) scaleX(1);
// left - transform: rotate(0deg) scaleX(-1);

// detect keypress
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    console.log("Right");
    //   assing pacman styling
    pacman.style.transform = "rotate(0deg) scaleX(1)";
  } else if (event.key === "ArrowLeft") {
    console.log("Left");
    //   assing pacman styling
    pacman.style.transform = "rotate(0deg) scaleX(-1)";
  } else if (event.key === "ArrowUp") {
    console.log("Up");
    //   assing pacman styling
    pacman.style.transform = "rotate(-90deg) scaleX(1)";
  } else if (event.key === "ArrowDown") {
    console.log("Down");
    //   assing pacman styling
    pacman.style.transform = "rotate(90deg) scaleX(1)";
  }
});

const up = document.querySelector("#up");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const down = document.querySelector("#down");
const pacman = document.querySelector("#pacman");

up.addEventListener("click", function () {
  console.log("See Up");
  pacman.style.transform = "rotate(-90deg) scaleX(1)";
  const currentTop = parseInt(pacman.style.top || 0);
  const newTop = currentTop - 50;
  if (newTop >= 0) {
    pacman.style.top = newTop + "px";
  } else {
    pacman.style.top = newTop = 0 + "px";
  }
});
left.addEventListener("click", function () {
  console.log("See Left");
  pacman.style.transform = "rotate(0deg) scaleX(-1)";
  const currentLeft = parseInt(pacman.style.left || 0);
  const newLeft = currentLeft - 50;
  if (newLeft >= 0) {
    pacman.style.left = newLeft + "px";
  } else {
    pacman.style.left = newLeft = 0 + "px";
  }
});
right.addEventListener("click", function () {
  const currentLeft = parseInt(pacman.style.left || 0);
  const newLeft = currentLeft + 50;
  console.log(currentLeft, newLeft);
  console.log("See Right");
  pacman.style.transform = "rotate(0deg) scaleX(1)";
  pacman.style.left = newLeft + "px";
});
down.addEventListener("click", function () {
  console.log("See Down");
  pacman.style.transform = "rotate(90deg) scaleX(1)";
  const currentTop = parseInt(pacman.style.top || 0);
  const newTop = currentTop + 50;
  pacman.style.top = newTop + "px";
});

// assignment for pacman
// 1. assign action to the button to execute the pacman movement similar to the keypress
// 2. pacman should move with 50px distant in the direction of the button or keypress
// BONUS - pacman should not move outside the game area
