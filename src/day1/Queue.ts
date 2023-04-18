type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    // Add to queue
    enqueue(item: T): void {
        const node = {value: item} as Node<T>;
        // Increase length
        this.length++;
        if(!this.tail) {
            this.tail = this.head = node;
            return;
        }

        // The item tail next is pointing to should point to the node
        this.tail.next = node;

        // The tail should change its pointer to the node  
        this.tail = node;

}
    // Remove from Queue
    deque(): T | undefined {
        // If there is no head you can not deque
        if (!this.head) {
            return undefined;
        }

        this.length--;
        // Save head
        const head = this.head;

        //Update the head
        this.head = this.head.next;

        // free
        head.next = undefined;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;

    }
    // View first element from queue
    peek(): T | undefined {
        return this.head?.value;
    }
}