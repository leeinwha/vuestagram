import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      likes : 30,
      clicklike : false,
      more : {},
    }
  },
  mutations : {
    like(state){
      if(state.clicklike == false){
        state.likes++
        state.clicklike = true;
      } else {
        state.likes--
        state.clicklike = false;
      }
    },
    setMore(state, data){
      state.more = data
    }
  },
  actions : {
    getData(context){
      axios.get('https://codingapple1.github.io/vue/more0.json')
      .then((a)=>{
        console.log(a.data);
        context.commit('setMore' , a.data)
      })
    }
  }
})

export default store;