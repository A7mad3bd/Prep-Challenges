'use strict';


// Combine methods

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Write a function that takes in a string and returns the reverse of this string .
//
// Input <= "Hello";
// Output => "olleH";

const reverseString = (string) => {
    let rev = ""
    let z = string.length - 1;
    let i = 0;
    let n = string[z - i]
    while (z - i != -1) {
        rev += string[z - i];
        i++;

    }
    return rev;
}
// -------------------------------------------------------------------------------------------------------



// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes an array of strings and returns only strings that contain ^_^.
//
// Ex :-
// Input <= ["hello ^_^ ","Hi ^_^" ,"What's up ^_-" ,"lol"] , Output => ["hello ^_^ ","Hi ^_^" ] ;

const detectFace = (arr) => {
    let arr1 = [];
    let i = 0;
    for (arr[i]; i <= arr.length - 1; i++) {
        console.log(arr[i]);
        if (arr[i].includes("^_^"))

            arr1.push(arr[i]);
    }
    return arr1;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes in a string and returns a string contains only characters in even positions.
//
// Ex :-
// Input <= "coding" output =>"cdn"

const eveCharacter = (str) => {
    let even = ""
    let z = str.length - 1;
    let i = 0;
    let n = str[i]
    for (str[i]; i <= z; i += 2) {
        even += str[i];


    }
    return even;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 04
// Optional:

// Let us consider you are hired as a software developer in a tech company and you are assigned to work on a restaurant web application project .

// And you are assigned to write function to return only ingredients that contains chicken.
//
// Input:
// [["mushroom", "grilled chicken", "sauce"], ["Bread", "Potato", "baked chicken"], ["fried potato", "garlic sauce", "fried chicken"]];
//
// Output:
// [["grilled chicken"], ["baked chicken"], ["fried chicken"]];


const chickenGradients = (arr) => {
    let arr1 = [];
    let arr2 = [];
    let i = 0;
    let x = 0;
    let s="chicken";
    for (arr[i]; i <= arr.length - 1; i++) {
        for (arr[i][x]; i <= arr[i].length - 1; x++) {
            console.log(arr[i][x]);
            if (arr[i][x].includes(" "))
            {
                arr1.push(arr[i][x]);
                arr2.push(arr1);
                arr1=[];
            }
        }
    }
    return arr2;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseString, detectFace, eveCharacter, chickenGradients };
