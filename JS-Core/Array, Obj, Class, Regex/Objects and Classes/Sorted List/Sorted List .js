class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(num) {
        if (typeof num === 'number') {
            this.list.push(num); 
            this.size++;

            this.list.sort((a, b) => a - b);
        }
    }

    remove(index) {
        if (typeof index === 'number') {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1);
                this.size--;
            }
        }
    }

    get(index) {
        if (typeof index === 'number') {
            if (index >= 0 && index < this.list.length) {
                return this.list[index];
            }
        }
    }
  
}