// interface is blueprint of the class

abstract class Registartaion {
  constructor(public name: string, public role: string) {}

  abstract getRole(): string; // Method 'getCountry' cannot have an implementation because it is marked abstract.ts(1245)

  getCountry(): string {
    // We can define method in abstartc class
    return "Canada";
  }
}

// const abstractClassObject = new Registartaion("test", "user"); // TS Error: Cannot create an instance of an abstract class.ts(2511)

class User extends Registartaion {
  constructor(public name: string, public role: string, public score: number) {
    super(name, role);
  }

  getRole() {
    return this.role;
  }
}

const testUser = new User("abhi", "admin", 100);

testUser.getCountry();
