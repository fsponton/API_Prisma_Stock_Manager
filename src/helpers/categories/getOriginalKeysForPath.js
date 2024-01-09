export default (path) => {

    const originalKeys = {
        add: ["name"]
    }

    return originalKeys[path.slice(1)];

}

