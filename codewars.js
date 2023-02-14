

function isDivisible(n, x, y) {
    
    return (n % x === 0 && n % y === 0) ? true:false;
    
  }
  isDivisible(12,2,6)

  function openOrSenior(data){
    return data.map(([old, handicap]) => (old > 54 && handicap > 7) ? 'Senior' : 'Open'); 
  }
  function oc(d){
    let r=(d>13.30 && h>8.00) ? "open":"close";
    alert(r)
  }
  oc()