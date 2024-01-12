let input = `paris,france
london,england
tokyo,japan
stockholm,sweden`;
const list = input.split("\n");
let result = "";

list.forEach((capCount) => {
  let city, country;
  [city, country] = capCount.split(",");
  result += `${capitalize(city)} is the capital of ${capitalize(country)}, `;
  //   pair = capCount.split(",");
  //   result += `${capitalize(pair[0])} is the capital of ${capitalize(pair[1])}, `;
});
function capitalize(str) {
  return str.at(0).toUpperCase() + str.slice(1);
}

console.log(result);
