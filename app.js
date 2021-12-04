"use strict";
const btn = document.querySelector(".btn");
const text = document.getElementById("text");
const len = document.getElementById("len");
const num = document.getElementById("num");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const symbol = document.getElementById("symbol");
const copyBtn = document.getElementById("btn-copy");
const lowerCase = "abcdefghiklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numCase = "0123456789";
const symbolCase = "`!@#$%^&*()-+|=?<>[]{}";

function getCase(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function generateX() {
  let listCase = "";
  if (num.checked) {
    listCase += getCase(numCase);
  }
  if (upper.checked) {
    listCase += getCase(upperCase);
  }
  if (lower.checked) {
    listCase += getCase(lowerCase);
  }
  if (symbol.checked) {
    listCase += getCase(symbolCase);
  }

  return listCase;
}

btn.addEventListener("click", () => {
  const max = Number(len.value);
  let x = "";
  let pwd = "";
  if (
    (num.checked == false &&
      upper.checked == false &&
      lower.checked == false &&
      symbol.checked == false) ||
    len.value == ""
  ) {
    alert("please select the length or type of your password!");
  } else if (len.value < 4 || len.value > 16) {
    alert("Please select the length between 4 and 16 characters!");
  } else {
    copyBtn.classList.remove("hidden");
    for (let j = 0; j < max; j++) {
      x += generateX();
      pwd += x[Math.floor(Math.random() * x.length)];
    }
    text.value = pwd;
  }
});

copyBtn.addEventListener("click", () => {
  text.select();
  text.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Password is copied");
});
