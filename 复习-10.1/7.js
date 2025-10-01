/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let res=[];
    for(let i=0;i<s.length;i++){
        let c=s[i];
        switch(c){
            case '(':
               res.push(')');
               break;
            case '{':
               res.push('}');
               break;
            case '[':
                res.push(']');
                break;
            default:
                if(res.pop()!==c){
                    return false;
                }
        }
    }

   return res.length==0;
};