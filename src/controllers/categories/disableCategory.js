import disable from "../../config/DB/repository/categories/disable.js"

export default async (req, res) => {
    const categoryID = Number(req.path.slice(1))

    const result = await disable(categoryID)

    return res.status(200)
        .send({ status: "Success", message: `The category with name: ${result.name} has been disabled` })
}
