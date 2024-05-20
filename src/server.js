import express from "express"
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
export const server = express();

import routerUsers from "./routers/users.js"
import routerProducts from "./routers/products.js";
import routerCategories from "./routers/categories.js";
import routerAuth from "./routers/auth.js";

// middlewares
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(morgan('dev'));
server.use(cors());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //definir donde esta el front y poner direccion 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//routes
server.use('/auth', routerAuth);
server.use('/users', routerUsers);
server.use('/products', routerProducts)
server.use('/categories', routerCategories)


server.use((error, _req, res, _next) => {

    // console.log('ERRRen server', error)

    if (error.code === 'P2002') {
        return res.status(409).send({
            error: true,
            errorName: 'Duplicate Unique',
            message: `The ${error.meta.target[0]} has already exists on the database`
        })
    }

    // if (error.message.includes('email')) {
    //     return res.status(409).send({
    //         error: true,
    //         errorName: 'Duplicate Unique',
    //         message: `The user to create has already exists on the database, select another email`
    //     })
    // }

    if (error.code === 'p2025') {
        return res.status(404).send({
            error: true,
            errorName: 'Not found',
            message: `${error.meta} `
        })
    }

    return res.status(error.code).send({
        error: true,
        errorName: error.name,
        message: error.message
    })

})


