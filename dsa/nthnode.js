const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function nth_node(head,n){
    
    let length = 1;
    let temp = head;
    
    if(head==null){
        return head
    }
    while(temp.next !== null){
        temp = temp.next
        length++;
    }
   
   let pos = length-n
   let count = 1;
   let curr = head
   while(count < pos){
       curr = curr.next;
       count++;
   }
   return curr.next.data
}