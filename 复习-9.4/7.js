/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const check=(s,l,r)=>{
        for(let i=l,j=r;i<j;i++,j--){
            if(s[i]!==s[j]){
                return false
            }
        }
        return true;
    }

    let path=[],res=[];

    const dfs=(start)=>{
        if(start>=s.length){
            res.push([...path]);
            return;
        }

        for(let i=start;i<s.length;i++){
            if(!check(s,start,i)) continue;
            path.push(s.slice(start,i+1));
            dfs(i+1);
            path.pop();
        }

    }
    dfs(0);
    return res;
};