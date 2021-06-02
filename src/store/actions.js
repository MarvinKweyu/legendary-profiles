// import api from "@/api"
import axios from "axios"

export default {
  SEARCH_USER({ commit }, { username }) {
    axios.get(`https://api.github.com/users/${username}`).then(response =>{
      commit("SET_USER", response.data);
    }).catch(error =>{
      console.log("error", error)
    })

    // return new Promise( (resolve, reject) => {
    //   try {
    //     const user =   api.searchUser(username);
    //     console.log(user)
    //     commit("SET_USER", user);
    //     resolve(user);
    //   } catch(error) {
    //     reject(error);
    //   }
    // });
  },
};
