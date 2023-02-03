/* identityOne it takes a type parameter Type, and an argument arg which is also Type, and return type also Type.” */
const identityOne = <Type>(val: Type): Type => {
  // val.length; // TS Error: Property 'length' does not exist on type 'Type'.ts(2339) Because it will not always guaranteed that it woluld be string,could be number,boolean or else

  return val;
};

identityOne(120); // now Type become "number" here

/* identityTwo is the generic function, takes a type parameter Type, and an argument arg which is an array of Types, and returns an array of Types.
If we passed in an array of numbers, we’d get an array of numbers back out, as Type would bind to number. 
This allows us to use our generic type variable Type as part of the types we’re working with, rather than the whole type, giving us greater flexibility. */
const identityTwo = <T>(val: T[]): T[] => {
  val.length;
  return val;
};

identityTwo([10]);
//identityTwo("10"); // TS Error: Argument of type 'string' is not assignable to parameter of type 'unknown[]'.ts(2345)

const getSearchProducts = <T>(products: T[]): T => {
  //return products; // TS Error: Type 'T[]' is not assignable to type 'T'. 'T' could be instantiated with an arbitrary type which could be unrelated to 'T[]'.
  const myIndex = 2;
  return products[myIndex]; // It should be from the products array.
};
