/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let nums=[]
    while(head){
        nums.push(head.val);
        head=head.next;
    }


    for(let i=0,j=nums.length-1;i<j;i++,j--){
        if(nums[i]!==nums[j]){
            return false;
        }
    }

    return true;
};