
// 
function doSomethingAsync(callback) {
    // Simulating an asynchronous operation, like fetching data from an API
    setTimeout(function () {
        console.log("Async operation completed");
        // Call the callback function after the asynchronous operation is done
        callback();
    }, 1000);
}

// Define a callback function
function callbackFunction() {
    console.log("Callback function executed");
}

// Call the function with the callback
doSomethingAsync(callbackFunction);


// Example Program
// Function that simulates an asynchronous operation
function fetchData(callback) {
    // Simulating an asynchronous operation (e.g., fetching data from a server)
    setTimeout(function () {
        const data = { message: "Data successfully fetched!" };
        // Invoke the callback with the fetched data
        callback(null, data); // Pass null as the error parameter to indicate success
    }, 2000); // Simulating a 2-second delay
}

// Callback function to handle the fetched data
function handleData(error, result) {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Received data:", result.message);
    }
}

// Call the fetchData function with the handleData callback
fetchData(handleData);

console.log("Program continues to execute other tasks...");
