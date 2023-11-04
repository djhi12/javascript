

// Creating a Date Object:
const currentDate = new Date(); // Current date and time
const customDate = new Date(2023, 0, 15, 10, 30, 0); // January 15, 2023, 10:30 AM

// Getting Date and Time Components:
const yearCurrent = currentDate.getFullYear();
const monthCurrent = currentDate.getMonth(); // 0 for January, 11 for December
const dayCurrent = currentDate.getDate();
const hoursCurrent = currentDate.getHours();
const minutesCurrent = currentDate.getMinutes();
const secondsCurrent = currentDate.getSeconds();
const millisecondsCurrent = currentDate.getMilliseconds();

// Setting Date and Time Components:
currentDate.setFullYear(2024);
currentDate.setMonth(3); // April (0-based)
currentDate.setDate(20);
currentDate.setHours(15);
currentDate.setMinutes(45);
currentDate.setSeconds(30);
currentDate.setMilliseconds(500);

// Formatting Dates:
const formattedDateCurrent = currentDate.toLocaleString('en-US'); // Formats date and time
const formattedDateOnlyCurrent = currentDate.toLocaleDateString('en-US'); // Formats date
const formattedTimeOnlyCurrent = currentDate.toLocaleTimeString('en-US');

// Working with Timestamps:
const timestampCurrent = currentDate.getTime();
const newDateCurrent = new Date(timestampCurrent);

// Date Arithmetic:
const futureDate = new Date(currentDate.getTime() + 3 * 24 * 60 * 60 * 1000); // 3 days in milliseconds

// Comparing Dates:
const date1 = new Date(2023, 0, 15);
const date2 = new Date(2023, 0, 20);
if (date1 < date2) {
    console.log("date1 is earlier than date2");
}

// Example Program
// Create a Date object for the current date and time
const currentDateExample = new Date();

// Display the current date and time in a specific format
console.log("Current Date and Time:", currentDateExample.toLocaleString('en-US'));

// Get and display individual date components
const yearExample = currentDateExample.getFullYear();
const monthExample = currentDateExample.getMonth();
const dayExample = currentDateExample.getDate();
const hoursExample = currentDateExample.getHours();
const minutesExample = currentDateExample.getMinutes();
const secondsExample = currentDateExample.getSeconds();

console.log("Year:", yearExample);
console.log("Month (0-based):", monthExample);
console.log("Day of the month:", dayExample);
console.log("Hours:", hoursExample);
console.log("Minutes:", minutesExample);
console.log("Seconds:", secondsExample);

// Create a new Date object for a specific date and time
const customDateExample = new Date(2023, 3, 15, 14, 30); // April 15, 2023, 2:30 PM

// Format and display the custom date
console.log("Custom Date and Time:", customDateExample.toLocaleString('en-US'));

// Calculate the difference between the custom date and the current date
const timeDifference = customDateExample - currentDateExample;
console.log("Time Difference (in milliseconds):", timeDifference);

// Convert milliseconds to days
const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
console.log("Time Difference (in days):", daysDifference);

// Check if the custom date is in the future or the past
if (timeDifference > 0) {
    console.log("The custom date is in the future.");
} else if (timeDifference < 0) {
    console.log("The custom date is in the past.");
} else {
    console.log("The custom date is the same as the current date.");
}
