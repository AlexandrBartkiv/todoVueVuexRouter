<template>
  <div class="login_Form">
    <VueField type="Name"/>
    <VueField type="Password"/>
    <VueButton text="LOGIN"/>
    <span>Forgot password</span>
    <div class="reg">
      <span>Register now</span>
    </div>
  </div>
</template>

<script>
import VueButton from './UI/VueButton.vue'
import VueField from './UI/VueField.vue'
export default {
  name: 'VueLogin',
  components: {
    VueButton,
    VueField
}
}
</script>


<style scoped>

</style>
