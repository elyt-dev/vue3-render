
<script>


export default {
    props:['modelValue'],
    render(){

        //  return h('input',{
        //     value: this.modelValue,
        //     onInput: ($event) => {this.$emit('update:modelValue', $event.target.value)}
        // })
       return (
           <input v-model={this.title}/>
       )
    },
    computed:{
        title:{
            get(){ return this.modelValue},
            set(val){ this.$emit('update:modelValue',val)},
        }
    }
}
</script>

<style>

</style>