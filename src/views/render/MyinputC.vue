<!-- 自定义输入框 -->
<template>
<div>
    <!-- 使用 input 事件触发 update:modelValue -->
    <input v-model="title" />


</div>            
</template>
<script>


export default {
    props:['modelValue'],
   
    computed:{
        title:{
            get(){return this.modelValue},
            set(val){this.$emit('update:modelValue',val.toUpperCase())}
        }
    }

}
</script>

<style>

</style>