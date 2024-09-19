/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) {
        return head; // Edge case: empty list, single node, or no rotation needed
    }

    // Step 1: Calculate the length of the linked list and get the tail
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Step 2: Find the effective rotations needed
    k = k % length;  // In case k is greater than length
    if (k === 0) {
        return head;  // No rotation needed if k is a multiple of length
    }

    // Step 3: Make the list circular
    tail.next = head;

    // Step 4: Find the new tail and new head
    let stepsToNewHead = length - k;
    let newTail = head;
    for (let i = 1; i < stepsToNewHead; i++) {
        newTail = newTail.next;
    }

    let newHead = newTail.next;
    newTail.next = null;  // Break the circle

    return newHead;
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print a linked list
function printLinkedList(head) {
    let result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Test the implementation
let arr = [1, 2, 3, 4, 5];  // Example list
let head = createLinkedList(arr);  // Create linked list from array
console.log("Original List:");
printLinkedList(head);

let k = 2;  // Number of rotations
head = rotateRight(head, k);  // Rotate the list

console.log(`List after rotating by ${k} positions:`);
printLinkedList(head);
