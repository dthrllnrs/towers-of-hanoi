import Disc from "./Disc";

export default class {
    constructor(id, size = 0, isLast = false) {
        this.id = id;
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

    isDroppable(node) {
        if (this.head === null) return true;
        if (this.head.value < node.value) return true;
        return false;
    }

    setHead(node) {
        this.size += 1;
        node.setNext(this.head);
        this.head = node;
    }

    detachHead() {
        this.size -= 1;
        this.head = this.head.next;
    }
}