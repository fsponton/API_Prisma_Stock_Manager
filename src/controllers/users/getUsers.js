import get from "../../config/DB/repository/users/get.js";

export default async (req, res) => {
    const result = await get()
    return res.status(200)
        .send({ status: "Success", message: `The users are fetched successfully`, data: result })
}
