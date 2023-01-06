//1. Function with object Type
type User = {
 name: string,
 email: string,
 isPaid: false
}

const createUser = (user: User) => {}

createUser({name:"testuser", email:"t@t.com", isPaid:false});

export {} // Temporary to remove ts error.