const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let newNode = new Node(data);

        if (this._head == null) {
            this._head = newNode;
            this._tail = newNode;                                        
        } else {                    
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        }
        this.length++;
    }

    head() {
        if (this._head != null) {
            return this._head.data;
        }
        return null;                
    }

    tail() {
        if (this._tail != null) {
            return this._tail.data;
        }
        return null;
    }

    at(index) {
        let tempLinkedList = this._head;
        while (index > 0 && tempLinkedList != null) {
            tempLinkedList = tempLinkedList.next;
            index--;
        }

        if (tempLinkedList != null) {
            return tempLinkedList.data;
        } else {
            return null;
        }
    }

    insertAt(index, data) {
        if (index > this.length || index < 0 || this._head == null) {
            throw "Wrong index";
        }

        let copyIndex = index;
        let tempLinkedList = this._head;
        while (index > 0 && tempLinkedList != null) {
            tempLinkedList = tempLinkedList.next;
            index--;
        }

        let newNode = new Node(data);
        if (this._head == null) {
            this._head = newNode;
            this._tail = newNode;
            this.length++;
        } else if (copyIndex == 0) {
            this._head = newNode;
            newNode.next = tempLinkedList;
            tempLinkedList.prev = newNode;
        } else {
            tempLinkedList.prev.next = newNode;
            newNode.prev = tempLinkedList.prev;
            newNode.next = tempLinkedList;
            tempLinkedList.prev = newNode;
        }                
    }

    isEmpty() {
        if (this._head == null) {
            return true;
        }
        return false;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    deleteAt(index) {
        let tempLinkedList = this._head;
        if (index > this.length) {
            return false;
        }

        while (index > 0 && tempLinkedList != null) {
            tempLinkedList = tempLinkedList.next;
            index--;
        }

        if (this.length == 1) {
            this._head = null;
            this._tail = null;
            this.length = 0;
        } else {
            if (tempLinkedList.prev == null) {
                this._head = tempLinkedList.next;                        
            } else if (tempLinkedList.next == null) {
                this._tail = tempLinkedList.next;
            } else {
                tempLinkedList.prev.next = tempLinkedList.next;
                tempLinkedList.next.prev = tempLinkedList.prev;
            }
            this.length--;
        }
    }

    reverse() {
        let tempListHead = this._head;
        let tempListTail = this._tail;

        for (let i = 0; i < this.length / 2; i++) {
            let tempData = tempListHead.data;
            tempListHead.data = tempListTail.data;
            tempListTail.data = tempData;
            tempListHead = tempListHead.next;
            tempListTail = tempListTail.prev;
        }
    }

    indexOf(data) {
        let tempLinkedList = this._head;
        let index = 0;
        while (tempLinkedList != null) {
            if (tempLinkedList.data == data) {
                break;
            }
            tempLinkedList = tempLinkedList.next;
            index++;
        }

        if (tempLinkedList != null) {
            return index;
        }
        return -1;
    }
}
		
module.exports = LinkedList;
