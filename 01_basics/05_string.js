const name = "Shubham"
const repoCount = 50

console.log(name + repoCount +  " value"); //outdated syntax.

//use backticks

console.log(`Hello my name is ${name} and my repo is ${repoCount}`);

const gameName = new String("games-new")
//string is stored in the form of object(key value pair)
console.log(gameName[0]);  // g
console.log(gameName.__proto__);  // {}
console.log(gameName.length);  //5

//!These below functions do not change in original string , because it is stored in stack memory(primitive data type)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
//it will exclude the  last character. 
console.log(newString);

const anotherString = gameName.slice(-8,4)
// negative values can be given in slice method, 
//-ve value will starts the count  from end.
console.log(anotherString);

const newString2 = "   Shubham   ";
console.log(newString2);
console.log(newString2.trim()); //remove the extra spaces (trim method)

//replace method: 
const url = "https://shubham.com/shubham%20gupta";
const newUrl = url.replace('%20', '-');
console.log(newUrl);

console.log(url.includes('shubham'))  //true

console.log(gameName.split('-')); //splits the string from the - .
 

//All string methods: 

/*
charAt(index): Returns the character at the specified index.

charCodeAt(index): Returns the Unicode of the character at the specified index.

concat(string1, string2, ..., stringN): Combines multiple strings into one.

includes(searchString, position): Checks if a string contains a specified substring.

endsWith(searchString, length): Checks if a string ends with a specified substring.

indexOf(searchValue, fromIndex): Finds the first occurrence of a substring.

lastIndexOf(searchValue, fromIndex): Finds the last occurrence of a substring.

match(regexp): Matches a string against a regular expression.

replace(searchValue, newValue): Replaces occurrences of a substring or pattern.

search(regexp): Searches for a match using a regular expression.

slice(beginIndex, endIndex): Extracts a section of a string.

split(separator, limit): Splits a string into an array of substrings.

startsWith(searchString, position): Checks if a string starts with a specified substring.

substr(start, length): Extracts a substring from a string.

substring(indexStart, indexEnd): Returns a part of the string between two indexes.

toLowerCase(): Converts the string to lower case.

toUpperCase(): Converts the string to upper case.

trim(): Removes whitespace from both ends of a string.

trimStart() / trimLeft(): Removes whitespace from the beginning of a string.

trimEnd() / trimRight(): Removes whitespace from the end of a string.

*/



