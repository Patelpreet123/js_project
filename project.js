const button = document.getElementById('b');
const countDisplay = document.getElementById('c');
let cnt = 0;

button.addEventListener('click', function() {
    cnt++;
    countDisplay.textContent = cnt;
});