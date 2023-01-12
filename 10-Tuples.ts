//tuples/enum type

// it should follow same sequense of defined types
type User = [string , number, boolean];
let user: User = ["testuser" , 111, false];
//user = [10, false] // TS error: Type 'number' is not assignable to type 'string'.ts(2322)
//user = ["tuser", 20] //TS Error:   Source has 2 element(s) but target requires 3.ts(2322)
user = ["tuser", 20, false];

//user[1] = "user1" //TS Error: Type 'string' is not assignable to type 'number'.ts(2322)

user.push(false) //It will allow so be careful when using tuples

export {} // Temporary to remove ts error.