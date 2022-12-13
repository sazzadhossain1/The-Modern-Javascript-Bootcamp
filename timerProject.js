class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.timeLeft = 30;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }
  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
    clearInterval(timer);
  };

  pause = () => {
    clearInterval(this.interval);
  };
  tick = () => {
    const timeRemaining = parseFloat(this.durationInput.value);
    this.durationInput.value = timeRemaining - 1;
  };
}

const durationInput = document.querySelector("#dutation");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
// timer.start();

// 20 number ta abar korte hobe //
