// @param: string
// @return: number (number of characters in the string)
function numOfChars(word: string) { 
    return word.length;
}

// @param: string
// @return: number(number of characters in the string excluding spaces)
function numOfCharsExcludingSpaces(word: string): number { 
    return word.trim().length;
}

// Combine function 1 and 2
// if the user inputs the optional paramter as true, it will trim the spaces from the word count
function numOfCharsCombo(word: string, choice?: boolean): number { 
    if(choice) { 
        return word.trim().length;
    } else { 
        return word.length;
    }
}

// output the functions to the console
console.log(numOfChars(" Shreyas Joshi "));
console.log(numOfCharsExcludingSpaces(" Shreyas Joshi "));
console.log(numOfCharsCombo(" Shreyas Joshi ", true));