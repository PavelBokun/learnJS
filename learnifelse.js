function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
  else{
  return "Between 5 and 10";
  }
    
  }
  
  testElseIf(0);
  testElseIf(5);
  testElseIf(7);
  testElseIf(10);
  testElseIf(12);

  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(4);
  orderMyLogic(6);
  orderMyLogic(11);
  function testSize(num) {
    // Only change code below this line
  if (num<5){
    return "Tiny";
  } else if (num<10){
  return "Small"
  } else if (num<15){
  return "Medium"
  } else if (num<20){
    return"Large"
  } else if (num>=20){
    return "Huge"
  }
    return "Change Me";
  
    // Only change code above this line
  }
  
  testSize(0);
  testSize(4);
  testSize(5);
  testSize(8);
  testSize(10);
  testSize(14);
  testSize(15);
  testSize(17);
  testSize(20);
  testSize(25);