import {Table, Model, Column, DataType} from "sequelize-typescript";

@Table({
    timestamps:false,
    tableName:"Posts"
})

export class Post extends Model {
    @Column({
        type:DataType.STRING,
        allowNull:false,
    })
    userId!:string;

    @Column({
        type:DataType.STRING,
        allowNull:false,
    })
    title!:string;

    @Column({
        type:DataType.STRING,
        allowNull:false,
    })
    body!:string;
}