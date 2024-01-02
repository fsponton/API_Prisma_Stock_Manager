import updateUser from "../../config/DB/repository/users/update.js";

export default async (req, res) => {
    const { userToUpdate } = req
    const result = await updateUser(userToUpdate)
    return res.status(200)
        .send({ status: "Success", message: `The user with the id ${result.id} has been update` })
}
