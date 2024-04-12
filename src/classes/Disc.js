export default class {
    constructor(value) {
        this.value = value;
        this.next = null;

        this.color = this.value % 2 === 0 ? '#663300' : '#FF9933';
    }

    setNext(node) {
        this.next = node;
    }
}