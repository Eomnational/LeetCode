/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let last={};
    for(let i=0;i<s.length;i++){
        last[s[i]]=i;
    }

    let start=0,end=0,res=[];
    for(let i=0;i<s.length;i++){
        end=Math.max(end,last[s[i]]);

        if(i==end){
            res.push(end-start+1);
            start=end+1;
        }

    }

    return res;
};