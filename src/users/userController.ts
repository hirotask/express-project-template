import express from "express";
import UserService from "./userService";

const router = express.Router();

router.route("/").get(async (req: express.Request, res: express.Response) => {
  const service = new UserService();
  const users = service.invoke();
  res.send(JSON.stringify(users));
});

export default router;
