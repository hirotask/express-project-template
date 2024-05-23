import express from "express";

const router = express.Router();

type User = {
    id: number
    name: string
    email: string
};

const users: User[] = [
    { id: 1, name: "User1", email: "user1@test.local" },
    { id: 2, name: "User2", email: "user2@test.local" },
    { id: 3, name: "User3", email: "user3@test.local" }
]

router.route("/").get(async (req: express.Request, res: express.Response) => {
    res.send(JSON.stringify(users))
});

export default router;
