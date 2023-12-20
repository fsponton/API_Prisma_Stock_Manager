import express from "express"
import bodyParser from "body-parser";
import morgan from "morgan";

export const server = express();
import routerUsers from "./routers/users.js"

// middlewares
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(morgan('dev'));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //definir donde esta el front y poner direccion 
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//routes
server.use('/', routerUsers);


server.use((err, req, res, next) => {

    console.log(err)
    //errores duplicados cuando se inteta registrar un dato unico que existe, ej email
    if (err.code === 'P2002') {
        return res.status(409).send({
            error: true,
            errorName: 'duplicate',
            message: `The ${err.meta.target[0]} has already exists on the database`
        })
    }
    return res.status(err.code).send({
        error: true,
        errorName: err.name,
        message: err.message
    })

})


