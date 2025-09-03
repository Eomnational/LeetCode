/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res=[],u=0,l=0,d=matrix.length-1,r=matrix[0].length-1;
    while(true){

        for(let i=l;i<=r;i++){
            res.push(matrix[u][i]);
        }
        u++;
        if(u>d){
            break;
        }

        for(let i=u;i<=d;i++){
            res.push(matrix[i][r]);
        }

        r--;
        if(l>r){
            break;
        }

        for(let i=r;i>=l;i--){
            res.push(matrix[d][i]);
        }

        d--;
        if(u>d){
            break;
        }

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