import { createStore } from 'vuex'

export default createStore({
  state: {
    name: '',
    password: '',
    todos:[],
    newTodo: ''
  },
  getters: {
  },
  mutations: {
    ADD_TODO(state){
      state.todos.unshift({
        id: state.todos.length +1,
        body: state.newTodo,
        completed: false
      })
    },
   CLEAR_TODO(state){
     state.newTodo = ''
   }
  },
  actions: {
    addTodo({commit}){
      commit('ADD_TODO')
    },
    clearTodo({commit}){
      commit('CLEAR_TODO')
    }
  },
  modules: {
  }
})
