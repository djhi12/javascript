
// Creating a Date
const currentDate = new Date();
const specificDate = new Date(1627611600000); // Milliseconds since January 1, 1970
const dateStringDate = new Date('2023-10-16T10:00:00');


// Getting Date Components
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const dayOfWeek = date.getDay();
const hours = date.getHours();


// Setting Date Components
const date2 = new Date();
date2.setFullYear(2022);
date2.setMonth(4); // May (0-based)
date2.setDate(15);
date2.setHours(12);


// Formatting Dates
const date3 = new Date();
const dateString = date3.toDateString();
const timeString = date3.toTimeString();


// Getting/Setting Timezone Offset
const offset = date.getTimezoneOffset();
date.setTime(1627611600000); // Set based on milliseconds


// Math Operations
const now = new Date();
const timestamp = now.getTime();
const futureDate = new Date(timestamp + 86400000); // Add 24 hours


// 