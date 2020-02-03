class ImageSize {
  static smallImage(image: string) {
    console.log('this function will rezise the image to small');
  }

  static mediumImage(image: string) {
    console.log('this function will rezise the image to medium');
  }

  static largeImage(image: string) {
    console.log('this function will rezise the image to large');
  }

  static fullSize(image: string) {
    console.log('this function will provide the original size')
  }

  static checkSize(url: string) {
    console.log('this function checks the size of the image that is different than stock')
  }
}
export default ImageSize;
