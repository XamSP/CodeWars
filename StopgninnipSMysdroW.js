function spinWords(str){
  
  return str.split(" ").map( x => x.length >= 5 ? x.split("").reverse().join(""): x).join(" ");
  //Just Splitting, if the word is >=5, split, reverse and join. and one last join to make the sentence.

};
console.log(spinWords("That warrior is amazing"))