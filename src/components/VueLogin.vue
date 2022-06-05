<template>
  <div class="login_Form">
    <VueField 
      type="Name"
      val="Enter your name please"
    />
    <VueField 
      type="Password"
      val="Enter your password please"/>
    <VueButton 
      @click="login"
      text="LOGIN"
      />
    <span>Forgot password</span>
    <div class="reg">
      <span>Register now</span>
    </div>
  </div>
</template>

<script>
import router from '@/router'
import VueButton from './UI/VueButton.vue'
import VueField from './UI/VueField.vue'
import { useStore } from 'vuex'
export default {
  name: 'VueLogin',
  components: {
    VueButton,
    VueField
},
setup() {

  const store = useStore()
  function login(){
    console.log(store.state.name + store.state.password)
    if(store.state.name === 'admin' && store.state.password === '12345')
    router.push({path:'/todo'})
  }
  return{
    login,

  }
}
}
</script>


<style scoped>

</style>
