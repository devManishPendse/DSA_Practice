/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let ans = []
    for(let i=0;i<words.length;i++){
        let arr2=words[i];
        for(let j=0;j<arr2.length;j++){
            if(arr2[j]=== x){
                ans.push(i); 
                break;
            }
        }
    }
    return ans;
};
