const  express = require("express") ;
const  cors = require("cors") ;
const  dotenv = require("dotenv") ;
const  connection  = require("./db/connectionDB");
const {router} = require('./routes/routes')


dotenv.config();
let port = process.env.PORT;


const app= express();
app.use(cors());
app.use(express.json());
app.use('',router);


const credentials={
    database: process.env.DATABASE,
    user:process.env.USER,
    password:process.env.PASSWORD,
    host : process.env.HOST,
    dialect: process.env.DIALECT
}


 const main = async()=>{
    let sequelize = await connection.sequelize;
    sequelize.authenticate();
    app.listen(port, ()=>{
        console.log("Server listening port: ", port);
    });
    
    return sequelize;
}
 main();

