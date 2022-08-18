// https://leetcode.com/problems/reverse-linked-list/submissions/
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val===undefined ? 0 : val)
		this.next = (next===undefined ? null : next)
	}
}


 function reverseList(head: ListNode | null): ListNode | null {
	let current = head;
	let reversed = new ListNode();
	let before = null;

	while(current !== null) {
		if (current === null) return reversed
		console.log(current)
		reversed.val = current.val
		current = current.next
		console.log(current!.next !== null)
		reversed.next = new ListNode(reversed.val, reversed.next)
	}
	return reversed.next
};
