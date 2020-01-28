import axios from 'axios';
import url from './URL';

class Posts {
  // Get posts
  static getPosts() {
    axios.get(url + 'posts').then((resp: any) => {
      console.log(resp.data);
    });
  }
  // Post posts
  static postPost() {
    console.log('hfjksfhdsjk');
  }
  // Get specific post
  static getSpecificPost(id: string) {
    axios.get(url + 'posts/' + id).then((resp: any) => {
      console.log(resp.data);
    });
  }
  // Put specific post
  static putSpecificPost() {
    console.log('hfjksfhdsjk');
  }
  // Delete specific post
  static deletePost(id: string) {
     return axios.delete(`${url} + 'posts/' + ${id}`)
  }
}
export default Posts;
