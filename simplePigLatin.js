function pigIt(str){
  
  //splitting the string into an array, Relocating the first index to end of the string
  let array = str.split(" ").map(x=>x.concat(x.charAt(0))).map(x => x = x.slice(1,x.length));
  
  array = array.map(x => x === "!" || x === "?" ? x.trim("") : x.concat("ay")).reduce((a,b)=> a + " " + b);

  return array;

};

//for node to run in the terminal
console.log(pigIt("This String !"));

