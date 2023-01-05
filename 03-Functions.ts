//simple function
const total = (num: number) => {

  // num.toUpperCase() // Error: Property 'toUpperCase' does not exist on type 'number'.ts

    return num + 10;
}

total(10);

console.log('Total:', total);

//function with default values

const loginUser = (name: string,email: string,isChecked: boolean = false) => console.log(name);

loginUser("AS","AS@gmail.com")

export {} // Temporary to remove ts error.