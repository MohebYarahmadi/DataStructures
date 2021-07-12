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
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		// Handle empty
		if (this.length === 0) return undefined;
		let temp = this.tail;
		// Handle single node
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {	// Handle two or more nodes
			this.tail = this.tail.prev;
			this.tail.next = null;
			temp.prev = null;
		}
		this.length--;
		// return result
		return temp;
	}

	unshift(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	shift() {
		if (this.length === 0) return undefined;
		let temp = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			temp.next = null;
			this.head.prev = null;
		}
		this.length--;
		return temp;
	}

	get(index) {
		if (index < 0 || index >= this.length) return undefined;

		let temp = this.head;
		if (index < this.length / 2) {
			for (let i = 0; i < index; i++) {
				temp = temp.next;
			}
		} else {
			temp = this.tail;
			for (let i = this.length - 1; i > index; i--) {
				temp.temp.prev;
			}
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
		const before = this.get(index - 1);
		const after = before.next;

		before.next = newNode;
		newNode.next = after;
		after.prev = newNode;
		newNode.prev = before;

		this.length++;
		return true;
	}

	remove(index) {
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();
		if (index < 0 || index >= this.length) return undefined;

		let temp = this.get(index);
		temp.prev.next = temp.next;
		temp.next.prev = temp.prev;
		temp.next = null;
		temp.prev = null;

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
		if (this.length === 0) {
			return undefined;
		}
		console.log(`[ Head: ${this.head.value}, Tail: ${this.tail.value}, Length: ${this.length} ]`);
	}
}

console.log('========== DoublyLinkedList.js ===============');
const myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.toString();