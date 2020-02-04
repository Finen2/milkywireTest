import ImageSize from '@/function/ImageSize';

export default {
  name: 'singlePost',
  data: () => ({
    image: '',
  }),
  props: {
    data: {},
  },
  methods: {
    triggerModal(this: any){
      this.$parent.showModal(this.data.id);
    },
  },
  created(this: any) {
    this.image = ImageSize.mediumImage(this.data.data.media[0].image);
  }
}
