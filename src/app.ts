import express from "express";
import bodyParser from "body-parser";
import {json,urlencoded} from "body-parser";
import usersRoutes from "./routes/users";
import postsRoutes from "./routes/posts";
import cors from 'cors';
import connection from './db/config';

const app = express();

app.use(json())
app.use(urlencoded({extended:true}))
app.use(cors());
app.use(bodyParser.json());

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);

connection.sync().then(()=>{
    console.log('Database synecd successfuly')
}).catch((err)=>console.log("Err: ",err)); 


export default app;
