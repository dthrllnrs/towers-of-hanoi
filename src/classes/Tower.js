import Disc from "./Disc";

// The linked list class
export default class {
    constructor(id, size = 0, isLast = false) {
        this.id = id;
        // the head node in the linked list
        this.head = null;
        this.isLast = isLast;

        // generate discs
        if (size) {
            for (let i = 0; i < size; i++) {
                let currentNode = new Disc(i);
                this.setHead(currentNode);
            }
        }

        this.size = size;
    }

    // check if a disc can be dropped in a tower
    isDroppable(node) {
        if (this.head === null) return true;
        if (this.head.value < node.value) return true;
        return false;
    }

    // set a new node as the head of the linked list. called when a disc is dropped
    setHead(node) {
        this.size += 1;
        node.setNext(this.head);
        this.head = node;
    }

    // detach the head node in the linkedlist. called when a disc is dragged off the tower
    detachHead() {
        this.size -= 1;
        this.head = this.head.next;
    }
}