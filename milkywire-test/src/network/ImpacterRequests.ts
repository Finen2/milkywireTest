import axios from 'axios';
import url from './URL';

class Impacter {
  // Get all
  static async getImpacters() {
    let impacter = {};
    await axios.get(url + 'impacters').then((resp: any) => {
      impacter = resp.data;
    }).catch((error: any) => {
      impacter = error;
    });
    return impacter;
  }
  // Get specific item
  static async getSpecificImpacter(id: string) {
    let specificImpacter = {};
    await axios.get(url + 'impacters/' + id).then((resp: any) => {
      specificImpacter = resp.data;
    }).catch((error: any) => {
      specificImpacter = error;
    });
    return specificImpacter;
  }
  // Get all posts for a spacific item
  static async getPostForImpacter(id: string) {
    let postForImpacter = {};
    await axios.get(url + 'impacters/' + id + '/posts').then((resp: any) => {
      postForImpacter = resp.data;
    }).catch((error: any) => {
      postForImpacter = error;
    });
    return postForImpacter;
  }
}
export default Impacter;
