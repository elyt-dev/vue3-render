<template>
  <div>
      <div>渲染函数展示</div>
      -----------------------
      <componenta></componenta>
      -----------------------
      <componentb></componentb>
      -----------------------

    <componentc>abcd
      <div>hello</div>
    </componentc>
    -----------------------

    <componentd> slot:Hello ,jsx </componentd>
    <div>
    -----------------------
    <myinput-a v-model='titlea'> </myinput-a>
    采用template方式，这是从子组件传回来的数据: {{titlea}}
  </div>

  <div>
    -----------------------
    <myinput-c v-model='titlec'> </myinput-c>
    采用template方式(computed)，这是从子组件传回来的数据: {{titlec}}
  </div>

 
  <div>
     -----------------------
    <myinput-b v-model='titleb'></myinput-b>
    采用h()方式，这是从子组件传回来的数据: {{titleb}}
</div>


<div>
     -----------------------
    <myinput-d v-model='titled'></myinput-d>
    子组件采用JSX+computed方式，这是从子组件传回来的数据: {{titled}}
</div>

<div>
     -----------------------
    <myinput-e :book="book"></myinput-e>
    子采用JSX方式+v-model，这是从子组件传回来的数据: {{book.title}}
</div>
<div>
     这种方式报错:Uncaught TypeError: 'set' on proxy: trap returned falsish for property 'modelValue'：
    <myinput-da v-model='titleda'></myinput-da>
    子组件采用JSX方式+v-model，这是从子组件传回来的数据:  {{titleda}}
</div>

<div>
     <!-- <input value={this.modelValue}  onInput={$event=> this.$emit('update:modelValue', $event.target.value)} /> -->
    <myinput-db v-model='titledb'></myinput-db>
    子组件采用JSX方式+value+onInput，这是从子组件传回来的数据:  {{titledb}}
</div>

<div>
    MyinputDc.vue?7148:7 Uncaught TypeError: 'set' on proxy: trap returned falsish for property 'modelValue'
    <myinput-dc v-model='titledc'></myinput-dc>
    子组件采用JSX方式+v-model，这是从子组件传回来的数据:  {{titledc}}
</div>

<div>
    采用el-input
    <elinput-a v-model='elinputa'></elinput-a>
    子组件采用JSX方式，这是从子组件传回来的数据:  {{elinputa}}
</div>

<div>
    采用el-input
    <elinput-b v-model='elinputb'></elinput-b>
    子组件采用h()方式，这是从子组件传回来的数据:  {{elinputb}}
</div>

<div>
    采用el-input
    <elinput-c v-model='elinputc'></elinput-c>
    子组件采用h()方式，这是从子组件传回来的数据:  {{elinputc}}
</div>
<div>
    采用el-input
    <elinput-d v-model='elinputd'></elinput-d>
    子组件采用JSX方式，这是从子组件传回来的数据:  {{elinputd}}
</div>

  </div>
</template>

<script>
import componenta from './ComponentA.vue';
import componentb from './ComponentB.vue';
import componentc from './ComponentC.vue';
import componentd from './ComponentD.vue';
import myinputA from './MyinputA.vue';
import myinputB from './MyinputB.vue';
import myinputC from './MyinputC.vue';
import myinputD from './MyinputD.vue';
import myinputE from './MyinputE.vue';
import myinputDa from './MyinputDa.vue';
import myinputDb from './MyinputDb.vue';
import myinputDc from './MyinputDc.vue';
import elinputA from './ElinputA.vue';
import elinputB from './ElinputB.vue';
import elinputC from './ElinputC.vue';
import elinputD from './ElinputD.vue';

export default {
  
  components:{
    componenta,
    componentb,
    componentc,
    componentd,
    myinputA,
    myinputB,
    myinputC,
    myinputD,
    myinputDa,
    myinputDb,
    myinputDc,
    myinputE,
    elinputA,
    elinputB,
    elinputC,
    elinputD,


  },
  data(){
    return {
      weather:'cold',
      titlea:'a',
      titleb:'b',
      titlec:'c',
      titled:'d',
      titleda:'da',
      titledb:'db',
      titledc:'dc',
      book:{
        title:'vue图书'
      },
      elinputa:'el-input-a',
      elinputb:'el-input-b',
      elinputc:'el-input-c',
      elinputd:'el-input-d',
    }
  }
}
</script>

<style>
  div{
    margin-top: 5px;
  }
</style>