<template>
  <div id="app">
   	<Header></Header>
   	<div class="container-fluid" style="margin-top: 80px;">
   		<div class="row">
   			<div class="col-md-8 col-sm-10 col-md-offset-2 col-sm-offset-1">
   				<Aside></Aside>
   				<Content></Content>
   			</div>
   			
   		</div>
   		
   	</div>
   		

		
		
  </div>
</template>

<script>
	import Header from './components/Header.vue'
	import Aside from './components/Aside.vue'
	import Content from './components/Content.vue'
export default {
  name: 'App',
  components: {
  	Header,
  	Aside,
  	Content
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
