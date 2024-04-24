"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null; //default value for 'next' and expected a return value of Node or null
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    // Steps in creating a Linked List
    // 1) Make sure that we have a 'head'
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        // We are checking if the node is referencing to a value next to it. If it exist, assign the next value as the new head
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        // Once we get the very last node, we will take the node that we created and assign it as our last node's next property (this is the node that we created)
        // So if our last node is 2, the next node to it is 2
        tail.next = node;
    }
    get length() {
        if (!this.head)
            return 0;
        let length = 1;
        let node = this.head;
        // We are checking if our node has a neighbour/next value. If there exist, it will loop on our 'while' statement continuous to check if our node has a next value
        // So if we are on the last node, it will not have a next value so our 'while' loop will break down and our length will have the total length of our data
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    // The use of 'at' function is to get access on a specific element on our Linked List and print it
    at(index) {
        if (!this.head)
            throw new Error("Index out of bounds");
        let counter = 0;
        let node = this.head;
        // Check if 'head' exist
        while (node) {
            // Since our counter continually increases(line 57), it will end up to the exact position where the node element is positioned
            if (counter === index) {
                return node;
            }
            // If the condition doesn't met, it will continue to increase the counter
            counter++;
            // As the counter also increases, we are also pointing our 'head' to the next value since our counter also increases so when our 'if' condition is met, our code in line 53 returns the exact node value
            node = node.next;
        }
        throw new Error("Index out of bounds");
    }
    compare(leftIndex, rightIndex) {
        if (!this.head)
            throw new Error("List is empty");
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    // Instead of swapping the node, we are only swapping the value of the node
    // Why?
    // Because we also need to fix the nodes referencing 'before' the node that we are swapping
    swap(leftIndex, rightIndex) {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftHand = leftNode.data;
        // Swapping of values starts here
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }
    print() {
        if (!this.head)
            return;
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
