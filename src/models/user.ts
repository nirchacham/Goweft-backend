// import { DataTypes } from 'sequelize';
// import Sequelize  from 'sequelize';
// import sequelize from './model';


// export default class User extends Sequelize.Model {
//     public readonly id!: number;
//     public readonly userId!: string;
//     public readonly title!: string;
//     public readonly body!: string;
//   }
//   User.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,
//           },
//           name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//           },
//           email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//           },
//           body: {
//             type: DataTypes.TEXT,
//             allowNull: false,
//           },
//     },
//     {
//       sequelize,
//       modelName: "User",
//     }
//   );

// const User = sequelize.define('User', {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   address: {
//     type: DataTypes.STRING,
//   },
// });

// export default User;
