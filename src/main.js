import { currentTime } from './utils/time.js'
import './style.css'

console.log("VITE_TEMP_KEY: ", import.meta.env.VITE_TEMP_KEY);

setInterval(() => {
  document.querySelector('#app').textContent = currentTime();
}, 1000);
