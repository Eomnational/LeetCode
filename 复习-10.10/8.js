/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let map1=new Map();
    let map2=new Map();

    for(let i=0;i<matrix.length;i++){

        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]==0){
                map1[i]=i;
                map2[j]=j;
            }
        }
    }


    for(let i in map1){
        for(let j=0;j<matrix[0].length;j++){
            matrix[i][j]=0;
        }
    }

    for(let j in map2){

        for(let i=0;i<matrix.length;i++){
            matrix[i][j]=0;
        }
    }

    return matrix;
};