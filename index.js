/*variables
  ---Data types
        primitive data types-string,number,boolean,symbol
        reference data types-object(arrays)
        values-NULL(object type),undefined,NaN
        */

//String Methods
let a='januaswa';
// returns the length of the string
// output:4
console.log(a.length);
// concating two strings
// output :janu shwetha
let text2 = "shwetha";
console.log(a.concat(" ", text2));
// returns true or false whether the string ends with a particular pattern
// output : true
console.log(a.endsWith("a"));
// returns true or false whether the string has the specified value
// output : true
console.log(a.includes("a"));
// returns the index value of the specified value
// output : 2
console.log(a.indexOf("n"));
// returns the last index of the specified value
// output : 7
console.log(a.lastIndexOf("a"));
// repeats the given string
// output: januaswajanuaswa
console.log(a.repeat(2));
// replaces the given string with a specified value
// output : januaswath
console.log(a.replace("aswa","aswath"));
// returns the position of the match
// output: 4
console.log(a.search("aswa"));
// extracts the part of the string
// output : janu
console.log(a.slice(0,4));
// split the values 
// output: ["j", "nu", "sw", ""]
console.log(a.split("a"));
// checks whether the string starts with the specified value
// output : true
console.log(a.startsWith("ja"));
// returns the substring
//  output: aswa
console.log(a.substr(4,7));
// returns the substring with specified number of characters between
// output : asw
console.log(a.substring(4,7));
// convert to uppercase
// output :JANUASWA
console.log(a.toUpperCase());
// convert to lowercase
// output:januaswa
console.log(a.toLowerCase());
//  trims the extra spaces
// output :januaswa 
console.log(a.trim());
//----------------------------------------------------------------------------------
//Number Methods:
let x=98.5345;
// keeping the given number of decimals only
// output : 98.53
console.log(x.toFixed(2));
// exponential value
// output : 9.85345e+1
console.log(x.toExponential());
// convert the value into string
// output: 98.5345
console.log(x.toString());
console.log(x.toString(2));

//-----------------------------------------------------------------------------------

//Global Methods
// gives error meassage in console as red
// output: blahhh
console.error("blahhh");
// gives info as text
// output : januuuu
console.info("januuuu");
// gives info in the log
// output : aswa
console.log("aswa");
// gives as warnng in yellow message in console
// output : warning
console.warn("warning");
// displays the table view with index and value
//output : (index)       Value
//         0            "janu"
//        1          "shwetha"
//Array(2)         
console.table(["janu","shwetha"]);

// gives an alert popup
// output:  popup having warning text
//--alert("warning");

// prompt has a user input  popup
// output : a popup getting user input
//--- var person = prompt("Please enter your name");
//---console.log("Hi "+ person);

//  gives a confirmation message popup for the user
//  output: popup box with message
//--confirm("Are you ok?");

 // to convert variables to numbers
 // output : 1 999 0 null(NaN)
 var x=true;
 var y = "999";
 var z= false;
 var b="99 99";
 console.log(Number(x));
 console.log(Number(y));
 console.log(Number(z));
 console.log(Number(b));

 // check whether it is not a number or not
 // output : true true false
console.log(isNaN(0/0));
console.log(isNaN("janu"));
console.log(isNaN("99"));

// parse to float value
// output :10.43
console.log(parseFloat("10.430"));

// parse to int value
//  output : 43 NaN
console.log(parseInt("43"));
console.log(parseInt(true));

// Boolean values
// output : false true
console.log(Boolean(0));
console.log(Boolean(-2));

// convert to string values
// output : true 54.99 93 21
console.log(String(true));
console.log(String("54.99 93 21"));

//-----------------------------------------------------------------------------------


