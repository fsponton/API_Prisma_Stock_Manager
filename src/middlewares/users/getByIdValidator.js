export default (req, _res, next) => {
    const id = Number(req.path.slice(1))

    req.id = id

    next()
}

