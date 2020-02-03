import axios from 'axios';
import url from './URL';

class Upload {
  // Upload
  static async uploadPost(imageFile: any) {
    let requestRespons = {};
    const formData = new FormData();
    formData.append('file', imageFile)
    await axios.post(url + 'upload', formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
    .then(response => {
    	requestRespons = response.data.url;
    })
    .catch(error => {
        requestRespons = error;
    });
    return requestRespons;
  }
}
export default Upload;
