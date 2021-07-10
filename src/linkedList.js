// Creating LinkedList data structure

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		//const newNode = new Node(value)
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		// Handle empty linked list
		if (!this.head)
			return undefined;

		// Handle two or more nodes
		let temp = this.head;
		let pre = this.head;

		while (temp.next) {
			pre = temp;
			temp = temp.next;
		}
		this.tail = pre;
		this.tail.next = null;
		this.length--;

		// Handle single node
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return temp;
	}

	unshift(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	shift() {
		if (!this.head) {
			return undefined;
		}

		let temp = this.head;
		this.head = this.head.next;
		temp.next = null;
		this.length--;
		if (this.length === 0) {
			this.tail = null;
		}
		return temp;
	}

	get(index) {
		if (index < 0 || index >= this.length) {
			return undefined;
		}

		let temp = this.head;
		for (let i = 0; i < index; i++) {
			temp = temp.next;
		}
		return temp;
	}

	set(index, value) {
		let temp = this.get(index);
		if (temp) {
			temp.value = value;
			return true;
		}
		return false;
	}

	toString() {
		console.log(`[ Head: ${this.head.value}, Tail: ${this.tail.value}, Length: ${this.length} ]`);
	}
}

const myLinkedList = new LinkedList();
myLinkedList.push(23);
myLinkedList.push(24);
myLinkedList.push(25);
myLinkedList.push(26);
myLinkedList.push(27);
console.log(myLinkedList);
console.log(myLinkedList.get(2));
console.log(myLinkedList.set(3, 44));
console.log(myLinkedList.get(3));