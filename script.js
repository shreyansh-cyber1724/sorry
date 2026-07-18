const typingElement = document.getElementById("typing");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const secretSection = document.getElementById("secretSection");

/* =========================
   TYPING EFFECT
========================= */

const messages = [
  "I know I messed up...",
  "And honestly, I’ve been feeling bad about it.",
  "You really matter to me.",
  "So please hear me out for 2 minutes 🥲"
];

let msgIndex = 0;
let charIndex = 0;

function typeText() {

  if (msgIndex < messages.length) {

    if (charIndex < messages[msgIndex].length) {

      typingElement.innerHTML += messages[msgIndex].charAt(charIndex);

      charIndex++;

      setTimeout(typeText, 50);

    } else {

      setTimeout(() => {

        typingElement.innerHTML += "<br>";

        msgIndex++;
        charIndex = 0;

        typeText();

      }, 800);
    }
  }
}

window.onload = () => {
  typeText();
};

/* =========================
   START MUSIC
========================= */
/* =========================
   START MUSIC
========================= */

startBtn.addEventListener("click", () => {

  // Play background music
  music.play();

  // Change button text
  startBtn.innerHTML = "👇 Please scroll down... I have something to tell you";

  // Disable button after first click
  startBtn.disabled = true;

  // Change appearance
  startBtn.style.opacity = "0.8";
  startBtn.style.cursor = "default";

  // Optional: Change gradient to show it's been clicked
  startBtn.style.background =
    "linear-gradient(135deg,#6d28d9,#14b8a6)";

});
/* =========================
   NO BUTTON ESCAPE
========================= */

const funnyTexts = [
  "Still Angry 😤",
  "Are you sure? 🥲",
  "Please don't 😭",
  "You're enjoying this right?",
  "Okay this is getting scary",
  "Fine... I'll keep apologizing 😭"
];

let textIndex = 0;

function moveButton() {

  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  noBtn.innerHTML = funnyTexts[textIndex];

  textIndex++;

  if (textIndex >= funnyTexts.length) {
    textIndex = 0;
  }
}

/* Desktop Hover */
noBtn.addEventListener("mouseover", moveButton);

/* Mobile Touch */
noBtn.addEventListener("touchstart", (e) => {

  e.preventDefault();

  moveButton();

});

/* =========================
   YES BUTTON
========================= */

yesBtn.addEventListener("click", () => {

  /* Reveal Secret Section */
  secretSection.classList.remove("hidden");

  /* Smooth Scroll */
  secretSection.scrollIntoView({
    behavior: "smooth"
  });

  /* Button Update */
  yesBtn.innerHTML = "YAYYY 🥹";

  noBtn.style.display = "none";

  /* Floating Celebration */
  createHearts();

});

/* =========================
   FLOATING EMOJIS
========================= */

function createHearts() {

  for (let i = 0; i < 25; i++) {

    const heart = document.createElement("div");

    heart.innerHTML = ["✨","💜","⭐","🥹"][Math.floor(Math.random() * 4)];

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize = (Math.random() * 20 + 20) + "px";

    heart.style.zIndex = "9999";

    heart.style.pointerEvents = "none";

    heart.style.transition = "all 4s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

      heart.style.top = "-10vh";

      heart.style.opacity = "0";

    }, 100);

    setTimeout(() => {

      heart.remove();

    }, 4000);
  }
}

/* =========================
   PARALLAX EFFECT
========================= */

window.addEventListener("scroll", () => {

  const scrolled = window.scrollY;

  document.querySelector(".blur1").style.transform =
    `translateY(${scrolled * 0.1}px)`;

  document.querySelector(".blur2").style.transform =
    `translateY(${scrolled * -0.1}px)`;

});

/* =========================
   SMALL INTERACTION EFFECTS
========================= */

document.querySelectorAll("button").forEach((btn) => {

  btn.addEventListener("mousedown", () => {

    btn.style.transform = "scale(0.95)";

  });

  btn.addEventListener("mouseup", () => {

    btn.style.transform = "scale(1)";

  });

});

/* =========================
   AUTO FADE IN CHAT MESSAGES
========================= */

const chatMessages = document.querySelectorAll(".msg");

chatMessages.forEach((msg, index) => {

  msg.style.opacity = "0";
  msg.style.transform = "translateY(20px)";

  setTimeout(() => {

    msg.style.transition = "all 0.8s ease";

    msg.style.opacity = "1";

    msg.style.transform = "translateY(0px)";

  }, index * 600);

});

/* =========================
   FINAL LITTLE TOUCH
========================= */

console.log(
  "If you're reading this... yes, I really am sorry 🥲"
);