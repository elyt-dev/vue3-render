
<script>
export default {
    render(){
 
       let child=this.$slots.default();
        return(
            <div>采用JSX 写法 {child}</div>
            
        )
    }
}
</script>

<style>

</style>