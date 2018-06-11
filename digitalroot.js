function digital_root(n) {
  
  let num = n.toString();

  return (num.length === 1 ? parseInt(num) :

    digital_root(num = [...num].map((x)=>parseInt(x)).reduce((a,b)=>a+b)))
    
    
}
  
  
console.log(digital_root(1));


var x = {obj_1 :false}

console.log(x.obj_1)