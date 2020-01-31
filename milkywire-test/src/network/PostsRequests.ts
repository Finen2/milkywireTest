import axios from 'axios';
import url from './URL';

class Posts {
  // Get posts
  static async getPosts() {
    let posts = {}
    await axios.get(url + 'posts').then((resp: any) => {
      posts = resp.data
    }).catch(error => {
      posts = error
    });
    return posts
  }
  // Post posts
  static postPost() {
    axios.post(url + 'posts', {
    	name: "",
    	parts: ""
    })
    .then(response => {
    	console.log(response)
    })
    .catch(error => {
        console.log(error)
    });
  }
  // Get specific post
  static async getSpecificPost(id: string) {
    let specificPost = {}
    await axios.get(url + 'posts/' + id).then((resp: any) => {
      specificPost = resp.data
    }).catch(error => {
      specificPost = error
    });
    return specificPost
  }
  // Put specific post
  static putSpecificPost() {
    console.log('hfjksfhdsjk');
  }
  // Delete specific post
  static deletePost(id: string) {
     return axios.delete(`${url}posts/${id}`)
  }
}
export default Posts;
