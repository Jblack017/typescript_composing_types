// Defining Types for dynamic programming
interface User {
  name: string;
  id: number;
}

class userAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new userAccount("Blackham", 1);

// Composing Types
type DisBool = true | false;

type MindState = "open" | "closed" | "non existent";

// Using unions as function parameters to state that it could be a string or array of strings
function getLength(obj: string | string[]) {
  return obj.length;
}

// Generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// Declaring custom types with generics
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);
