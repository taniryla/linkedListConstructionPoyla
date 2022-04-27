// Remember the acronym UPS check

// Step One (Understand). We have to understand the problem.
// 1. What is the unknown?

// create a DoublyLinkedList class including setHead,
// setTail, insertBefore, insertAfter,
// insertAtPosition (the position of the head node is 1),
// remove (given nodes and removing nodes with given values),
// searching for nodes with given values

// 2. What are the data inputs?

// nodes (we don't need to create any new nodes in these methods)

// integer for insertAtPosition

// 3. Can you restate the problem in your own words?

// doubly linked list

// 4. Can the unknown be determined from the data inputs?
// yes
// 5. Is the data inputs sufficient to determine the unknown? Insufficient? Redundant? Contradictory?
// sufficient

// 6. How should I label important pieces of data input that are a part of the problem?

// nodes

// 7. Draw a figure. Introduce suitable notation.

// Step Two (Plan). Come up with concrete examples to help you understand the problem better. Find a connection between the data inputs and the unknown. You may be obliged to consider auxiliary problems if an immediate connection cannot be found.
// 8.  Have you seen it before? Or have you seen the same problem in a slightly different form? Do you know a related problem?
// yes with Ankita

// 9.   Do you know a coding strategy that could be useful? Look at the unknown! And try to think of a familiar problem having the same or a similar unknown. Here is a problem related to yours and solve before. Could you use it? Could you use its result? Could you use its method?

// 10. Start with a simple example. Could you restate the problem? Could you restate it still differently?

// see notes

// 11. What about examples with empty inputs? Any other edge case examples? What examples with invalid inputs?

// what about nodes already in the linked list?
// stand-alone nodes?

// 12. Progress to more complex examples. What is your updated plan here to find a solution?
// 13. If you still cannot solve the proposed problem, try to solve first some related problem. Could you imagine a more accessible related problem? A more general problem? A more special problem? An analogous problem? Could you solve a part of the problem? Keep only a part of the data inputs, drop the other part; how far is the unknown then determined, how can it vary? Could you derive something useful from the data? Could you think of other data appropriate to determine the unknown? Could you change the unknown or the data, or both if necessary, so that the new unknown and the new data are nearer to each other? Did you use all the data? Did you use the whole of the data inputs? Have you taken into account all essential notions involved in the problem?

// Step Three (Solve). Carry out your plan of the solution and check each one of your steps in pseudocode.
// 14.  Can you see clearly that the step is correct?

// see pseudocode below

// IV. 	Step Four (Check). Examine the solution obtained and refactor.
// 15.  Can you check your result?
// 16.  Can you check the argument?
// 17.  Can you derive the result differently?
// 18.  Can you see it at a glance?
// 19.  Can you make the code DRYer and refactor?
// 20.  Can you improve the performance?
// 21.   How have other people solved this problem?

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // set node4.prev to null and node4.next to node
    if (this.head === null) {
      this.head = node;
      this.tail;
    }
    // set insertBefore first
  }

  setTail(node) {
    // create insertAfter first
  }

  insertBefore(node, nodeToInsert) {
    // if the nodeToInsert is the head or the tail, return
    if ((nodeToInsert = this.head && nodeToInsert = this.tail)) return;
    // iterate till current.value equals nodeToInser
    let current = head;
    while (current.value !== nodeToInsert) {
      current = current.next;
    }
    // iterate till currentNode.value equals node
    let currentNode = head;
    while (currentNode.value !== node) {
      currentNode = currentNode.next;
    }
    // remove existing pointers using remove method

    // insert nodeToInsert prior to found currentNode
    current = currentNode.prev;
  }
  removeNodesWithValue(value) {
    let node = this.head;
    while (node !== null) {
      this.removeNodeBindings(node);
    }
  }
  remove(node) {
    if (this.head === null) this.head === this.head.next;
    if (this.tail === null) this.tail = this.tail.prev;
    this.removeNodeBindings(node);
  }
  removeNodeBindings(node) {
    if (node.next !== null) node.prev === node.prev.next;
    if (node.prev !== null) node.next === node.next.prev;
    node.prev === null;
    node.next === null;
  }
}
