"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    // recall that the ''public'' keyword is a shortcut to create a property with the same name and type as the constructor argument
    // so the above line is the same as:
    // collection: numbers[];
    // constructor(collection: numbers[] | string) {
    //   this.collection = collection;
    sort() {
        const length = this.collection.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
