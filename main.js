// Variables
const container = document.querySelector(".container");

const formBoxSwap = document.getElementById("formSwap");
const num1 = document.getElementById("numberA");
const num2 = document.getElementById("numberB");
const submitBtn = document.getElementById("submit_btn");
const forSwape = document.getElementById("forSwapeNumber");

const formPalindrome = document.getElementById("formPalindrome");
const palindromeCheck = document.getElementById("palindromeCheck");
const checkPalindromeBtn = document.getElementById("checkPalindromeBtn");
const forPalindrome = document.getElementById("forPalindrome");
const message = document.querySelector(".mssg");

const formOddEven = document.getElementById("formOddEven");
const oddEvenInput = document.getElementById("oddEvenCheck");
const checkOddEven = document.getElementById("checkOddEven");
const forOddEven = document.getElementById("forOddEven");
const messageOE = document.querySelector(".mssgOE");

let countTime = 3;

// Functions
function errorMssg(...inputs) {
  let hasError = false;
  inputs.forEach(i => {
    if (!i.value) {
      i.classList.add("error");
      hasError = true;
      setTimeout(() => i.classList.remove("error"), 2000);
    }
  });
  return hasError;
}

function swapNumber(x, y) {
  let temp = x.value;
  x.value = y.value;
  y.value = temp;
}

function checkPalindrome(value) {
  let tempArrReverse = value.split("").reverse().join("");
  if (value === tempArrReverse) {
    message.style.display = "block";
    message.classList.add("green");
    message.textContent = "Palindrome";
  } else {
    message.style.display = "block";
    message.classList.add("red");
    message.textContent = "Not Palindrome";
  }
}

function checkEvenOdd(input) {
  if (input.value % 2 === 0) {
    messageOE.style.display = "block";
    messageOE.classList.add("green");
    messageOE.textContent = "Even";
  } else {
    messageOE.style.display = "block";
    messageOE.classList.add("red");
    messageOE.textContent = "Odd";
  }
}

// Navigation
forPalindrome.addEventListener("click", () => {
  container.style.display = "none";
  formBoxSwap.style.display = "none";
  formPalindrome.style.display = "flex";
});

forSwape.addEventListener("click", () => {
  container.style.display = "none";
  formBoxSwap.style.display = "flex";
});

forOddEven.addEventListener("click", () => {
  container.style.display = "none";
  formBoxSwap.style.display = "none";
  formPalindrome.style.display = "none";
  formOddEven.style.display = "flex";
});

// Palindrome Event
checkPalindromeBtn.addEventListener("click", e => {
  e.preventDefault();
  if (errorMssg(palindromeCheck)) return;

  checkPalindrome(palindromeCheck.value);

  palindromeCheck.disabled = true;
  checkPalindromeBtn.disabled = true;

  let timer = setInterval(() => {
    checkPalindromeBtn.innerText = " " + countTime;
    countTime--;
    if (countTime < 0) clearInterval(timer);
  }, 1000);

  setTimeout(() => {
    message.style.display = "none";
    message.textContent = "";
    checkPalindromeBtn.innerText = "Check Palindrome";
    palindromeCheck.value = "";
    palindromeCheck.disabled = false;
    checkPalindromeBtn.disabled = false;
    countTime = 3;
  }, 4000);
});

// Swap Event
submitBtn.addEventListener("click", e => {
  e.preventDefault();
  if (errorMssg(num1, num2)) return;

  swapNumber(num1, num2);
  num1.classList.add("swapped");
  num2.classList.add("swapped");
  num1.disabled = true;
  num2.disabled = true;
  submitBtn.disabled = true;

  let timer = setInterval(() => {
    submitBtn.innerText = " " + countTime;
    countTime--;
    if (countTime < 0) clearInterval(timer);
  }, 1000);

  setTimeout(() => {
    formBoxSwap.reset();
    num1.disabled = false;
    num2.disabled = false;
    submitBtn.disabled = false;
    submitBtn.innerText = "Submit";
    num1.classList.remove("swapped");
    num2.classList.remove("swapped");
    countTime = 3;
  }, 4000);
});

// Odd/Even Event
checkOddEven.addEventListener("click", e => {
  e.preventDefault();
  if (errorMssg(oddEvenInput)) return;

  checkEvenOdd(oddEvenInput);

  oddEvenInput.disabled = true;
  checkOddEven.disabled = true;

  let timer = setInterval(() => {
    checkOddEven.innerText = " " + countTime;
    countTime--;
    if (countTime < 0) clearInterval(timer);
  }, 1000);

  setTimeout(() => {
    messageOE.style.display = "none";
    messageOE.textContent = "";
    checkOddEven.innerText = "Check";
    oddEvenInput.value = "";
    oddEvenInput.disabled = false;
    checkOddEven.disabled = false;
    countTime = 3;
  }, 4000);
});
