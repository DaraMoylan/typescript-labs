// boolean 
let flag: boolean = true;
console.log("Value assigned to flag is: " + flag);

// string
let friend: string = "Dun Cheng Foo";
console.log("My friend's name is: " + friend);

// number
let price: number = 4.99;
console.log("The price of a freddo in 2026 is :" + price);

// array
const friendGroup: string[] = ["Dara", "Shreyas"];
friendGroup.push(friend);
friendGroup.forEach(element => {
    console.log(element);
});

// any 
let misc: any = 42;
console.log("The answer to the universe is :" + misc);