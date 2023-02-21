// проверка конструктора
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  let myHouse=new House(7);
  console.log(myHouse instanceof House);
  function prci(num){
    let arr1=[];
    let arr2=[];
   let y= num.toString().split('').map(int => parseInt(int, 10));
  // arr1=y;
   arr2=y.reduce((sum, current) => sum * current)
  // for (let i = 0; i < arr1.length; i++) {
  //     const computation = arr1[i] * arr1[i];
  //     arr2.push(computation);
  //   }
  // let y=(r%1===0);
  // let y=(r%2===1)
  alert(arr2)
  }
  
  
  prci(37)


  function t(num){
    
    for (let i = 0; num>9; i++){
      num = num.toString().split('').reduce((t, c) => c * t);
      alert(num)
    }

    }

t(48)