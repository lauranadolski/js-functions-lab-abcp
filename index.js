// write your code below!

function happyHolidays() {
  return ["Happy holidays!"];
}

function happyHolidaysTo(firstname){
  return [`Happy Holidays, ${firstname}!`];
}

function happyHolidayTo(holiday, name) {
  return [`Happy ${holiday}, ${name}!`];
}

function holidayCountdown(holiday, daysremaining){
 if (daysremaining > 1){
  return [`It's ${daysremaining} days until ${holiday}!`];
   
 }
  
else if (daysremaining === 1){
  return [`It's ${daysremaining} day until ${holiday}!`];
}
}