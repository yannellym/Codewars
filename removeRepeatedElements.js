
// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

// Example 1:


// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]
// Example 2:

// Input: head = [], val = 1
// Output: []
// Example 3:

// Input: head = [7,7,7,7], val = 7
// Output: []


var removeElements = function(head, val) {
    let previousNode = null;
    let currentNode = head;        //  storing head to currentNode
    while(currentNode !== null) {     //  iterating on linkedList till last node as elements are repetetive
        if(currentNode.val === val) {  // if value matches
            if(previousNode) {     // check if this is first node as for first node there is no previous node
                previousNode.next = currentNode.next;  // if not the first node then remove the current value by storing next-node to previous-next
            }
            else {       // if first node, simply move the head pointer to next node
                head = currentNode.next;
            }
            currentNode = currentNode.next; //  move the current node to next node for iteration
        }
        else {     //   if current node value doesn't match 
            previousNode = currentNode;  // store current node as previous node
            currentNode = currentNode.next;  //  move the current node to next node for iteration
        }
    }    
    return head;  // returning the head
    
};
