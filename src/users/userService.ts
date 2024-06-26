import User from "./user";

class UserService {
  invoke(): User[] {
    return [
      { id: 1, name: "User1", email: "user1@test.local" },
      { id: 2, name: "User2", email: "user2@test.local" },
      { id: 3, name: "User3", email: "user3@test.local" },
    ];
  }
}

export default UserService;
