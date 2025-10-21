/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let l=0,u=0,r=matrix[0].length-1,d=matrix.length-1;
    let res=[]
    while(true){
        //上
        for(let i=l;i<=r;i++){
            res.push(matrix[u][i]);
        }
        u++;
        if(u>d){
            break;
        }
        //右
        for(let i=u;i<=d;i++){
            res.push(matrix[i][r]);
        }
        r--;
        if(l>r){
            break;
        }

        //下
        for(let i=r;i>=l;i--){
            res.push(matrix[d][i]);
        }
        d--;
        if(u>d){
            break;
        }

        //左
        for(let i=d;i>=u;i--){
            res.push(matrix[i][l]);
        }
        l++;
        if(l>r){
            break;
        }


    }

    return res;
};