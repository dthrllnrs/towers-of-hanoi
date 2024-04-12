// The node in the linked list
export default class {
    constructor(value) {
        this.value = value;
        this.next = null;

        // the color of the outputted disc
        this.color = this.value % 2 === 0 ? '#663300' : '#FF9933';
    }

    // function to set the next node in the linked list
    setNext(node) {
        this.next = node;
    }
}