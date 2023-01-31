interface User {
  readonly userId: number;
  emailId: string;
  address?: string;
  startTrial(): string;
  getCouponCode(couponName: string, value: number): number;
}

// We can also add more properties (re-opening) interface later on
interface User {
  score?: number;
}

// inheritance
interface Admin extends User {
  role: "admin | free-user | paid-user";
}

const testUser: User = {
  userId: 111,
  emailId: "testuser@test.com",
  startTrial: () => {
    return "Trial started";
  },
  getCouponCode: (name: "WISH", value: 10) => {
    return 10;
  },
  score: 12,
};

// testUser.userId = "122"; // TS Error" Cannot assign to 'userId' because it is a read-only property.ts

export {}; // Temporary to remove ts error.
