// Getting the Current Day of the week
const currentDay = document.getElementById("currentDayOfTheWeek");
let DaysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dateToday = new Date();
let dayToday = dateToday.getDay();
currentDay.innerHTML = `Today is <span>${DaysOfWeek[dayToday]}</span>`;

// Getting the Current UTC Timestamp
const currentTime = document.getElementById("currentUTCTime");
let newTime = new Date().toUTCString();
currentTime.innerHTML = newTime;
