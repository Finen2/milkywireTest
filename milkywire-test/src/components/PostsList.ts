import Posts from '@/network/PostsRequests'

export default {
  name: 'postsList',
  data: () => ({
    posts: {}
  }),
  async created(this: any){
    this.posts = await Posts.getPosts()
    console.log(this.posts)
  }
};
