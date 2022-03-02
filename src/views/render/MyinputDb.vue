
<script>
export default {
    props:['modelValue'],
    render(){
//这种写法OK 
       return (
           <input value={this.modelValue}  onInput={$event=> this.$emit('update:modelValue', $event.target.value)} />
            
          
       )
    },
   
    
}
</script>

<style>

</style>