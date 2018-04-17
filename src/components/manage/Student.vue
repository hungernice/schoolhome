<template>
	<div>
		<h4>学生</h4>	
		<p>学生信息</p>
		<Search></Search>
		<BtnGroup></BtnGroup>
		<student-table></student-table>
	</div>
</template>

<script>
	import Search from './Search.vue'
	import studentTable from './studentTable.vue'
	import BtnGroup from './BtnGroup.vue'
	export default {
		components: {
			Search,
			studentTable,
			BtnGroup
		}
	}
</script>

<style>
</style>