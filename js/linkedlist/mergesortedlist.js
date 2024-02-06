
class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}
function mergeSortedList(l1list,l2list){
    if (l1list === null) {
        return l2list;
    }

    if (l2list === null) {
        return l1list;
    }
    if(l1list.value < l2list.value){
        l1list.next = mergeSortedList(l1list.next,l2list)
        return l1list;
    }else{
        l2list.next = mergeSortedList(l1list,l2list.next)
        return l2list;

}
}

const l1list = new Node(1);
l1list.next = new Node(2);
l1list.next.next = new Node(4);
const l2list = new Node(1);
l2list.next = new Node(3);
l2list.next.next = new Node(4);

//Output:
console.log(mergeSortedList(l1list,l2list));//1->1->2->3->4->4