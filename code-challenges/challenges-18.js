'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    let strarr = str.split(" ");
    let half = 0.0;
    half = strarr.length;
    if (half % 2 == 0) {
        let ind = half / 2;
        return ((strarr[ind]).length);
    }
    else {
        let ind = Math.ceil(half / 2) - 1;
        return (strarr[ind].length);
    }

}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {

    let str11 = str1.split('').sort().join('');
    let str22 = str2.split('').sort().join('');
    let flag = false;
    if (str11 == str22)
        flag = true;
    return flag;

}


// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    let ind = 0;
    let ind1 = 0;
    let ind2 = 0;
    let z;
    for (; ind2 <= arr.length - 1; ind2++) {
        if (arr[arr.length - 1] < int)
            return arr.length;
    }
    for (; ind1 <= arr.length - 1; ind1++) {
        if (arr[ind1] < int && arr[ind1 + 1] > int)
            return ind1 + 1;
    }
    for (; ind <= arr.length - 1; ind++) {
        if (arr[ind] == int)
            return ind;

    }



}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };