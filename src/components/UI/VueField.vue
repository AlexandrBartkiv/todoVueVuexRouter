<template>
<div class="inp_wrap">
    <span 
    ref="span"
    class="before">{{type}}</span>
    <div class="inp">
        <input 
            v-model="value"
            type="text"
            @input="toStore">
            </div>
    <div>
        <img src="../../assets/x.png" alt="">
        <span class="after">{{val}}</span>
    </div>
</div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
    props: ['type','val'],
    setup() {
        const store = useStore()
        const value = ref('')
            const span = ref()
            const toStore = function(){
                if(span.value.innerText === 'Name'){
                    store.state.name = value.value
                    console.log(store.state.name)
                }else if(span.value.innerText === 'Password'){
                     store.state.password = value.value
                    console.log(store.state.password)
                }
            }
        return{
            toStore,
            span,
            store,
            value
        }
    },
}
</script>