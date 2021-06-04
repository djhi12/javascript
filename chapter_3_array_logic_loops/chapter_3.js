const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Spider Man', 'Doctor Strange', 'Thanus', 
'Black Panther'];

document.getElementById('output').innerHTML = avengers;
//document.getElementById('output').innerHTML = avengers.reverse();
//document.getElementById('output').innerHTML = avengers.sort();


console.log(avengers);
//const avengers_1 = ['Ant man', 'Wonderwoman', 'Batman'];
//delete avengers[0], delete avengers[1];

/*
 
 */
console.log(avengers.length);


/*

 */
console.log(avengers.length -1);



console.log(avengers.length = 100);

console.log(avengers.pop());

console.log(avengers.shift());

console.log(avengers.push());

console.log(avengers.unshift());
//console.log(avengers.concat(avengers_1), avengers.concat('Doctor Strange'));
//console.log(avengers.join('&'));

/*
join()method
1. turn the array into a string
*/
console.log(avengers.join());

/* 
slice() method
1. creates a subarray; effectively chopping out a slice of an original array, starting at one position and 
finishing at another. 
*/
//console.log(avengers.slice(1,2));


/* 
splice() method
1. removes items from an array then inserts new items in their place.
2. The first number in the parentheses tells us the index at which to start the splice. In the example we 
started at index 3, which is the fourth item in the array ('Hulk'). The second number tells us how many items to 
remove from the array. In the example, this was just one item. 
3. used to insert values into an array at a specific index without removing any items, by indicating that zero 
items are to be removed: 
*/
//console.log(avengers.splice(1, 0, 'Daniel'));


/*
reverse() method
1. We can reverse the order of an array using the reverse() method:
2. Note that this changes the order of the array permanently.
*/
console.log(avengers.reverse());


/*
sort() method
1. We can sort the order of an array using the sort() method:
2. It is alphabetical order by default for String objects. Note that this also changes the order of the array 
permanently.
*/
console.log(avengers.sort());


/*
indexOf() method
1. We can find out if an array contains a particular value using the indexOf() method to find the first occurrence
   of a value in an array.
2. If the item is in the array, it will return the index of the first occurrence of that item:
3. If the item is not in the array, it will return -1
*/
console.log(avengers.indexOf('Thanus'));


/*
include() method
1. This returns a boolean value depending on whether the array contains a particular element or not:
2. You can also add an extra parameter to indicate which index to start the search from:
*/
console.log(avengers.includes('Thanus'));











//const mixedArray = [ null, 1, [], 'two', true ];
//console.log(mixedArray);