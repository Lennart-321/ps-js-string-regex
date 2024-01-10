console.log("ab".length);

function isEmpty(str) {
  return !str || str.length === 0;
}

function isBlank(str) {
  return str.trim().length === 0;
}
console.log(String.raw`\u2002 :`, isBlank("\u2002"), isBlank(" \t\r\n"));

function isEqIgnoreCase(s1, s2) {
  return s1.toUpperCase() === s2.toUpperCase();
}
function isEqIgnoreDiacritic(s1, s2) {
  return s1.localeCompare(s2, undefined /*default locale*/, {
    sensitivity: "case",
  });
}
function sortStringStartingWithNumbers(strs) {
    let copy = strs.slice();
    copy.sort((a, b) => s1.localeCompare(s2, undefined /*default locale*/, {
        numeric: true
    }));
  });
console.log(isEqIgnoreCase("AbCd", "abcd"));
