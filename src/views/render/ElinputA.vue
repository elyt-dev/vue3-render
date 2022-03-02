
<script>
export default {
  props: ["modelValue"],
  render() {
    return (
      <el-input
        modelValue={this.modelValue}
        onInput={($val) => {
          this.$emit("update:modelValue", $val);
        }}
        placeholder="请输入手机号码"
      />
    );
  },
};
</script>

<style>
</style>