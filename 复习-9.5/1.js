/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const check=(s,l,r)=>{
        while(l>=0&&r<s.length&&s[l]===s[r]){
            l--;
            r++;
        }

        return s.substr(l+1,r-(l+1));
    }

    let res="";
    for(let i=0;i<s.length;i++){
        let s1=check(s,i,i);
        let s2=check(s,i,i+1);
        res.length>s1.length ?res:res=s1;
        res.length>s2.length?res:res=s2;
    }
    return res;
};