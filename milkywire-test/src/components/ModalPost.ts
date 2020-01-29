import Posts from '@/network/PostsRequests'

export default {
  name: 'modal',
  data: () => ({
    post: {}
  }),
  props: {
    modalId: {}
  },
  methods: {
    async showModal(this: any, id: any) {
      this.$refs['my-modal'].show('bv-modal-example')
      this.post = await Posts.getSpecificPost(id);
    },
    hideModal(this: any) {
      this.$refs['my-modal'].hide('bv-modal-example')
    },
  },
};
