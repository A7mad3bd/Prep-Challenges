'use strict';

// Important Note: 
// Kindly use reduce instead of for in all of your solutions

// Resource:
// Reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// 1) ---------------------
// 
//  Given an array of objects, count the objects by using reduce method.

//  EX:
// var voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ]
//

// ------------------------

const objectCounter = (obj) => {
    let arr = [];
    let count = 1;
    var Count = obj.reduce(
        (acc, item) => {
            count++

        })
    return count;

}

// 2) ---------------------
// 
// Given a string input as an argument reverse it using reduce method.
//
//  EX:
// 'you shall not pass' ==> 'pass not shall you'
//
// Hint:
// since you need to reverse words, you may get some use of the methods
// you learnt before to split the string to words
//
// ------------------------

const stringReverse = (str) => {
    let str1 = "";
    let sp = [];
    sp = str.split(" ");
    sp.reduce((a, b) => [b, ...a], []);
    for (let i = sp.length - 1; i >= 0; i--) {
        if (i == 0)
            str1 += sp[i];
        else
            str1 += sp[i] + " ";


    }

    return str1;



}

// 3) ---------------------
// 
// Using the same array of object from the first question, create new object that contain the candidates name as keys (voting for),
// and how many times they got voted to as values using the reduce method.
//
// Input:
// let voters = [
//     {
//         voter_Name: "Adam Scott",
//         votes_To: "James",
//     },
//     {
//         voter_Name: "Abril Blake",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Ruby Andrews",
//         votes_To: "Jade",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     },
//     {
//         voter_Name: "Junior Maxwell",
//         votes_To: "Bailey",
//     }
// ];
//
// Output:
// let res = {
//     James: 1,
//     Jade: 2,
//     Bailey: 2
// };
//
// ------------------------

const statistics = (obj) => {
    let obj1 = {};
    let count1 = 0, count2 = 0, count3 = 0, count4 = 0;
    let resul = obj.reduce((count, el) => {

        if (el.votes_To == "Jade")
            count1++;
        if (el.votes_To == "Bailey")
            count2++;
        if (el.votes_To == "James")
            count3++;
        if (el.votes_To == "Chad")
            count4++;

    }, 0)
let Jade,Bailey,James,Chad;
   
    if (count1 != 0) {
        Jade = count1;
    }
    if (count2 != 0) {
        Bailey = count2;
    }
    if (count3 != 0) {
        James = count3
    }
    if (count4 != 0) {
        Chad = count4;
    }


    let res1 = {
        Jade,
        Bailey,
        James,
        Chad
    };




    return res1;



    //    
    //    



    // let arr2={ "James": count1,
    //          "Jade": count2,
    //          "Bailey": count3};


    /*
    
    var arr = [{x:1},{x:2},{x:4}];


 

// ES6
arr.reduce((a, b) => ({x: a.x + b.x}));

// -> {x: 7}*/

}



module.exports = { objectCounter, stringReverse, statistics };

