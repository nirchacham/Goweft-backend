import axios from 'axios';
import UserResponse from '../responses/user.response';

export default class UsersHandler {
  static async getUsers() {
    try {
      const result = await axios.get('https://jsonplaceholder.typicode.com/users');
      if(result){
        return new UserResponse(200,result.data);
      }
      return new UserResponse(200,[]);
    } catch (err) {
      console.log("Failed to fetch users: ", err);
      return new UserResponse(401,[]);
    }
  }
}
