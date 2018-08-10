let finder = (str) => {
  const charMap = {}
  for (let i =0; i < str.length +1; i++) {
    if (i === str.length) {
      const index = Object.values(charMap).indexOf(1);
      return Object.keys(charMap)[index]
      
    } else if (!charMap[str[i]]){
      charMap[str[i]] = 1;
    
    } else {
      charMap[str[i]]++;
    } 
  }

  //return charMap;
}

finder("APAPOAKOSAP");