var currentDay = document.querySelector("#currentDay");
var currentTime = moment();
var pastTime =;
var currentTime =;
var futureTime =;
//This is supposed to display the current day on line 30 of the html
currentDay.textContent = currentTime.format("dddd, MMMM Do YYYY, h:mm:ss a");




