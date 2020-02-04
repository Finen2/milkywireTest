import Posts from '@/network/PostsRequests'
import ModalPost from './ModalPost.vue'
import SinglePost from './SinglePost.vue'

export default {
  name: 'postsList',
  data: () => ({
    posts: [],
    currentPage: 0,
    itemsPerPage: 50,
  }),
  components: {
    ModalPost,
    SinglePost
  },
  methods: {
    showModal(this: any, id: string) {
      this.$refs.modalComponent.showModal(id);
    },
    reload(this: any) {
      location.reload();
    },
  },
  async created(this: any) {
    this.posts = await Posts.getPosts();
  }
};
