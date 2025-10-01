/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1=version1.split('.');
    let v2=version2.split('.');

    for(let i=0;i<v1.length||i<v2.length;i++){
        let a=+v1[i]||0;
        let b=+v2[i]||0;
        if(a>b){
            return 1;
        }else if(a<b){
            return -1;
        }
    }

    return 0;
};