/**	Jest Test
 *
 */




test('List is a class', () => {
  expect(typeof l.prototype.constructor).toEqual('function');
});

test('Node is a class', () => {
  const node = new Node(1);
  expect(typeof node.prototype.constructor).toEqual('function');
});

describe('A Node', () => {
  test('has properties "data" and "next"', () => {
    const node = new linkedList.Node()
    expect(node.value).toEqual(1);
    expect(node.nex).toEqual(null);
  });
});

describe('Insert First', () => {
  test('appends a node to the start of the list', () => {
    const l = new LinkedList();
    l.unshift(1);
    expect(l.head.value).toEqual(1);
    l.unshift(2);
    expect(l.head.value).toEqual(2);
  });
});

describe('Size', () => {
  test('returns the number of items in the linked list', () => {
    const l = new LinkedList();
    expect(l.length()).toEqual(0);
    l.push(1);
    l.push(1);
    l.push(1);
    l.push(1);
    expect(l.length()).toEqual(4);
  });
});
