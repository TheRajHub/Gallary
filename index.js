import dotenv from 'dotenv'
dotenv.config();
import {app} from './app.js';
import connection from './db/index.js';

connection()
.then(()=>{
    let Port=process.env.PORT|| 6000;
    app.listen(Port,()=>{
        console.log(`Running on http://localhost:${Port}`);
    });
})
.catch((err)=>{
    console.log("MongoDB Connection Error");
    console.error(err);
})

