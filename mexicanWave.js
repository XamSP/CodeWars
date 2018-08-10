function wave(str){
  // Code here
  let spreadStrLength = str.split("").length;
  const array = [];
  for (i = 0; i < spreadStrLength; i++) {
    let spreadStr = str.split("");
    
    if (!spreadStr[i] || spreadStr[i] == " ") {
      continue;
    } else {
      spreadStr[i] = spreadStr[i].toUpperCase();
      let join = spreadStr.join("")
     
      array.push(join);
    }
  }
  return array;
}

wave("awesome wave")