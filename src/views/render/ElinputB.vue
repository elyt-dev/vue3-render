
<script>
import {h,resolveComponent } from 'vue'

export default {
  props: ["modelValue"],
  render() {
    return h(
      resolveComponent('el-input'),{modelValue:this.modelValue,
      onInput:
        ($val)=>{
          this.$emit("update:modelValue",$val)
        
      },
      placeholder:'请输入手机号码'
      },
      ()=>[]
    )
  },
};
</script>

<style>
</style>