function iqTest(numbers){

  //Turning the string of numbers to an array
  //and parseInt, and at last using %2.
  numbers = numbers.split(" ").map(num => parseInt(num)).map(num=> num%2);
  
  let odd = numbers.filter(num=> num>0);
  
  let even = numbers.filter(num=> num<1);
  
  //if even.length is greater than odd, return the index +1.
  return (even.length > odd.length ?  numbers.findIndex((x)=> x>0)+1 : numbers.findIndex((x)=>x<1)+1) 
  
};