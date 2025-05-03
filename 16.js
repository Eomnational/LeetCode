/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let t=head,p=head;
    while(p!=null&&p.next!=null){
        t=t.next;
        p=p.next.next;
        if(t===p){
            return true;
        }
    }

    return false;
 };