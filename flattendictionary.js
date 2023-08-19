/*
Given a dictionary dict, write a function flattenDictionary that returns a flattened version of it .
If a certain key is empty, it should be excluded from the output (see e in the example below).


input:  dict = {
            "Key1" : "1",
            "Key2" : {
                "a" : "2",
                "b" : "3",
                "c" : {
                    "d" : "3",
                    "e" : {
                        "" : "1"
                    }
                }
            }
        }

output: {
            "Key1" : "1",
            "Key2.a" : "2",
            "Key2.b" : "3",
            "Key2.c.d" : "3",
            "Key2.c.e" : "1"
        }

*/

function isObject(objValue) {
    return objValue && typeof objValue === 'object' && objValue.constructor === Object;
  }

function flattenDictionary(dict) {
   let result = {};

   let helper = function(tempkeyArr, tempDict){
    let pushed = false;

         for(let [key, value] of Object.entries(tempDict)){
            if(key.trim() !== ""){
                tempkeyArr.push(key);
                pushed = true;
               }
            if(!isObject(value)){
                let newKey = tempkeyArr.join('.');
                result[newKey] = value;
                if(pushed){
                    tempkeyArr.pop();
                    pushed = false;
                 }
              } else {
                helper(tempkeyArr, value)
              }
         }
   }

   helper([], dict);
   return result;
  }

  
function flattenDictionaryold(dict) {
    let result = {};
 
    let helper = function(tempkeyArr, tempDict){
        let pushed = false;
          for(let key in (tempDict)){
            let value = tempDict[key];
             if(key.trim() !== ""){
              tempkeyArr.push(key);
              pushed = true;
             }
             if(!isObject(value)){
                 let newKey = tempkeyArr.join('.');
                 result[newKey] = value;
                 if(pushed){
                    tempkeyArr.pop();
                    pushed = false;
                 }
               } else {
                 helper(tempkeyArr, value)
               }
          }
    }
 
    helper([], dict);
    return result;
   }
 
 
 let dict = {
    "Key1" : "1",
    "Key2" : {
        "a" : "2",
        "b" : "3",
        "c" : {
            "d" : "3",
            "e" : {
                "" : "1"
            }
        }
    }
}

console.log(flattenDictionaryold(dict));