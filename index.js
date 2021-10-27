const input = document.querySelector('input');
const p = document.querySelector('p');

const func = function(e) {
    p.innerText = e.target.value;
}

input.addEventListener('keypress', debounce(func, 300));

function debounce(f, t) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && ((this.lastCall - previousCall) <= t)) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  }
}