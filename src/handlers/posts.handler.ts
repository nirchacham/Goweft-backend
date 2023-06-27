// import CustomResponse from "../responses/response";
import CustomResponse from "../responses/generic.response";
import UserPostsResponse from "../responses/posts.response";
import DbHandler from "./db.handler";
import axios from 'axios';

export default class PostsHandler {
  static async getUserPosts(userId:string|undefined, page:number, pageSize:number) {
    try {
      const userPosts = await DbHandler.getUserPosts(userId);
      
      if (userPosts?.length) {
        // Apply pagination logic
        const startIndex = page * pageSize;
        const endIndex = startIndex + pageSize;
        const paginatedPosts = userPosts.slice(startIndex, endIndex);
        console.log('start index: ',startIndex)
        console.log('end index: ',endIndex)
        console.log('User posts: ',paginatedPosts)
        return new UserPostsResponse(200,paginatedPosts,userPosts.length)
      }
      //There are no posts in the local DB.
      console.log('Fetching data from external API')
      const result = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      if(result.data.length) {
         await DbHandler.saveUserPosts(result.data);
      }
      // Apply pagination logic
      const startIndex = page * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedPosts = result.data.slice(startIndex, endIndex);

      return new UserPostsResponse(200,paginatedPosts,result.data.length)

    } catch (err) {
      console.log("Failed to fetch user posts: ", err);
      return new UserPostsResponse(401,[],0)
    }
  }

  static async deleteUserPost(postId:string) {
    try{
       await DbHandler.deleteUserPost(postId);
       return new CustomResponse(200,"Post deleted")
    } catch(error) {
      console.log("Failed to delete user posts: ", error);
      return new CustomResponse(401,"Deleting post failed")
    }
  }
}
