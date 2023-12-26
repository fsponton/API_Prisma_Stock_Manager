import getUsers from "../../config/DB/repository/users/getUsers.js";

export default async (req, res) => {
    const result = await getUsers()
    return res.status(200)
        .send({ status: "Success", message: `The users are fetched successfully`, data: result })
}
