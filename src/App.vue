<template>
  <div id="app">
   	<Header></Header>
		<Aside></Aside>
  </div>
</template>

<script>
	import Header from './components/Header.vue'
	import Aside from './components/Aside.vue'
export default {
  name: 'App',
  components: {
  	Header,
  	Aside
  },
   data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}
</style>
