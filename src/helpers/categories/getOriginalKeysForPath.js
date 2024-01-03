export default (path) => {

    const originalKeys = {
        add: ["name", "available"]
    }

    return originalKeys[path.slice(1)];

}

