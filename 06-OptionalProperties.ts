//1. Optional Properties

type User = {
 readonly _id: string,
 name: string,
 email: string,
 isPaid: boolean,
 creditcardDetails?: number // Optional property with ?, not mandatory to pass eveytime
}

let myUser : User = {
    _id: "111",
    name: 'testuser',
    email:'t@t.com',
    isPaid:false
}

myUser.email = 'testuser@.com' // allow to update
// myUser._id = "123"; // TS Error: Cannot assign to '_id' because it is a read-only property.ts(2540)


export {} // Temporary to remove ts error.