const dayNumber = Math.floor(Math.random() *10);

let dayName;

(dayNumber === 0) ? dayName = 'Sunday' : (
    (dayNumber === 1) ? dayName = 'Monday' : (
        (dayNumber === 2) ? dayName = 'Tuesday' : (
            (dayNumber === 3) ? dayName = 'Wednesday' : (
                (dayNumber === 4) ? dayName = 'Thursday' : (
                    (dayNumber === 5) ? dayName = 'Friday' : (
                        (dayNumber === 6) ? dayName = 'Saturday' : dayName = 'invalid day number'
                    )
                )
            )

        )
    )
);

console.log(`Day Number is ${dayNumber}, so day name is ${dayName}`);