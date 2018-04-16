<template>
	<!--<el-container style="width: 1500px;margin: 0 auto; height: 500px; border: 1px solid #eee">-->
		<!--<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
			<el-menu :default-openeds="['1', '2','3']">				
				
			</el-menu>
		</el-aside>-->

		<div class="col-sm-3 col-md-2  sidebar">
			<nav1></nav1>
			<nav2></nav2>
			<nav3></nav3>
		</div>

</template>

<script>
	import nav1 from './Nav1.vue'
	import nav2 from './Nav2.vue'
	import nav3 from './Nav3.vue'
	export default {
		name: "app",
		components: {
			nav1,
			nav2,
			nav3
		}
	}
</script>

<style>
	.router-link-active{
		text-decoration: none;
		color: red;
	}
</style>