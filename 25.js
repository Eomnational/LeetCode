/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res=[];
    for(let i=0;i<numRows;i++){
        let arr=new Array(i+1).fill(1);
        for(let j=1;j<arr.length-1;j++){
            arr[j]=res[i-1][j]+res[i-1][j-1];
        }
        res.push(arr);
    }
    return res;
};


// 示例 1:

// 输入: numRows = 5
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// 示例 2:

// 输入: numRows = 1
// 输出: [[1]]