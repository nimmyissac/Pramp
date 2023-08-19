function wordCountEngine(document) {
    // splits the document by one or more whitespace characters
    let documentArr = document.trim().split(/\s+/);
    
    let resultArr = [];
    
    // hashMap has word as key and its index in resultArr as value
    let hashMap = new Map();
    
    for(let i = 0; i< documentArr.length; i++){
     
      documentArr[i] = documentArr[i].toLowerCase().replace(/[^a-z0-9]/g,'');
      let index = hashMap.get( documentArr[i]);
      if(index === undefined){
        // this means documentArr[i] is not in the resultArr yet. Therefore
        //   1. push it to resultArr and 
        //   2. Make an entry in the map with documentArr[i] as key and resultArr index as value 
        resultArr.push([documentArr[i], 1]);
        hashMap.set(documentArr[i], resultArr.length-1); 
      } else {
         // if  documentArr[i] is already present in the result, increment index by 1
         resultArr[index][1] += 1; 
        
      }

    }
    
    return resultArr.sort((a, b) => b[1]-a[1]);
    
 }

 console.log(wordCountEngine( 
    "Every book is a quotation; and every house is a quotation out of all forests, and mines, and stone quarries; and every man is a quotation from all his ancestors. ")); 