

// Creating a Date Object:
const currentDate1 = new Date(); // Current date and time
const specificDate = new Date('2023-11-04T12:00:00'); // Specific date and time

// Getting Date Components:
const year1 = currentDate1.getFullYear();
const month1 = currentDate1.getMonth(); // 0-indexed (0 for January, 11 for December)
const day1 = currentDate1.getDate();
const hours1 = currentDate1.getHours();
const minutes1 = currentDate1.getMinutes();
const seconds1 = currentDate1.getSeconds();
const milliseconds1 = currentDate1.getMilliseconds();

// Setting Date Components:
currentDate1.setFullYear(2024);
currentDate1.setMonth(3); // April (0-indexed)
currentDate1.setDate(15);
currentDate1.setHours(14);
currentDate1.setMinutes(30);
currentDate1.setSeconds(0);
currentDate1.setMilliseconds(500);

// Formatting Dates:
const formattedDate1 = currentDate1.toDateString();
const formattedTime1 = currentDate1.toTimeString();
const localizedDate1 = currentDate1.toLocaleDateString('en-US');
const localizedTime1 = currentDate1.toLocaleTimeString('en-US');
const utcString1 = currentDate1.toUTCString();

// Getting Time in Milliseconds:
const timestamp1 = currentDate1.getTime();

// Date Arithmetic:
const futureDate = new Date(currentDate1.getTime() + 86400000); // Add one day (24 hours) to the current date

// Comparing Dates:
const date1 = new Date('2023-11-04');
const date2 = new Date('2023-11-05');
if (date1 < date2) {
    console.log('date1 is earlier than date2');
}

// Example Program
// Create a new Date object representing the current date and time
const currentDate2 = new Date();

// Get various date components
const year2 = currentDate2.getFullYear();
const month2 = currentDate2.getMonth(); // 0-indexed (0 for January, 11 for December)
const day2 = currentDate2.getDate();
const hours2 = currentDate2.getHours();
const minutes2 = currentDate2.getMinutes();
const seconds2 = currentDate2.getSeconds();
const milliseconds2 = currentDate2.getMilliseconds();

// Print the current date and time
console.log('Current Date and Time:', currentDate2);

// Print the date components
console.log('Year:', year2);
console.log('Month:', month2); // Note: January is 0, so add 1 to get the actual month
console.log('Day:', day2);
console.log('Hours:', hours2);
console.log('Minutes:', minutes2);
console.log('Seconds:', seconds2);
console.log('Milliseconds:', milliseconds2);

// Set the date components
currentDate2.setFullYear(2024);
currentDate2.setMonth(3); // April (0-indexed)
currentDate2.setDate(15);
currentDate2.setHours(14);
currentDate2.setMinutes(30);
currentDate2.setSeconds(0);
currentDate2.setMilliseconds(500);

// Print the updated date and time
console.log('Updated Date and Time:', currentDate2);

// Format the date as a string
const formattedDate2 = currentDate2.toDateString();
console.log('Formatted Date:', formattedDate2);

// Format the time as a string
const formattedTime2 = currentDate2.toTimeString();
console.log('Formatted Time:', formattedTime2);

// Format the date and time in a localized way
const localizedDate2 = currentDate2.toLocaleDateString('en-US');
const localizedTime2 = currentDate2.toLocaleTimeString('en-US');
console.log('Localized Date:', localizedDate2);
console.log('Localized Time:', localizedTime2);
