import './index.css'

const btnLight = document.getElementById('light');
const btnDark = document.getElementById('dark');

btnLight.addEventListener('click', function () { 
    document.documentElement.classList.remove('dark');
 })

btnDark.addEventListener('click', function () { 
    document.documentElement.classList.add('dark');
 })

