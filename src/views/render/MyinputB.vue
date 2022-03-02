
<script>
import {h} from 'vue'

export default {
    props:['modelValue'],
    render(){

         return h('input',{
            value: this.modelValue,
            onInput: ($event) => {this.$emit('update:modelValue', $event.target.value)}
        })
        
        //        return  h('div',{},[ h('input',{ modelValue:this.modelvalue,
        //        onInput:($event)=>{this.$emit('update:modelValue',$event.target.value)}
        //        },[]),
        // this.$slots.default()
        // ])
            
    }
}
</script>

<style>

</style>