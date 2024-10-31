const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval
// const startBtn = document.querySelector('#start-btn');
const startBtn = document.querySelector('#start-btn');
let time = document.querySelector('#time');
let toastElement = document.querySelector('div#toast');
let closeToast = document.querySelector('#close-toast');
const toastMsg = document.getElementById('toast-message');

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
// ITERATION 1: Add event listener to the start button

// Your code goes here ...
startBtn.addEventListener('click', () => {
  startCountdown();
});

// ITERATION 2: Start Countdown
function startCountdown() {
  console.log('startCountdown called!');
  // setInterval

  startBtn.disabled = true;
  let timer = setInterval(() => {
    remainingTime -= 1;
    time.textContent = remainingTime;
    console.log(remainingTime)
    if (remainingTime <= 10) {
    toastElement.classList.add('show');
toastMsg.innerText = '⏰ Final countdown! ⏰';
    }
    if (remainingTime === 5) {
      toastMsg.innerText = 'Start the engines! 💥';
    }
    if (remainingTime === 0) {
      clearInterval(timer);
      showToast();
    }
  }, 1000);

  // Your code goes here ...
}

// ITERATION 3: Show Toast
function showToast(message) {
  if (remainingTime === 0) {
    toastElement.classList.add('show');
  }
  console.log('showToast called!');
  let removeToast = setTimeout(() => {
    toastElement.classList.remove('show');
  }, 3000);
  // Your code goes here ...
}

// BONUS: ITERATION 4: TOAST CLOSE BUTTON
closeToast.addEventListener('click', () => {
  toastElement.classList.remove('show');
});
// Your code goes here ...
