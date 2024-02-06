class ListNode{
    constructor(value){
        this.value = value;
        this.next = null;
    }

}

function reverseLinkedList(head){
    
    let current = head;
    [prev, next] = [null, null];
    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);

const reversedList1 = reverseLinkedList(list1);
console.log(reversedList1);


const list2 = new ListNode(1);
list2.next = new ListNode(2);
const reversedList2 = reverseLinkedList(list2);
console.log(reversedList2);