/* identityOne it takes a type parameter Type, and an argument arg which is also Type, and return type also Type.” */
const identityOne = <Type>(val: Type): Type => {
  // val.length; // TS Error: Property 'length' does not exist on type 'Type'.ts(2339)

  return val;
};

/* identityOne is the generic function, takes a type parameter Type, and an argument arg which is an array of Types, and returns an array of Types.
If we passed in an array of numbers, we’d get an array of numbers back out, as Type would bind to number. 
This allows us to use our generic type variable Type as part of the types we’re working with, rather than the whole type, giving us greater flexibility. */
identityOne(120); // now Type become "string here"

const identityTwo = <T>(val: T[]): T[] => {
  val.length;
  return val;
};

identityTwo([10]);
//identityTwo("10"); // TS Error: Argument of type 'string' is not assignable to parameter of type 'unknown[]'.ts(2345)
