//string
let greetings: string = "Hello World!";

greetings.toUpperCase();

//number
let ticketId: number = 545.23; // all int,float will have 'number' type

ticketId.toFixed();

//boolean
let isLoggedIn: boolean = false;

isLoggedIn.valueOf();


let id = 123.45;
id.toFixed(); // TS smarty do type inferring and recognise id have number type.

export {} // Temporary to remove ts error.