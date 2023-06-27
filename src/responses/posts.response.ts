
export default class UserPostsResponse {
    public readonly status;
    public readonly posts;
    public readonly totalPosts;

    constructor(status:number, posts: any, totalPosts:number) {
        this.status = status;
        this.posts = posts;
        this.totalPosts = totalPosts;
    }
}