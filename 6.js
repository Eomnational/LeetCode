/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map=new Map();
    for(let i=0;i<strs.length;i++){
        let c=strs[i].split('').sort().join('');
        if(map.has(c)===false){
            map.set(c,[strs[i]]);
        }else{
            map.get(c).push(strs[i]);
        }
    }
    return Array.from(map.values());
};

// 示例 1:

// 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
// 示例 2:

// 输入: strs = [""]
// 输出: [[""]]
// 示例 3:

// 输入: strs = ["a"]
// 输出: [["a"]]
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs));