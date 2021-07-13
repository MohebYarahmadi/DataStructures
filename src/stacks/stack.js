class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.top = newNode;
		} else {
			newNode.next = this.top;
			this.top = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length === 0) return undefined;

		let temp = this.top;
		this.top = this.top.next;
		temp.next = null;
		this.length--;
		return temp;
	}
}


console.log('============= Stack.js ==============');
const myStack = new Stack();
myStack.push(123);
myStack.push(12);
myStack.push(13);
myStack.push(23);
console.log(myStack);
console.log(myStack.pop());
