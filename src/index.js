import { server } from "./server.js";
import environments from "./config/enviroments.js";

server.listen(environments.PORT, () => {
    console.log(`API listening on port: ${environments.PORT}`);
})