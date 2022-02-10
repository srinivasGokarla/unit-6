
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
    let temp;
    while(head!==null){
        if(head.next === null){
            return false;
        }
        if(head.next === temp){
            return true;
        }
        let nex = head.next;
        head.next = temp;
        head = nex;
    }
    return false;
};

// const LinkedListNode = class {
//     constructor(nodeData) {
//         this.data = nodeData;
//         this.next = null;
//     }
// };
// // Complete the function below
// var hasCycle = function(head) {
//     var slow=head,fast=head;
//     while(slow!=null && fast!=null && fast.next!=null){
//         slow=slow.next;
//         fast=fast.next.next;
//         if(slow===fast){
//             return true;
//             break;
//         }
//     }
//     return false;
// };