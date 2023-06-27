import { Sequelize } from "sequelize-typescript";
import {Post} from '../models/post';

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "my-secret-pw",
    database: "posts",
    models: [Post]
});

export default connection;