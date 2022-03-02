
<script>
import {h} from 'vue'
export default {
    render(){
        return  h('div',{},[ h('div',{},'自定义render,同时包括this.$slots.default()'),
        this.$slots.default()
        ])
    }
}
</script>

<style>

</style>