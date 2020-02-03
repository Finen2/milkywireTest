import axios from 'axios';
import url from './URL';

class Posts {
  // Get posts
  static async getPosts() {
    let posts = {};
    await axios.get(url + 'posts').then((resp: any) => {
      posts = resp.data;
    }).catch(error => {
      posts = error;
    });
    return posts;
  }
  // Post posts
  static async postPost(data: any) {
    let requestRespons = {};
    await axios.post(url + 'posts', data, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
    	requestRespons = response;
    })
    .catch(error => {
        requestRespons = error;
    });
    return requestRespons
  }
  // Get specific post
  static async getSpecificPost(id: string) {
    let specificPost = {};
    await axios.get(url + 'posts/' + id).then((resp: any) => {
      specificPost = resp.data;
    }).catch(error => {
      specificPost = error;
    });
    return specificPost;
  }
  // Put specific post
  static async putSpecificPost(id: any, data: any) {
    let requestRespons = {};
    console.log(data)
    await axios.put(url + 'posts/' + id, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(response => {
    	requestRespons = response;
    })
    .catch(error => {
        requestRespons = error;
    });
    return requestRespons;
  }
  // Delete specific post
  static async deletePost(id: string) {
     return await axios.delete(url + 'posts/' + id);
  }
}
export default Posts;
