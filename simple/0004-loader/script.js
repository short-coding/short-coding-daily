const percentageEl = document.querySelector('.percentage');
const loaderLabelEl = document.querySelector('.loader-label');
let count = 0;

function startLoading() {
  count = 0;
  percentageEl.textContent = '0%';
  loaderLabelEl.textContent = 'Loading...';

  const interval = setInterval(() => {
    count += Math.floor(Math.random() * 10) + 1;
    if (count >= 100) {
      count = 100;
      percentageEl.textContent = 'Done';
      loaderLabelEl.textContent = 'Finished';
      clearInterval(interval);
      setTimeout(startLoading, 2000);
    } else {
      percentageEl.textContent = count + '%';
    }
  }, 200);
}

startLoading();