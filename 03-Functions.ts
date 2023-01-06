//1. simple function
const total = (num: number) => {

  // num.toUpperCase() //TS Error: Property 'toUpperCase' does not exist on type 'number'.ts

    return num + 10;
}

total(10);

console.log('Total:', total);

//2. function with default values
const loginUser = (name: string,email: string,isChecked: boolean = false) => console.log(name);

loginUser("AS","AS@gmail.com")

//3. function with specfied return types
const total1 = (num: number) : number => {

    //  return "Bye"; //TS Error: Type 'string' is not assignable to type 'number'.ts
  
      return num + 10;
  }

//4. function with multiple return types
const getValue = (num: number) : (string|boolean) => {

    if(num === 0){
        return false
    }
    
    return '200 OK ';
  }

//5. map with return type
const groceryList = ["Fruits, Milk, Yogurt"];

groceryList.map((item): string => {
   // return 3; //TS Error: Type 'number' is not assignable to type 'string'.ts

   return `Grocery Item: ${item}`;

})

//6. Function with void return type
const consoleError= (errmsg : string): void => {
    console.log(errmsg);

   // return errmsg //TS Error: Type 'string' is not assignable to type 'void'.ts(2322)

}

export {} // Temporary to remove ts error.