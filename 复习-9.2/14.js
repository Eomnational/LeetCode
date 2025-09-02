/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res=prices[0],max=0;
    for(let i=0;i<prices.length;i++){
        if(prices[i]<res){
            res=prices[i];
        }
        max=Math.max(max,prices[i]-res);
    }
    return max;
};