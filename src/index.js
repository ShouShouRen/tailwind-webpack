import './index.css'

const btnLight = document.getElementById('light');
const btnDark = document.getElementById('dark');

btnLight.addEventListener('click', function () { 
    this.classList.remove('dark');
 })

btnDark.addEventListener('click', function () { 
    this.classList.remove('light');
 })

