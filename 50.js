/**
 * @param {string} s
 * @return {string[][]}
 */
const check=(s,l,r)=>{
    for(let i=l,j=r;i<j;i++,j--){
        if(s[i]!=s[j]){
            return false;
        }
    }
    return true;
}
var partition = function(s) {
    let path=[],res=[];

    const dfs=(startindex)=>{
        if(startindex>=s.length){
            res.push(Array.from(path));
            return;
        }

        for(let i=startindex;i<s.length;i++){
            if(!check(s,startindex,i))continue;
            path.push(s.slice(startindex,i+1));
            dfs(i+1);
            path.pop();
        }
    }
    dfs(0);
    return res;
};
