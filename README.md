# HW-13-mini-calender

## Hosted link :- https://rohitdhawale07.github.io/HW-13-mini-calender/
This is the simple project of creating a mini calender.
The date, week day, year and day is showed as per the todays date using js concepts.
Firstly we created a html content using below tags.
## HTML code
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Calender</title>
    <link rel="stylesheet" href="./style.css">
    <script defer src="./index.js"></script>
</head>
<body>
    <div class="calendar-container">
        <p class="month-name" id="month-name">September</p>
        <p class="day-name" id="day-name">Friday</p>
        <p class="day-number" id="day-number">1</p>
        <p class="year" id="year">2023</p>
      </div>

    
</body>
</html>
```
We applied simple css to the html tags and content.
## CSS Code
```
body {
    margin: 0;
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    font-family: cursive;
    background-color: rgb(103, 241, 85);
}

.calendar-container {
    background-color: white;
    width: 300px;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}
.month-name {
    margin: 0;
    background-color: rgb(240, 73, 12);
    color: white;
    padding: 10px;
    font-size: 30px;
    font-weight: bold;
}
.day-name {
    font-size: 20px;
    color: rgb(240, 17, 17);
}
.day-number {
    font-size: 80px;
    margin: 0;
    font-weight: bold;
}
.year {
    margin: 20px 0;
    font-size: 20px;
    color: rgb(236, 21, 21);
    font-weight: 500;
}
```
While coming to the js part we used new Date() method.
Get all the elements using GetElementById() method.
Then added innerHtml method to the above id's.
for Week day we used array of week days and for month we used array of months.
## CSS code
```
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
```

