/*------------------------------------------------Using Insertion sort----------------------------------------------------------------------------*/
function sortKMessedArray1(arr, k) {
  
    if(arr.length == 1 || arr.length == 0){
      return arr;
    }
   
    for(let i = 1; i < arr.length; i++){
        let count = 0;
        for(let j = i; j > 0 && count <= k; j--){
            count = count + 1;
            if(arr[j] >= arr[j-1]){
                continue;
            }

            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
        }
    }
   
   return arr;
 }

/*------------------------------------------------Using MinHeap----------------------------------------------------------------------------*/

 let swap = function(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
 }

 let heapifyDown = function(arr, size){
   for(let index = Math.floor((size-2)/2); index >= 0; index--){
     let leftIndex = 2*index + 1;
     let rightIndex = 2*index + 2;
     let minIndex = null;
     if(rightIndex < size){
        minIndex = arr[rightIndex] < arr[leftIndex] ? rightIndex: leftIndex;
     } else {
        minIndex = leftIndex;
     }

     if(arr[minIndex] < arr[index]){
        swap(arr, index, minIndex);
     }
   }
 }

 let buildMinHeap = function(heap, size){
    heapifyDown(heap, size);
 }

 let extractMin = function(minHeap, result, index, size){
    result.push(minHeap[0]);
    swap(minHeap, 0, index);
    heapifyDown(minHeap, size);
 }

 
 function sortKMessedArray(arr, k) {
    
    if(arr.length == 1 || arr.length == 0){
      return arr;
    }
   // Can eliminate this extra space by manipulating the arr in the end. The array would be something like this in
   // the end for the input sortKMessedArray([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2))
   //  [10, 9, 8, 1, 2, 3, 4, 5, 6, 7]
   
    let result = [];
    buildMinHeap(arr, k+1);
    for(let index = k+1; index < arr.length; index++){
        extractMin(arr, result, index, k+1);
    } 
    let size = k;
    for(let index = k; index >= 0; index--){
        extractMin(arr, result, index, size);
        size = size - 1;

    }

    console.log(arr);
   
   return result;
 }

 //console.log(sortKMessedArray1([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2));
 console.log(sortKMessedArray([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2));
