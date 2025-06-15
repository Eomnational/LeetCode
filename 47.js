/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const k = digits.length;
    const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
    let res=[],path=[];
    if(!k) return [];
    if(k==1) return map[digits].split('');
    function dfs(n,k,a){
        if(path.length===k){
            res.push(path.join(''));
            return;
        }

        for(const v of map[n[a]]){
            path.push(v);
            dfs(n,k,a+1);
            path.pop();
        }
    }

    dfs(digits,k,0);
    return res;
};