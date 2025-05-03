/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyhead=new ListNode(0,head);
    let fast=dummyhead;
    let slow=dummyhead;
    while(n--){
        fast=fast.next;
    }

    while(fast.next!==null){
        fast=fast.next;
        slow=slow.next;
    }
    slow.next=slow.next.next;
    return dummyhead.next;
};