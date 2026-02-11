/*
* Lab two (custom types)
1. Create an array of strings
2. Create an addTask function
3. Create a listAllTasks function
4. Create a deleteTask function
*/
// Create an array of strings
let myArray = [];
// Create my addTask function
// arrow function that takes in a string, adds it to the array and returns the number of elements in the array
let addTask = (task) => {
    myArray.push(task);
    console.log(task + " has been added to the array!");
    return myArray.length;
};
// create my listAllTasks function 
let listAllTasks = () => {
    myArray.forEach(element => {
        console.log(element);
    });
};
// Create my deleteTask function
let deleteTask = (task) => {
    if (myArray.includes(task)) {
        // find the index of the element
        let index = myArray.indexOf(task);
        myArray.splice(index, 1);
        console.log(task + " has been removed from the array");
    }
    else {
        console.log("The string " + task + " never existed in the array");
    }
    return myArray.length;
};
// Test my functions
addTask("Spongebob Squarepants");
console.log(myArray.length);
addTask("Patrick Star");
console.log(myArray.length);
listAllTasks();
deleteTask("Handsome Squidward");
deleteTask("Patrick Star");
console.log(myArray.length);
