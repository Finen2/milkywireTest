import Posts from '@/network/PostsRequests'
import ModalPost from './ModalPost.vue'
import SinglePost from './SinglePost.vue'

export default {
  name: 'postsList',
  data: () => ({
    posts: [],
    perPage: 50,
    currentPage: 1,
  }),
  components: {
    ModalPost,
    SinglePost
  },
  methods: {
    showModal(this: any, id: string) {
      this.$refs.modalComponent.showModal(id);
    }
  },
  computed: {
      rows(this: any) {
        return this.posts.length;
      }
    },
  async created(this: any) {
    this.posts = await Posts.getPosts();
  }
};
