function solve() {
    let obj = {
        list: [],
        size: 0,
        add: function (element) {
            this.list.push(element);
            this.size += 1;
            this.list = this.list.sort((a, b) => a - b);
        },
        remove: function (index) {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1);
                this.size -= 1;
            }else{
                throw new Error('outside list');
            }
        },
        get: function(index){
            if (index >= 0 && index < this.list.length) {
               return this.list[index];
            }
        }
    };
    return obj;
}