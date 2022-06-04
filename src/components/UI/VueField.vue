<template>
<div class="inp_wrap">
    <span class="before">{{type}}</span>
    <div class="inp"><input type="text"></div>
    <div>
        <img src="../../assets/x.png" alt="">
        <span class="after">{{val}}</span>
    </div>
</div>
</template>
<script>
import { ref } from 'vue'

export default {
    props: ['type','val'],
    setup() {
        const value = ref('')

        return{
            value
        }
    },
}
</script>