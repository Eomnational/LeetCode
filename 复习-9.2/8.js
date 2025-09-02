/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let i=0,maxi=0,j=height.length-1,maxj=0,max=0,sum=0;
    while(i<j){
        maxi=Math.max(maxi,height[i]);
        maxj=Math.max(maxj,height[j]);
        if(maxi<maxj){
            sum=sum+maxi-height[i];
            i++;
        }else{
            sum=sum+maxj-height[j];
            j--;
        }
    }
    return sum;
};