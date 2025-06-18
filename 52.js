/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    let arr=[];
    for(let cur=head;cur!=null;cur=cur.next){
        arr.push(cur.val)
    };
    arr.sort((a,b)=>a-b);
    let dummy=new ListNode(-1),p=dummy;
    for(let i=0;i<arr.length;i++){
        p.next=new ListNode(arr[i]);
        p=p.next;
    }
    return dummy.next;

};