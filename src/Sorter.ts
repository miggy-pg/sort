//  This interface is not being used since we used 'abstract
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  // 'abstract' means that these function/field will at some point in the exist
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  // NOTE: This noted line below were implemented before we used 'abstract' property declarations (line 11 - 13)
  // recall that the ''public'' keyword is a shortcut to create a property with the same name and type as the constructor argument
  // so the above line is the same as:
  // collection: numbers[];
  // constructor(collection: numbers[] | string) {
  //   this.collection = collection;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
