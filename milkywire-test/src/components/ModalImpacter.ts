import Impacter from '@/network/ImpacterRequests';
import ImageSize from '@/function/ImageSize';

export default {
  name: 'modalImpacter',
  data: () => ({
    impacterPosts: {},
  }),
  props: {
    impacter: '',
    postId: '',
  },
  methods: {
    showModal(this: any, id: string) {
      this.$parent.showModal(id);
      this.hideModal();
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
    },
    postImage(image: any) {
      return ImageSize.mediumImage(image);
    },
    profileImage(image: any) {
      return ImageSize.smallImage(image);
    }
  },

}
