class User {
  firstName: string;
  lastName: string;
  private readonly country: string = "Canada";

  constructor(fname: string, lname: string) {
    this.firstName = fname;
    this.lastName = lname;
  }
}

const testUser = new User("abhi", "shah");
// testUser.country = "US"; //TS Error: Cannot assign to 'country' because it is a read-only property.ts(2540)
// testUser.country; // TS Error: Property 'country' is private and only accessible within class 'User'.ts(2341)

// Better way to write class in TS
class BetterUser {
  protected _role: string;
  readonly city: string;
  score: number;
  constructor(
    public fname: string,
    public lname: string,
    private readonly userId: number
  ) {}

  get getScore(): number {
    return this.score;
  }

  /* Setters cannot return a value and so that do not have a return type. */

  //set setScore(value: string | number | boolean): string {} // TS Error: A 'set' accessor cannot have a return type annotation.ts(1095)

  /* Also can's pass 'void' as return type */

  // set setScore1(value: string | number | boolean): void {} // TS Error: A 'set' accessor cannot have a return type annotation.ts(1095)

  set setScore(value: string | number | boolean) {
    let num = Number(value);

    if (num <= 1) {
      throw new Error("Score should be more than 1");
    }
    this.score = num;

    //  return this.score; // Setters cannot return a value.ts(2408)
  }
}

class FamilyUser extends BetterUser {
  getRole() {
    return this._role; // protected property can be accessible in sub class
  }
}

const u1 = new FamilyUser("abhi", "shah", 1);
// u1._role // TS Error" Property '_role' is protected and only accessible within class 'BetterUser' and its subclasses.ts(2445)

export {}; // Temporary to remove ts error.
