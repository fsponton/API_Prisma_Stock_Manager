export default (path) => {

    const originalKeys = {
        login: ["email", "password"],
        register_user: ["full_name", "email", "password"]
    }

    return originalKeys[path.slice(1)]
}