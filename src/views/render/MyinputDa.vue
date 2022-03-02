
<script>
export default {
    props:['modelValue'],
    render(){

        //采用这种方式会报错：
        //Uncaught TypeError: 'set' on proxy: trap returned falsish for property 'modelValue'
       return (
           <input v-model:modelValue={this.modelValue}   />
           //这种方式会报错 <input v-model={this.modelValue} onInput="emitTitle"   />
       )
    },
    method:{
        emitTitle($event){
            this.$emit('update:modelValue', $event.target.value)
        }
    }
    
}
</script>

<style>

</style>