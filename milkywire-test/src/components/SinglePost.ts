export default {
  name: 'singlePost',
  props: {
    data: {}
  },
  methods: {
    triggerModal(this: any){
      this.$parent.showModal(this.data.id)
    }
  }
}
