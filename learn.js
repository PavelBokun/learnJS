// проверка конструктора
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  let myHouse=new House(4);
  console.log(myHouse instanceof House);