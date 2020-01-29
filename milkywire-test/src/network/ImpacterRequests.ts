import axios from 'axios';
import url from './URL';

class Impacter {
  // Get all
  static getImpacters() {
    axios.get(url + 'impacters').then((resp: any) => {
      console.log(resp.data);
    }).catch(error => {
      console.log(error);
    });
  }
  // Get specific item
  static getSpecificImpacter(id: string) {
    axios.get(url + 'impacters/' + id).then((resp: any) => {
      console.log(resp.data);
    }).catch(error => {
      console.log(error);
    });
  }
  // Get all posts for a spacific item
  static getPostForImpacter(id: string) {
    axios.get(url + 'impacters/' + id + '/posts').then((resp: any) => {
      console.log(resp.data);
    }).catch(error => {
      console.log(error);
    });
  }
}
export default Impacter;
