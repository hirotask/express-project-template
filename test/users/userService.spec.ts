import UserService from "../../src/users/userService";

const service = new UserService();

describe("userService test", () => {
  test("invoke() return value is be defined", () => {
    expect(service.invoke()).toBeDefined();
  });
});
