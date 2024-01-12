const regexLiteral = /Script/g;
const regexObject = new RegExp("Script", "g");

//console.log(typeof regexLiteral, typeof regexObject);
console.log("JavaScript CoffeeScript".match(regexLiteral));
console.log("JavaScript CoffeeScript".match(regexObject));

let text = "The countdown is starting: 3... 2... 1...";
let digits = /\d+/;
let digits_glb = /\d+/g;
console.log(digits.test(text));
console.log(digits_glb.test(text));
console.log(text.search(digits)); //-1 if no match
console.log(text.search(digits_glb));
let mtc1 = text.match(digits);
console.log(mtc1, mtc1 instanceof Array, mtc1["input"], mtc1.index);
let mtc2 = text.match(digits_glb);
console.log(mtc2, mtc2 instanceof Array);
console.log(typeof [1, 2], [1, 2] instanceof Array);
let mtc3 = text.matchAll(digits_glb);
console.log(mtc3, typeof mtc3, mtc3 instanceof Array);
//console.log([1, two: 2, 3])

text = "Abc Java java Javascript  Java Script";
let text2 = text.replace("Java", "JavaScript");
let text3 = text.replaceAll("Java", "JavaScript");
console.log(text);
console.log(text2);
console.log(text3);

text = "My languages are 1-Java, 2-Python and 3-C#";
text2 = text.replaceAll(/-[^, ]+/g, "-JavaScript");
console.log(text);
console.log(text2);
