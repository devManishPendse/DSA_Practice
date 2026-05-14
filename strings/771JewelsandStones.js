/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count =0;
    for(let i=0;i<stones.length;i++){
        for(let j=0;j<jewels.length;j++){
            if(stones[i]===jewels[j]){
                count ++;
            }
        }
    }
    return count;
};


//optimized

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let mySet = new Set();
    let count = 0;
    for (let i = 0; i < jewels.length; i++) {
        mySet.add(jewels[i])
    }

    for (let j = 0; j < stones.length; j++) {
        if (mySet.has(stones[j])) {
            count++;
        }
    }
    return count;
};
