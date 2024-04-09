import CategoryService from "../../config/DB/categoryServices.js"

const categoryService = new CategoryService('Category')

export default async (req, res) => {
    const categoryID = Number(req.path.slice(1))
    const result = await categoryService.disableCategory(categoryID)
    return res.status(200)
        .send({ error: false, message: `The category with name: ${result.name} has been disabled` })
}
