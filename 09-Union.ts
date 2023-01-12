//union type
let score: number | string = 10;

score = "30"; 
score = 12;


//with user-defined type
type User = {
    name: string,
    id: number
}

type Admin = {
    userName: string
    id: number
}

let testUser: User | Admin = {
    name: "testuser",
    id:111
};

testUser = {userName: "tu",  id:111};

//with function
const getDBId = (id: number | string) => {

    if(typeof id === 'string') { //explictly need to check type first as id could be either number or string
            id.toUpperCase();
    }
    
    return id;
}

getDBId('test111');

//with array
const data: Array<number> = [10, 20, 30];

const data2: Array<string> = ["user1", "user2", "user3"];

//const data3: Array<string> | Array<number> = [10, 20, "user1"]; // TS error:Type '(string | number)[]' is not assignable to type 'number[] | string[]'
// Why? -> data3 should only have either string of array or string of number
const data3: Array<string> | Array<number> = [10, 20];
const data4: Array<string> | Array<number> = ["user1", "user2"];

const data5: Array<string | number> = [10, 20, "user1"]; //combination of string & number array


// literal type assignmant

let pi: 3.14 = 3.14
//pi = 3.142 //Ts error:Type '3.142' is not assignable to type '3.14'.ts(2322)

let seatAllotmanet: "aisle" | "window" | "middle";

//seatAllotmanet = "crew"; // Type '"crew"' is not assignable to type '"aisle" | "window" | "middle"'.ts(2322)


export {} // Temporary to remove ts error.