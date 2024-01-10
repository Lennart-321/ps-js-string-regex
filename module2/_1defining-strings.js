let s = "Currency rate";
let s2 = "Currency rate";
console.log(s);

let tpl2 = `Multi \n \n
line \t \t \t \t string 2`;
console.log(tpl2);
document.getElementById("note_2").innerText = tpl2;

document.getElementById("pre_tag").innerText = tpl2;

let pair = "USD/EUR";
let raw = String.raw`Multi \n \n
line \t \t \t \t string ${pair}`;
console.log(raw);
document.getElementById("note_3").innerText = raw;

const emoi = "😐";
document.getElementById("emoji").innerText = emoi;
console.log(emoi);

console.log("A:", "A".codePointAt(0));
console.log("😐:", "😐".codePointAt(0));
console.log("😐A:", "😐A".codePointAt(0, 1));
console.log("😐A:", "😐A".codePointAt(1));
console.log("😐A:", "😐A".codePointAt(2));
console.log(String.fromCodePoint(65));
console.log(String.fromCodePoint(128528, 65));
console.log(String.fromCharCode(65));
console.log(String.fromCharCode(128528, 65));

let strObj = new String("Hello");
console.log(typeof "Hello");
console.log(typeof strObj);
console.log(strObj.charAt(0));
function isString(value) {
  return typeof value === "string" || String.prototype.isPrototypeOf(value);
}
console.log(isString(strObj));

const ourFee = 0.01;
const compFee = 0.02;
const fee100 = (fee) => 100 * fee;
console.log("Compare fees:");
const msg = `Us: $${fee100(ourFee)} | Competitor: $${fee100(compFee)}`;
console.log(msg);
