function persistence(numeros){

  let result = numeros;
  
  let counter = 0;
  
  let arrayNum= [];


//while since it depends on the digits.
  while(result > 9){
    //to get length and push to to the array
    let stringi = result.toString();

    for (let i=0; i<stringi.length; i++){
      //pushing to the array while converting from string to interger
      arrayNum.push(parseInt(stringi[i]));

      console.log("loop " + i)
    };
    //how many times it took to loop
    counter ++;
    console.log("counter "+counter)
    
    console.log("array " + arrayNum)
    //the magic
    result = arrayNum.reduce((a,b)=>a*b);
    console.log("result "+ result)
    arrayNum=[]
    
  } return counter

};