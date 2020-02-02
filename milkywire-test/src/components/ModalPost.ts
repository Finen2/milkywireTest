import Posts from '@/network/PostsRequests'
import Impacter from '@/network/ImpacterRequests'
import ModalImpacter from './ModalImpacter.vue'

export default {
  name: 'modal',
  data: () => ({
    post: {},
    image: '',
    imageDescription: '',
    impacter: {},
  }),
  props: {
    modalId: {},
    allPosts: {}
  },
  components: {
    ModalImpacter
  },
  methods: {
    async showModal(this: any, id: string) {
      this.$refs['post-modal'].show('modalPost');
      this.post = await Posts.getSpecificPost(id);
      this.impacter = await Impacter.getSpecificImpacter(this.post.impacter_id);
      this.defineImage()
    },
    showChildModal(this: any) {
      this.$refs.modalImpacterComponent.showPostModal();
      this.hideModal();
    },
    hideModal(this: any) {
      this.$refs['post-modal'].hide('modalPost');
    },
    defineImage(this: any) {
      this.image = this.post.data.media[0].image;
      this.imageDescription = this.post.data.media[0].description;
    },
    erasePost(this: any, id: string) {
      Posts.deletePost(id);
      this.$parent.reload();
      this.hideModal();
    },
    nextPost(this: any) {
      const index = this.allPosts.map((element: any) => element.id).indexOf(this.post.id);
      const nextPostId = this.allPosts[index + 1].id;
      this.showModal(nextPostId);
    },
    previousPost(this: any) {
      const index = this.allPosts.map((element: any) => element.id).indexOf(this.post.id);
      const previousPostId = this.allPosts[index - 1].id;
      this.showModal(previousPostId);
    },
  },
};
