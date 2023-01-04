// First Method
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[words.length - website.indexOf("o")].shift().substr(words.length - website.indexOf("o")).toUpperCase()); //ZERO






// Second Method But with Two Line
/*
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

let lastElem = words.pop();
console.log(`${lastElem[0].slice(lastElem[0].indexOf("zero")).toUpperCase()}`); // ZERO
*/