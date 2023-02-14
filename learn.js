// проверка конструктора
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  let myHouse=new House(7);
  console.log(myHouse instanceof House);