//Describe how our data will look like
// STACK => last in first out(LIFO)
type Node<T> = {
    value: T,
    prev?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    // Shift => Adding an item in the Stack
    push(item: T): void {
        const node = {value: item} as Node<T>

        this.length ++
        if(!this.head) {
            this.head = node;
            return
        }

        node.prev = this.head;
        this.head = node;

}
    // Unshift => Removing an item from the stack
    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);

        if(this.length === 0) {
            const current = this.head;
            this.head = undefined;
            return current?.value;
        }
        const current = this.head as Node<T>;
        this.head = current.prev;
        return current.value;

}
    peek(): T | undefined {
        return this.head?.value;
    }
}