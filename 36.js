/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m=matrix.length,n=matrix[0].length;

    for(let i=0;i<m;i++){
        let left=0,right=n-1,mid=0;
        while(left<=right){
            let mid=left+((right-left)>>1);
            if(matrix[i][mid]<target){
                 left=mid+1;
            }else if(matrix[i][mid]>target){
                right=mid-1;
            }else{
                return true;
            }
        }

    }
    return false;
};