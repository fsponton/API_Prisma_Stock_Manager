import _delete from "../../config/DB/repository/users/delete.js"

export default async (req, res) => {
    const { idUserToDelete } = req
    const result = await _delete(idUserToDelete)
    return res.status(200)
        .send({ status: "Success", message: `The user with the id ${result.id} and email ${result.email} has been delete` })
}
