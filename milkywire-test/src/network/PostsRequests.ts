import axios from 'axios';
import url from './URL';

class Posts {
  // Get posts
  static async getPosts() {
    let testObject = {}
    await axios.get(url + 'posts').then((resp: any) => {
      testObject = resp.data
    }).catch(error => {
      testObject = error
    });
    return testObject
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
  static getSpecificPost(id: string) {
    axios.get(url + 'posts/' + id).then((resp: any) => {
      console.log(resp.data);
    }).catch(error => {
      console.log(error);
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
