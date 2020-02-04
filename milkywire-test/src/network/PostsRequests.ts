import axios from 'axios';
import url from './URL';

class Posts {
  // Get posts
  static async getPosts() {
    let posts = {};
    await axios.get(url + 'posts').then((resp: any) => {
      posts = resp.data;
    }).catch((error: any) => {
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
      },
    })
    .then((response: any) => {
    	requestRespons = response;
    })
    .catch((error: any) => {
        requestRespons = error;
    });
    return requestRespons
  }
  // Get specific post
  static async getSpecificPost(id: string) {
    let specificPost = {};
    await axios.get(url + 'posts/' + id).then((resp: any) => {
      specificPost = resp.data;
    }).catch((error: any) => {
      specificPost = error;
    });
    return specificPost;
  }
  // Put specific post
  static async putSpecificPost(id: any, data: any) {
    let requestRespons = {};
    await axios.put(url + 'posts/' + id, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response: any) => {
    	requestRespons = response;
    })
    .catch((error: any) => {
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
