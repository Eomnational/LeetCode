/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let i=0;i<matrix.length;i++){
        let l=0,r=matrix[0].length-1;
        while(l<=r){
            let mid=l+((r-l)>>1);
            if(matrix[i][mid]>target){
                r=mid-1;
            }else if(matrix[i][mid]<target){
                l=mid+1;
            }else{
                return true;
            }
        }
    }

    return false;
};