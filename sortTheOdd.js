function sortArray(array) {

  // Return a sorted array if empty.
  if (!array)
    return array
  
  let evenObjArray = {};
  let newArray = []; 
  
  for (let i=0; i< array.length; i++){
    //check for even number
    array[i]%2 === 0 
    ? evenObjArray[i] = array[i]
    //push all odd to the new array
    : newArray.push(array[i])
  }
  //Sort the array after all oddNums been inserted
  newArray.sort((a, b) => a - b);
  
  //Seperate the keys and values of the evenObjArray
  let evenOrgIndx = Object.keys(evenObjArray).map(x=>parseInt(x));

  let evenOrgNum = Object.keys(evenObjArray).map(num => parseInt(evenObjArray[num]));

  //Iterate over all the evenObjArray and insert the corresponded num
  for (let i=0; i < evenOrgNum.length; i++) {
      newArray.splice(evenOrgIndx[i], 0, evenOrgNum[i]);
    }
  
  return newArray;
}

sortArray([5, 3, 2, 8, 12, 1, 4, 6])