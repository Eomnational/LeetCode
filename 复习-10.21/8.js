/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let slen=s.length;
    let plen=p.length;
    let sCount=new Array(26).fill(0);
    let pCount=new Array(26).fill(0);
    let res=[];
    for(let i of p){
        pCount[i.charCodeAt()-97]++;
    }

    for(let i=0,j=-plen+1;i<slen;i++,j++){
        sCount[s[i].charCodeAt()-97]++;
        if(j<0) continue;
        if(pCount.every((v,i)=>v==sCount[i])){
            res.push(j);
        }
        sCount[s[j].charCodeAt()-97]--;
    }

    return res;

};