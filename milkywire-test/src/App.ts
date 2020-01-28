import Posts from '@/network/PostsRequests'

export default {
  name: 'app',
  async created(){
    await Posts.getPosts()
  }
};
