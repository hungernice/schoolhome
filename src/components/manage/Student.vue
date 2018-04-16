<template>
	<div>
		<h4>学生</h4>	
		<p>学生信息</p>
		<Search></Search>
		<BtnGroup></BtnGroup>
		<Table></Table>
	</div>
</template>

<script>
	import Search from './Search.vue'
	import Table from './Table.vue'
	import BtnGroup from './BtnGroup.vue'
	export default {
		components: {
			Search,
			Table,
			BtnGroup
		}
	}
</script>

<style>
</style>