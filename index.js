const month = document.getElementById("month-name");
const day = document.getElementById("day-name");
const date = document.getElementById("day-number");
const year = document.getElementById("year");

const today = new Date();
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const allMonths = ["January","February","March","April","May","June","July","August","September","October","Novermber","December"]


date.innerHTML =(today.getDate()<10?"0":"")+ today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()] ;
year.innerHTML = today.getFullYear();
