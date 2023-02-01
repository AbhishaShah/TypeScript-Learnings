/*  typeof type guards */

function printAll(strs: string | string[] | null) {
  //  check for null & empty value
  if (strs && strs != "") {
    // use typeof to check type
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } else {
      // do nothing
    }
  }
}

/* The in operator narrowing */

/* Check if an object has a property with a name usin the "i"n operator.For example, with the code: "value" in x. where "value" is a string literal and x is a union type */

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

const isAdminAccount = (account: User | Admin) => {
  if ("isAdmin" in account) return account.isAdmin;
};

/* instanceof narrowing */

/* To check whether or not a value is an “instance” of another value / instace of class . It is useful for most values that can be constructed with new.
 For Example x instanceof Foo checks whether the prototype chain of x contains Foo.prototype. */

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

/* type predicates */

type Fish = { swim: () => void };
type Bird = { fly: () => void };

const isFish = (pet: Fish | Bird): pet is Fish => {
  return (pet as Fish).swim !== undefined;
};

const getFood = (pet: Fish | Bird) => {
  if (isFish(pet)) {
    pet;
    console.log("Fish Food");
  } else {
    pet;
    console.log("Bird Food");
  }
};

/* The never type */

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}
interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default: // Adding a new member to the Shape union which have different type than never, will cause a TypeScript error and force you write vcode for other shape anyway i.e. Triangle
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
