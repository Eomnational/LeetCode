/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map=new Map();
    for(let i=0;i<strs.length;i++){
        let c=strs[i].split('').sort().join('');
        if(map.has(c)){
            map.get(c).push(strs[i]);
        }else{
           map.set(c,[strs[i]]);
        }
    }

    return Array.from(map.values());
};