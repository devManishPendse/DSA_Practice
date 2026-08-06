/**
 * @param {string} s
 * @return {number}
 */
//1221
var balancedStringSplit = function (s) {
    let lcount = 0, rcount = 0,count = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'L') {
            lcount = lcount + 1;

        }
        if (s[i] == 'R') {
            rcount = rcount + 1;

        }
        if(lcount === rcount){
            count++;
            lcount = rcount = 0;
        }

    }
    console.log(count);
    return count;
};
