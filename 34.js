/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
   let res=[];
   if(matrix===null||matrix.length===0) return matrix;
   let u=0,d=matrix.length-1,l=0,r=matrix[0].length-1;
   while(true){
      //上边界下移
      for(let i=l;i<=r;i++){
        res.push(matrix[u][i]);
      }
      u++;
      if(u>d) break;
      //右边界左移
      for(let i=u;i<=d;i++){
        res.push(matrix[i][r])
      }
      r--;
      if(l>r) break;
      //下边界上移
      for(let i=r;i>=l;i--){
        res.push(matrix[d][i])
      }
      d--;
      if(u>d) break;
      //左边界右移
      
      for(let i=d;i>=u;i--){
        res.push(matrix[i][l]);
      }
      l++;
      if(l>r) break;


   }
   return res;
};


