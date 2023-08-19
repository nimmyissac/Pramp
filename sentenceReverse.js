
/*
You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexities.

input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]
*/
function reverseWords1(arr) {
    let indicesArr = [];
    let result  = [];
    for(let i = 0; i< arr.length; i++){
       let startIndex = i;
       while(i< arr.length && arr[i].trim().length != 0){
         i++;
       }
      
       indicesArr.push([startIndex, i]);
    }
    for(let i = indicesArr.length-1; i>=0; i--){
       let [startIndex, endIndex] = indicesArr[i];
       let j = startIndex;
       while(j < endIndex){
          result.push(arr[j]);
         j++;
       }
       if(startIndex === 0){
         continue;
       }
        result.push(" ");
       
    }
    
    return result;
  }

  function reverseWords11(arr) {
   let i = 0;
   let j = arr.length-1;
   let indicesArr = [];
   for(let i = 0; i< arr.length; i++){
      let startIndex = i;
      while(i< arr.length && arr[i].trim().length != 0){
        i++;
      }
     
      indicesArr.push([startIndex, i-1]);
   }

  arr = arr.reverse();
   let lastIndex = 0;
   for(let j = indicesArr.length - 1; j>=0; j--){
      let [start, end] = indicesArr[j];
      let diff = end - start;
      start = lastIndex;
      end = start+diff;
      lastIndex = end + 2;
      while(start <= end){
         let temp = arr[start];
         arr[start] = arr[end];
         arr[end] = temp;

      start++;
      end--;
      }
   }

   return arr;

  }

  function reverseWords(arr) {
 

  arr = arr.reverse();
   let limit = 0;
   for(let i = 0; i<arr.length; i++){
      
   }

   return arr;

  }


  console.log(reverseWords([ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
  'm', 'a', 'k', 'e', 's', '  ',
  'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]));