
<script>
import { h, resolveComponent } from "vue";
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  render() {
    return h(resolveComponent("el-input"), {
      modelValue: this.modelValue,
      "onUpdate:modelValue": (value) => this.$emit("update:modelValue", value),
    });
  },
  mounted() {
    console.log(this.modelValue);
  },
};
</script>

<style>
</style>