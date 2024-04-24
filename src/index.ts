import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Xaayb");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedlist = new LinkedList();
linkedlist.add(5);
linkedlist.add(2);
linkedlist.add(0);
linkedlist.add(6);

linkedlist.sort();
linkedlist.print();
