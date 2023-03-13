
const dayNumber = Math.floor(Math.random() *10);

let dayName;

switch (dayNumber) {
    case 0:
        dayName = 'Sunday';
        break;
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'invalid day number';
        break;
}

console.log(`Day Number is ${dayNumber}, so day name is ${dayName}`);