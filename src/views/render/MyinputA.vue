
<!-- 自定义输入框 -->
<template>
<div>
    <!-- 使用 input 事件触发 update:modelValue -->
    <input :value="modelValue" @input="$emit('update:modelValue',$event.target.value)"/>

    <!-- 采用 :modelValue ="modelValue" 方式会出现：父组件传过来的modelValue有初始值，实际子组件没有得到该初始值 ，原因待查
        <input :modelValue="modelValue" @input="$emit('update:modelValue',$event.target.value)"/> 
        -->

</div>            
</template>
<script>
export default {
  
    props: ['modelValue']
}

</script>
