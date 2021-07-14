/* eslint-disable no-constant-condition */
/** Binary Search Tree Data Structure */


class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}

		let temp = this.root;
		while (true) {
			if (newNode.value === temp.value) return undefined;
			if (newNode.value < temp.value) {
				if (temp.left === null) {
					temp.left = newNode;
					return this;
				}
				temp = temp.left;
			} else {
				if (temp.right === null) {
					temp.right = newNode;
					return this;
				}
				temp = temp.right;
			}
		}

	}

	contains(value) {
		if (this.root === null) return false;
		let temp = this.root;

		while (temp) {
			if (value < temp.value) {
				temp = temp.left;
			} else if (value > temp.value) {
				temp = temp.right;
			} else {
				return true;
			}
		}
		return false;
	}
}

export default { Node, BST };

const myBst = new BST();
myBst.insert(47);
myBst.insert(21);
myBst.insert(76);
myBst.insert(18);
myBst.insert(52);
myBst.insert(82);
myBst.insert(27);
console.log(myBst);

console.log(myBst.contains(23));
console.log(myBst.contains(52));