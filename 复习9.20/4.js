/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let y = parseInt(x.toString().split("").reverse().join(""));
    if (x < 0)
        y = - y;
    return y > 2147483647 || y < -2147483648 ? 0 : y;
};
