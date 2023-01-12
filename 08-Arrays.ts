// type array
const languages: string[] = [];
languages.push("JS")

//another way to write
const counts: Array<number> = [];
counts.push(1);

// type object array
type User = {
    name: string,
    isActive: boolean

}

const Users: User[] = [];

Users.push({name: "testuser", isActive: false})

export {} // Temporary to remove ts error.