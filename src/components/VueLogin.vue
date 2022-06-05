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
import { ref } from '@vue/reactivity'
export default {
  name: 'VueLogin',
  components: {
    VueButton,
    VueField
},
setup() {
  const name =ref('')
  const password = ref('')
  function login(){
    router.push({path:'/todo'})
  }
  return{
    login,
    name,
    password,
  }
}
}
</script>


<style scoped>

</style>
