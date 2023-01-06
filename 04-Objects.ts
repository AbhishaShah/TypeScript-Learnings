//1. Function with object
const User = {
 name: "testuser",
 isPaid:false
}

const createUser = ({name: string, isPaid:boolean}) => {}

createUser(User);

//2. Function with return type as object
const createUser1 = ( (): {name: string, price:number} => {
    
    return {name:'AngularJs',price:599};
}
)
createUser1();

export {} // Temporary to remove ts error.