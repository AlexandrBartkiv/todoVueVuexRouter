<template>
  <div class="ToDoPageWraper">
    <div class="background">

    </div>
    <div class="toDoWraper">
      <img src="../assets/Logo.png" alt="" srcset="">
      <div class="todo">

        <div class="addTask">
          <input 
            type="text" 
            class="taskInp"
            placeholder="Add new Task..."
            v-model="newTask"
            @change="newToDo"
            @keyup.enter="addTodo">
          <VueButton 
          text="Add Task"
          @click="addTodo"/>
        </div>




        <div 
        class="task"
        v-for="todo in store.state.todos"
        :key="todo.id">
           <div ref ="check" 
           class="non_comp"
           :class="{'comp':todo.completed}"
           @click="todo.completed = !todo.completed"></div>
          <input 
          type="text" 
          class="taskInp" 
          :class="{'inp_comp':todo.completed}"
          v-model="todo.body">
          <div 
          class="bin"
          @click="store.state.todos.splice(store.state.todos.findIndex(item => item.id === todo.id),1)"></div>
        </div>
        


      </div>
    </div>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import VueButton from '../components/UI/VueButton.vue'
export default {
  components:{
    VueButton
  },

  setup() {
    const check = ref()
    const newTask = ref('')
    const store = useStore()
    const newToDo = function(){
      store.state.newTodo = newTask.value
    }
    const addTodo = function(){
        store.dispatch('addTodo')
        store.dispatch('clearTodo')
        newTask.value = ''
        console.log(store.state.todos)
    }
    const done = function(){
      console.log(store.state.todos)
    }
    return{
      store,
      addTodo,
      newTask,
      newToDo,
      check,
      done,
    }
  },
}
</script>