
<script>


export default {
    props:['book'],
    render(){

        //  return h('input',{
        //     value: this.modelValue,
        //     onInput: ($event) => {this.$emit('update:modelValue', $event.target.value)}
        // })
       return (
           <input v-model={this.book.title}/>
       )
    },
    
}
</script>

<style>

</style>