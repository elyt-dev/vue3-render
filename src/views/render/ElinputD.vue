
<script>

export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  render() {
    return (
    <el-input modelValue={this.modelValue}   onInput= {(value) => this.$emit("update:modelValue", value)} />
   
    )
     //<el-input modelValue={this.modelValue}   onInput= {(value) => this.$emit("update:modelValue", value)} />
  },
  
};
</script>

<style>
</style>