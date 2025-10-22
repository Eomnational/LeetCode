/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let k=digits.length;
    if(!k) return [];
        const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
    let res=[],path=[];

    const dfs=(n,k,a)=>{

        if(path.length==k){
            res.push(path.join(''));
            return;
        }

        for(let v of map[n[a]]){
            path.push(v);
            dfs(n,k,a+1);
            path.pop();
        }
    }

    dfs(digits,k,0);
    return res;
};