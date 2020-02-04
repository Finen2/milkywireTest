class ImageSize {

  static mainSizeFunction(image: any, maxSize: number) {
    if(image !== undefined) {
      let imageArray = image.split('/');
      if(imageArray.length >= 6) {
        const maxWidth: number = maxSize;
        const maxHeight: number = maxSize;
        let ratio = 0;
        let width = parseInt(imageArray[5]);
        let height = parseInt(imageArray[6]);

        if (width > maxWidth && width > height) {
            ratio = width / height;
            imageArray[5] = `${Math.round(maxWidth)}`;
            imageArray[6] = `${Math.round(maxWidth/ratio)}`;
            return imageArray.join('/');
        } else  if (height > maxHeight && height > width){
            ratio = height / width;
            imageArray[5] = `${Math.round(maxHeight/ratio)}`;
            imageArray[6] = `${Math.round(maxHeight)}`;
            return imageArray.join('/');
        } else {
            imageArray[5] = `${Math.round(maxWidth)}`;
            imageArray[6] = `${Math.round(maxHeight)}`;
            return imageArray.join('/');
        }
      } else {;
        return image;
      }
    }
  }

  static smallImage(this: any, image: string) {
    return this.mainSizeFunction(image, 128);
  }

  static mediumImage(image: string) {
    return this.mainSizeFunction(image, 512);
  }

  static largeImage(image: string) {
    return this.mainSizeFunction(image, 1080);
  }
}
export default ImageSize;
