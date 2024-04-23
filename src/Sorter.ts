import { NumbersCollection } from "./NumberCollection";

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}
  // recall that the ''public'' keyword is a shortcut to create a property with the same name and type as the constructor argument
  // so the above line is the same as:
  // collection: numbers[];
  // constructor(collection: numbers[] | string) {
  //   this.collection = collection;

  sort(): void {
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
