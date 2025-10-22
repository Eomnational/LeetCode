/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    for(let i=0;i<matrix.length;i++){
        let left=0,right=matrix[0].length-1;
            while(left<=right){
                let mid=left+((right-left)>>1);
                if(matrix[i][mid]>target){
                    right=mid-1;
                }else if(matrix[i][mid]<target){
                    left=mid+1;
                }else{
                    return true
                }
            }
        
    }

    return false;
};