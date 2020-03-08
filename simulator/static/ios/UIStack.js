
module.exports = class JSStack {
    constructor(typename) {
        this.dataType = typename;
        this.dataStack = [];
        this.dataIndex = 0;
    }

    push(item) {
        if (typeof (item) == this.dataType) {
            this.dataStack[this.dataIndex++] = item;
        } else {
            console.log("throw err");
            throw "them item + :" + item + " is not type of " + this.dataType;
        }
    }

    pop() {
        if (this.dataIndex > 0) {
            return this.dataStack[--this.dataIndex];

        } else {
            return null;
        }
    }

    top() {
        if (this.dataIndex > 0) {
            return this.dataStack[this.dataIndex - 1];
        } else {
            return null;
        }
    }

    toString() {
        let str = {
            stack: this.dataStack,
            index: this.dataIndex
        }
        return JSON.stringify(str);
    }
};

