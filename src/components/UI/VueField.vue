<template>
<div class="inp_wrap">
    <span class="pre">{{type}}</span>
    <div class="inp"><input type="text"></div>
</div>
</template>
<script>
import { ref } from 'vue'

export default {
    props: ['type'],
    setup() {
        const value = ref('')

        return{
            value
        }
    },
}
</script>