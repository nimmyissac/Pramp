/*
Merging 2 Packages
Given a package with a weight limit limit and an array arr of item weights, 
implement a function getIndicesOfItemWeights that finds two items whose sum 
of weights equals the weight limit limit. Your function should return a pair 
[i, j] of the indices of the item weights, ordered such that i > j. 
If such a pair doesn’t exist, return an empty array.
*/
function buildArrIndicesMap(arr){
  let map = new Map();

  for(let i = 0; i< arr.length; i++){
    let indicesArr = map.get(arr[i]);
    if(indicesArr){
        indicesArr.push(i);
    } else {
        map.set(arr[i],[i]);
    }
  }

  return map;
}

function getIndicesOfItemWeights(arr, limit) {
   let indicesMap = buildArrIndicesMap(arr);
   let result = [];
   for(let i = 0; i<arr.length; i++){
     let firstVal = arr[i];
     let target = limit - firstVal;

     let targetIndicesArr = indicesMap.get(target);
     if(targetIndicesArr && targetIndicesArr[targetIndicesArr.length-1] != i  && targetIndicesArr[targetIndicesArr.length-1] > i){
        result = [targetIndicesArr[targetIndicesArr.length-1],i]
     }
   }
   return result;
}


  console.log(getIndicesOfItemWeights([4,4], 8));
  console.log(getIndicesOfItemWeights([4,6,10,15,16], 21))
  console.log(getIndicesOfItemWeights([4,4,1], 5));

