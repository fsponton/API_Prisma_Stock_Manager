import get from "../../config/DB/repository/categories/get.js"

export default async (_req, res) => {
    const result = await get()
    return res.status(200)
        .send({ status: "Success", message: `All categories`, categories: result })
}
