// Implement enqueue and dequeue using only two stacks

let stack1 = [];
let stack2 = [];

// stacks are LIFO, queues are FIFO

const enqueue = (item) => {
    stack1.push(item);
};

const dequeue = () => {
    while (stack1.length > 0) {
        const popped = stack1.pop();
        stack2.push(popped);
    }

    return stack2.pop();
};