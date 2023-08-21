let yearNow = new Date().getFullYear();
let nextYear = yearNow + 1;
console.log(yearNow);

document.querySelector(
  ".next-year"
).innerHTML = `Tech Masters Event ${nextYear}`;

let countDownDate = new Date(`${nextYear}-01-01`).getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;

  if (dateDiff <= 0) {
    clearInterval(counter);
  } else {
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".days .value").innerHTML =
      days < 10 ? `0${days}` : days;
    document.querySelector(".hours .value").innerHTML =
      hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes .value").innerHTML =
      minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds .value").innerHTML =
      seconds < 10 ? `0${seconds}` : seconds;
  }
}, 1000);

let progressSpans = document.querySelectorAll(".our-skills .line span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .num ");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop - 50) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

//
// document.querySelector(".features-box").onmouseover = function () {
//   document.querySelector(".features-box .image::after").stylsheet.removeProperty("border-color");
// };

// start Dark mode

// x=document.getElementsByClassName("top-dots")[0].style.backgroundImage;
// console.log(x);

document.getElementById("button1").addEventListener("click", changeThemeIcon);
document.getElementById("button1").addEventListener("click", changeTheme);

function changeThemeIcon() {
  var icon = document.getElementById("theme-icon");
  if (icon.classList.contains("fa-sun")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
}

function changeTheme() {
  let rootValues = document.querySelector(":root");
  let allValues = getComputedStyle(rootValues);
  let mainColorValue = allValues.getPropertyValue("--main-color");

  let img_1 = document.getElementsByClassName("top-dots")[0];
  let img_2 = document.getElementsByClassName("bottom-dots")[0];
  let img_3 = document.getElementsByClassName("top-dots")[1];
  let img_4 = document.getElementsByClassName("bottom-dots")[1];
  let img_5 = document.getElementById("img1");
  let img_6 = document.getElementById("img2");
  let img_7 = document.getElementById("img3");
  let img_8 = document.getElementById("img4");

  if (mainColorValue == "#cf9c63") {
    rootValues.style.setProperty("--main-color", "#2196f3");
    rootValues.style.setProperty("--main-color-alt", "#1787e0");

    rootValues.style.setProperty("--main-text-color", "#000");
    rootValues.style.setProperty("--main-text-color-50", "#777");

    rootValues.style.setProperty("--background", "#fff");
    rootValues.style.setProperty("--background-alt", "#f9f9f9");
    rootValues.style.setProperty("--background-alt-50", "#f6f5f5");
    rootValues.style.setProperty("--background-dark", "#ececec");

    rootValues.style.setProperty("--shadow-light", " 0 2px 15px #0000001a");
    rootValues.style.setProperty("--shadow-light-50", "0 2px 15px #00000033");
    rootValues.style.setProperty(
      "--shadow-dark",
      "0 12px 20px 0 rgb(0 0 0 / 13%), 0 2px 4px 0 rgb(0 0 0 / 12%)"
    );

    let mainTitleP = document.querySelectorAll(".main-title p");

    for (let i = 0; i < mainTitleP.length; i++) {
      mainTitleP[i].style.border = "2px solid #000";

      mainTitleP[i].addEventListener("mouseover", function () {
        this.style.border = "20px solid transparent ";
      });

      mainTitleP[i].addEventListener("mouseout", function () {
        this.style.border = "2px solid #000";
      });
    }

    img_1.style.backgroundImage = "url(../images/dots.png)";
    img_2.style.backgroundImage = "url(../images/dots.png)";
    img_3.style.backgroundImage = "url(../images/dots.png)";
    img_4.style.backgroundImage = "url(../images/dots.png)";
    img_5.src = "images/hosting-basic1.png";
    img_6.src = "images/hosting-advanced1.png";
    img_7.src = "images/hosting-professional1.png";
    img_8.src = "images/discount1.png";
  } else {
    // dark
    rootValues.style.setProperty("--main-color", "#cf9c63");
    rootValues.style.setProperty("--main-color-alt", "#aa7a43");

    rootValues.style.setProperty("--main-text-color", "#fff");
    rootValues.style.setProperty("--main-text-color-50", "#b0afaf");

    rootValues.style.setProperty("--background", "#2d2a2a");
    rootValues.style.setProperty("--background-alt", "#332f2f");
    rootValues.style.setProperty("--background-alt-50", "#393838");
    rootValues.style.setProperty("--background-dark", "#232222");

    rootValues.style.setProperty("--shadow-light", " 0 1px 25px 1px #231f21");
    rootValues.style.setProperty("--shadow-light-50", "0 1px 25px 1px #191616");
    rootValues.style.setProperty("--shadow-dark", "0 0 30px 1px #241515");

    let mainTitleP = document.querySelectorAll(".main-title p");

    for (let i = 0; i < mainTitleP.length; i++) {
      mainTitleP[i].style.border = "2px solid var(--main-color)";
    }

    img_1.style.backgroundImage = "url(../images/orange-dots.png)";
    img_2.style.backgroundImage = "url(../images/orange-dots.png)";
    img_3.style.backgroundImage = "url(../images/orange-dots.png)";
    img_4.style.backgroundImage = "url(../images/orange-dots.png)";
    img_5.src = "images/hosting-basic2.png";
    img_6.src = "images/hosting-advanced2.png";
    img_7.src = "images/hosting-professional2.png";
    img_8.src = "images/discount2.png";
  }
}
let els = document.querySelectorAll(".videos .link");

els.forEach((el) => {
  el.addEventListener("click", hoverFunc);
});
function hoverFunc() {
  let elTarget = document.getElementById("top-video-text").innerHTML;
  for (let i = 0; i < els.length; i++) {
    if (els[i].childNodes[1].innerHTML == elTarget) {
      els[i].classList.add("hov-link");
    } else {
      els[i].classList.remove("hov-link");
    }
  }
}
hoverFunc();
