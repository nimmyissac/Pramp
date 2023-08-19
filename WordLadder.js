/*
https://www.youtube.com/watch?v=tRPda0rcf8E

Shortest Word Edit Path
Given two words source and target, and a list of words words, find the length of the shortest series of edits that transforms source to target.

Each edit must change exactly one letter at a time, and each intermediate word (and the final target word) must exist in words.

If the task is impossible, return -1.

Examples:

source = "bit", target = "dog"
words = ["but", "put", "big", "pot", "pog", "dog", "lot"]

output: 5
explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions.
source = "no", target = "go"
words = ["to"]

output: -1
*/
function populateWordsSet(words){
    let wordsSet = new Set();
    for(let word of words){
        wordsSet.add(word);
    }
    return wordsSet;
}
function wordLadder(src, target, words){
    if(src.length !== target.length){
        return -1;
    }
    let wordsSet = populateWordsSet(words);
    
    if(!wordsSet.has(target)){
        return -1;
    }

    let targetFound = false;

    let queue = [src];
    let level = 0;
    let alphabetArr = Array.from({length:26}).map((_, i) => String.fromCharCode(i + 97));
    let visited = new Set();
    visited.add(src);
    let helper = function(word){
        for(let i = 0; i<word.length; i++){
            let wordsIntersect = [];
            for(let alphabet of alphabetArr){
                let newWord = word.substring(0,i)+ alphabet + word.substring(i+1);
                if(wordsSet.has(newWord)){
                    if(newWord == target){
                        targetFound = true;
                    }
                    if(!visited.has(newWord)){
                        visited.add(newWord);
                        wordsIntersect.push(newWord);
                    }
                }
            }

            for(let intersect of wordsIntersect){
                helper(intersect) ;
            }

            if(wordsIntersect.length){
                level +=1;
            }

            
        }

    }

    helper(src);
    console.log(`level is ${level}`);

    if(!targetFound){
        return -1;
    } else {
        return level;
    }

    
}

function wordLadderBFS(src, target, words){
    if(src.length !== target.length){
        return -1;
    }
    let wordsSet = populateWordsSet(words);
    
    if(!wordsSet.has(target)){
        return -1;
    }

    let queue = [src];
    let level = 0;
    let alphabetArr = Array.from({length:26}).map((_, i) => String.fromCharCode(i + 97));
    let visited = new Set();
    visited.add(src);
   let targetFound = false;
    while(queue.length!= 0){
        if(targetFound){
            break;
        }
        let numNodes = queue.length;

        for(let i = 0; i< numNodes; i++){
             let word = queue.shift();
             for(let index = 0; index < word.length; index++){
               for(let alphabet of alphabetArr){
                 let newWord = word.substring(0,index)+ alphabet + word.substring(index+1);
                 if(wordsSet.has(newWord)){
                    if(newWord == target){
                        targetFound = true;
                    }
                    wordsSet.delete(newWord);
                    queue.push(newWord);
                 }
      
               }
            }

        }
        level++;
    }
   return level;
}

console.log(wordLadderBFS('bit', 'dog',["but", "put", "big", "pot", "pog", "dog", "lot"]));
console.log(wordLadderBFS('hit', 'cog',["hot","dot","dog","lot","log","cog"]));