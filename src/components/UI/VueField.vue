<template>
<div class="inp_wrap">
    <span 
    ref="span"
    class="before">{{type}}</span>
    <div class="inp">
        <input 
            v-model="value"
            type="text"
            @input="toStore"
            @blur="onBlur">
            </div>
    <div class="after"
    :class="{'afterNonValid': valid==0}">
        <img src="../../assets/x.png" alt="">
        <span>{{val}}</span>
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
        const valid = ref('1')
            const span = ref()
            const onBlur = function(){
                console.log(1)
                console.log(value.value)
                if(value.value == ''){
                    valid.value = '0'
                }else{
                    valid.value = '1'
                }
            }
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
            value,
            valid,
            onBlur
        }
    },
}
</script>