import {Post} from '../models/post';
import Sequelize from 'sequelize';

interface IPost {
    userId:number;
    title:string;
    body:string;
}

const Op = Sequelize.Op;

export default class DbHandler {
    static async saveUserPosts(posts: IPost[]) {
        try{
            posts.map(async (post:any)=>{
                console.log('Post is: ',post);
                await Post.create(post).then((createdPost) => {
                    console.log('Post created:', createdPost);
                }).catch((error) => {
                    console.error('Error creating post:', error);
                });
            });
        } catch(err) {
            console.log(err);
        }
    }

    static async getUserPosts(userId:string|undefined) {
        try{
            return await Post.findAll({where:{userId:userId}})
        } catch(error) {
            console.error('Could not fetch user posts: ',error)
        }
    }

    static async deleteUserPost(postId:string) {
        try{
            const post = await Post.findOne({
                where: {
                    id:postId
                }
            });
            if(post){
                post.destroy()
            }
            return 'Post deleted';
        } catch(error) {
            console.error('Error occured while deleting post: ',error);
        }
    }
}