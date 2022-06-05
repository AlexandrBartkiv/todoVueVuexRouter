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
      state.todos.push({
        id: state.todos.length +1,
        body: state.newTodo,
        completed: false
      })
    },
    EDIT_TODO(state, todo){
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
      state.todos = todos
      state.newTodo = todo.body
   },
   REMOVE_TODO(state, todo){
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
   },
   COMPLETE_TODO(state, todo){
     todo.completed = !todo.completed
   },
   CLEAR_TODO(state){
     state.newTodo = ''
   }
  },
  actions: {
    addTodo({commit}){
      commit('ADD_TODO')
    },
    editTodo({commit}, todo){
      commit('EDIT_TODO', todo)
    },
    removeTodo({commit}, todo){
      commit('REMOVE_TODO', todo)
    },
    completeTodo({commit}, todo){
     commit('COMPLETE_TODO', todo)
    },
    clearTodo({commit}){
      commit('CLEAR_TODO')
    }
  },
  modules: {
  }
})
