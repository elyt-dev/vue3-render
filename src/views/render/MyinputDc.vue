
<script>
export default {
    props:['modelValue'],
    render(){
//MyinputDc.vue?7148:7 Uncaught TypeError: 'set' on proxy: trap returned falsish for property 'modelValue'
       return (
           <input v-model={this.modelValue}   />
          
       )
    },
   
    
}
</script>

<style>

</style>