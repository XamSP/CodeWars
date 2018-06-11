function incrementString(strings) {
  
  let digitfinder = /(0+)?(\d+)/
  let digits = strings.match(digitfinder);
  let lettersfinder = strings.match(/[a-z]+/i)
 
  if (strings===""){
    return `1`

  } else if (!digits && !lettersfinder){
    return `${parseInt(digits[2])+1}` 
    
  } else if (!digits){
    return `${lettersfinder[0]}1`

  } else if (digits[1] !== undefined && !lettersfinder){
    
    let originalLength = digits[2].length; 

    let newLength = (parseInt(digits[2])+1).toString();

    let zeroLength = digits[1].length - (newLength.length-originalLength);

    let zeroes = "";

    while (zeroes.length < zeroLength) {zeroes+="0";}

    return `${zeroes}${newLength}`;

  } else if (!lettersfinder){ 

    return `${parseInt(digits[2])+1}`;
  
  } else if (digits[1] !== undefined) {
    
    let originalLength = digits[2].length; 
    
    let newLength = (parseInt(digits[2])+1).toString();
    
    let zeroLength = digits[1].length - (newLength.length-originalLength);

    let zeroes = "";

    while (zeroes.length < zeroLength) {
    zeroes+="0";
    }

    return `${lettersfinder[0]}${zeroes}${newLength}`;
  
  } else {
    
    let newLength = (parseInt(digits[2])+1).toString();
    
    return `${lettersfinder[0]}${newLength}`
  }

};