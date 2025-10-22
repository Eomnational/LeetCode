/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res=[];

    const dfs=(str,l,r)=>{

        if(str.length===2*n){
            res.push(str);
            return;
        }

        if(l>0){
            dfs(str+'(',l-1,r);
        }

        if(r>l){
            dfs(str+')',l,r-1);
        }
    }
    dfs('',n,n)
    return res;
};