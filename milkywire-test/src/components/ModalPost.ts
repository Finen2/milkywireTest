import Posts from '@/network/PostsRequests'

export default {
  name: 'modal',
  data: () => ({
    post: {}
  }),
  props: {
    modalId: {},
    allPosts: {}
  },
  methods: {
    async showModal(this: any, id: string) {
      this.$refs['my-modal'].show('bv-modal-example');
      this.post = await Posts.getSpecificPost(id);
    },
    hideModal(this: any) {
      this.$refs['my-modal'].hide('bv-modal-example');
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
    }
  },
};
