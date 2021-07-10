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

	insert(index, value) {
		if (index === 0) return this.unshift(value);
		if (index === this.length) return this.push(value);
		if (index < 0 || index >= this.length) return false;

		const newNode = new Node(value);
		const temp = this.get(index - 1);
		newNode.next = temp.next;
		temp.next = newNode;
		this.length++;
		return true;
	}

	remove(index) {
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		if (index < 0 || index >= this.length) return undefined;

		const before = this.get(index - 1);
		const temp = before.next;
		before.next = temp.next;
		temp.next = null;
		this.length--;
		return temp;
	}

	reverse() {
		let temp = this.head;
		this.head = this.tail;
		this.tail = temp;
		let next = temp.next;
		let prev = null;

		for (let i = 0; i < this.length; i++) {
			next = temp.next;
			temp.next = prev;
			prev = temp;
			temp = next;
		}
		return this;
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
console.log(myLinkedList.insert(2, 45));
console.log(myLinkedList);
console.log(myLinkedList.remove(3));
console.log(myLinkedList);
myLinkedList.toString();
myLinkedList.reverse();
myLinkedList.toString();