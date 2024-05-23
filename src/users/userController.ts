import express from "express";
import UserService from "./userService";

export async function getUsers(req: express.Request, res: express.Response) {
  const service = new UserService();
  const users = service.invoke();
  res.status(200).send(JSON.stringify(users));
}
