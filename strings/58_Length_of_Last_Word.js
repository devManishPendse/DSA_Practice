
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    counter = 0;
    for (i = s.length-1; i >= 0; i--) {
        
        if (s[i] === ' ' && counter === 0) {
            continue;
        } else if (s[i] === ' ' && counter > 0) {
            break;
        }
        else {
            counter++;
        }
    }


    return counter;
};
