const sum = 123456;
const rate = 0.8;
console.log(`${sum} USD is ${(sum * rate).toFixed(2)}`);

console.log(
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    sum
  )
);

console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    sum
  )
);
console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    sum
  )
);
console.log(
  new Intl.NumberFormat("sv-SE", { style: "currency", currency: "SEK" }).format(
    sum
  )
);
