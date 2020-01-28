import axios from 'axios';
import url from './URL';

class Impacter {
  // Get all
  static getImpacters(){
    axios.get(url + 'impacters').then((resp: any) => {
      console.log(resp.data);
    });
  }
  // Get specific item
  static getSpecificImpacter(id: string) {
    axios.get(url + 'impacters/' + id).then((resp: any) => {
      console.log(resp.data);
    });
  }
  // Get all posts for a spacific item
  static getPostForImpacter(id: string) {
    axios.get(url + 'impacters/' + id + '/posts').then((resp: any) => {
      console.log(resp.data);
    });
  }
}
export default Impacter;
// class TodoService {
//   // Get Todos
//   static getTodos() {
//       return new Promise( async (resolve, reject) => {
//         try {
//           const res = await axios.get(url);
//           const data = res.data;
//           resolve(
//             data.map(todo => ({
//               ...todo,
//               createdAt: new Date(todo.createdAt)
//             }))
//           )
//         } catch(err) {
//           reject(err);
//         }
//       })
//   }
//   // Add Todos
//   static addTodo(todo){
//     return axios.post(url, {
//       todoItem : todo
//     });
//   }
//   // Update Todos
//   static checkedTodo(id, status){
//     return axios.post(`${url}${id}`, {
//       id: id,
//       checkedStatus : status
//     });
//   }
//   // Delete Todos
//   static deleteTodo(id){
//     return axios.delete(`${url}${id}`)
//   }
//   // Delete All Todos
//   static deleteAllTodo(){
//     return axios.delete(url)
//   }
// }
//
// export default TodoService;
