function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
//   ==
function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log (testStrict(10));
console.log (testStrict(7));
console.log (testStrict("7"));
// ===
function testStrict(val,vali) {
    if (val===vali) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  console.log (testStrict(10,10));
  console.log (testStrict("7"));