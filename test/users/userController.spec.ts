import { mockReq, mockRes } from "sinon-express-mock";
import { getUsers } from "../../src/users/userController";

describe("src/users/userController", () => {
  test("create", async () => {
    const req = mockReq();
    const res = mockRes();

    await getUsers(req, res);
    expect(res.status.calledWith(200)).toBeTruthy();
  });
});
