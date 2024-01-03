import create from "../../config/DB/repository/categories/create.js"

export default async (req, res) => {
    const { newCategory } = req
    const result = await create(newCategory)
    return res.status(200)
        .send({ status: "Success", message: `The category with name: ${result.name} has been created` })
}
