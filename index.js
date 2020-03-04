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
//-----------------

//Number Methods:
let x=98.5345;
// keeping the given number of decimals only
// output : 98.53
console.log(x.toFixed(2));
// exponential value
// output : 9.85e+1
console.log(x.toExponential(2));
// convert the value into string
// output: 98.5345
console.log(x.toString());
//--------
//Global Methods
//console.error("blahhh");



