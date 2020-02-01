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
    nextPage(this: any) {
      console.log('trigger next')
      if((this.currentPage * this.pageSize) < this.posts.length) this.currentPage++;
    },
    prevPage(this: any) {
      console.log('trigger prev')
      if(this.currentPage > 1) this.currentPage-- ;
    },
  },
  async created(this: any) {
    this.posts = await Posts.getPosts();
  }
};
