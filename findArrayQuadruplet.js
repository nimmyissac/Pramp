/* Interview 1*/ 
function findArrayQuadruplet(arr, s) {
    arr = arr.sort((a, b)=> a-b);
    console.log(arr);
    for(let i=0; i < arr.length - 3; i++){
        console.log(`i = ${i}`);
       for(let j = i+1; j< arr.length - 2  ; j++) {
        console.log(`j = ${j}`);

           let start = j+1;
           let end = arr.length-1;
           let target = s - (arr[i] + arr[j]);
           console.log(`start = ${start}`);
           console.log(`end = ${end}`);

           while(start < end && (arr[start] + arr[end]) < target){
             start++;
           }
           while(start < end && (arr[start] + arr[end]) > target){
             end--;
           }
           if(start < end && (arr[start] + arr[end]) == target){
             return [arr[i], arr[j], arr[start], arr[end]];
           }
       }
    }
    return [];
  }

  console.log(findArrayQuadruplet([2,7,4,0,9,5,1,3], 20));