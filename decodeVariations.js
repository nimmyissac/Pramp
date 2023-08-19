
/*
A letter can be encoded to a number in the following way:

'A' -> '1', 'B' -> '2', 'C' -> '3', ..., 'Z' -> '26'
A message is a string of uppercase letters, and it is encoded first using this scheme. For example, 'AZB' -> '1262'

Given a string of digits S from 0-9 representing an encoded message, return the number of ways to decode it.

input:  S = '1262'
output: 3
explanation: There are 3 messages that encode to '1262': 'AZB', 'ABFB', and 'LFB'.
*/


function decodeVariations(S) {
    let result = [];
    let strArr = S.split('');
    let count = 0;
    let helper = function(prefix, subStr, index){
        if(Number(prefix[prefix.length-1]) > 26 || Number(prefix[prefix.length-1]) < 1){
            return;
        }

        if(index >= subStr.length){
            count++;
            result.push(prefix.join(','));
            return;
        }

              prefix.push(subStr[index]);
              helper(prefix, subStr, index+1);
              prefix.pop();
              if((index+1) < subStr.length){
                prefix.push(subStr[index]+subStr[index+1]);
                helper(prefix, subStr, index+2);
                prefix.pop();
              }

    }
    helper([], S, 0);
    console.log(result);
    return count;
}


//console.log(decodeVariations("1270"));
console.log(decodeVariations("1262"));