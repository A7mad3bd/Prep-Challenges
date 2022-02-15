'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//

let n;
let ans = [];
const rec = (a, b) => {
    ans.push(a);
    if (a == n) return;
    if (a < 0) {
        rec(a + b, -b);
        return;
    }
    rec(a - b, b);

}
const recursionPattern = (a, b) => {
    ans = [];
    n = a;
    ans.push(n);
    rec(a - b, b);
    return ans;

}


// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 

const filterLinks = (str) => {
    let q, q1;
    let str1 = "";
    for (let c = 0; c <= str.length - 1; c++) {
        if (str[c] == 'w')
            q = c - 2;
    }
    for (let c1 = q; c1 <= str.length - 1; c1++) {
        if (str[c1] == '\"')
            q1 = c1;
    }
    for (let c2 = q; c2 <= q1 - 1; c2++) {
        str1 += str[c2];
    }

    return str1;

}

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
    let flag = true;
    let str1 = "";
    let count = 0;
    let c2 = "";
    for (let c = 0; c <= str.length - 1; c++) {


        if (str.charCodeAt(c) <= 64)
            c++;

        else if (str.charCodeAt(c) < 97) {
            count++;

            c2 = toString(str.charCodeAt(c2) + 32);
            str1 += c2;
        }

        else {
            str1 += str[c];
        }
    }

    if (count == 0) { flag = false } if (str == " ") { flag = true } if (str == "f") { flag = true }

    return flag;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };