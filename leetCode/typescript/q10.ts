// https://leetcode.com/problems/merge-two-sorted-lists/
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val===undefined ? 0 : val)
		this.next = (next===undefined ? null : next)
	}
}
 
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let list = new ListNode();
  let resultList = list

  while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
          list.next = new ListNode(list1.val)
          list1 = list1.next
      }else {
          list.next = new ListNode(list2.val)
          list2 = list2.next
      }
      list = list.next
  }

  if (list1 !== null) list.next = list1
  if (list2 !== null) list.next = list2
  return resultList.next
};
