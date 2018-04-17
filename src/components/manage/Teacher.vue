<template>
	<div>
		<h4>教师</h4>	
		<p>教师信息</p>
		<BtnGroup></BtnGroup>
		<teacher-table></teacher-table>
	</div>
	
</template>

<script>
	import BtnGroup from './BtnGroup.vue'
	import Table from './Table'
	import teacherTable from './teacherTable.vue'
	export default {
		components: {
			teacherTable,
			BtnGroup
		}
	}
</script>

<style>
</style>