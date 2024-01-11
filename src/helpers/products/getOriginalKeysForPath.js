
export default (path) => {

    const originalKeys = {
        new: ["name", "model", "id_category", "brand", "price", "code", "available", "description", "quantity", "sector", "rack", "square_meter", "size", "weight"]
    }

    return originalKeys[path.slice(1)];

}

