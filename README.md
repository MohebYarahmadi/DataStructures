# DataStructures

1. clone the repository
2. run `npm install` to install all dependencies
3. run `npm start` to run the server
4. open the `localhost:4000` and go to devtools> console


# Implementing:
## LinkedList

**Node type:**

| Property | Description                              |
| -------- | ---------------------------------------- |
| value    | *The actual data that held by the node.* |
| next     | *Point to the next node/item*            |



**LinkedList type:**

| Property | Description                                |
| -------- | ------------------------------------------ |
| head     | *Point to the first node/item in the list* |
| tail     | *Point to the last node/item in the list*  |
| length   | *the length of the list*                   |

| Methods                           | Description                                                  |
| --------------------------------- | ------------------------------------------------------------ |
| push(value: any)                  | *Add new node with the given data as its value to the end of the list. this is an O(1)  operation. it will return the list but you can modified to return just true.* |
| pop()                             | *Remove and return the last node to the caller. O(n) operation.* |
| unshift(value: any)               | *Add new node with the given data as its value to the beginning of the list. O(1) operation. it will return the list but you can modified to return true.* |
| shift()                           | *Remove and return the first node to the caller. O(1) operation.* |
| get(index: number)                | *Search for a node by its index and return it. if it's not exist it will return undefined. O(n) operation.* |
| set(index: number, value: any)    | *If node exist at the specified index, it will update its value by the new given value and return true. otherwise it will return false. O(n) operation.* |
| insert(index: number, value: any) | *Create a new node by the given value and insert it at the specific index and return the created node to the caller. if the index is out of range it will return undefined. O(n) operation.* |
| reverse()                         | *Return the list in reverse order. O(n) operation.*          |
| toString()                        | *Give you some information about the instance.*              |

## DoublyLinkedList
## Queue
## Stacks
## Tree (Binary Search Tree)
## HashTable