export default (path) => {

    const originalKeys = {
        new: ["name"]
    }

    return originalKeys[path.slice(1)];

}

