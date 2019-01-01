import { saleBanner } from "./saleBanner";
import { search } from "./search";
import { dropdown } from "./dropdown";
import Siema from 'siema';

console.log("app.js is here!");

saleBanner();
search();
dropdown();

// slider
const mySiema = new Siema({
  perPage: 4,
  loop: true,
  startIndex: 4,
  duration: 1500,
  easing: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)'
});

setInterval(() => mySiema.next(), 5000);

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());