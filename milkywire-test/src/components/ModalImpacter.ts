import Impacter from '@/network/ImpacterRequests'
import SinglePost from './SinglePost.vue'

export default {
  name: 'modalImpacter',
  data: () => ({
    impacterPosts: {}
  }),
  components: {
    SinglePost
  },
  props: {
    impacter: '',
    postId: '',
  },
  methods: {
    showModal(this: any, id: string) {
      console.log(id)
    },
    showPostModal(this: any) {
      this.$refs['impacterModal'].show();
      this.getPosts();
    },
    hideModal(this: any) {
      this.$refs['impacterModal'].hide();
    },
    async getPosts(this: any) {
      this.impacterPosts = await Impacter.getPostForImpacter(this.impacter.id);
    },
    returnToPostModal(this: any) {
      this.hideModal();
      this.$parent.showModal(this.postId);
    }
  },
}
