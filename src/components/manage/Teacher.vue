<template>
	<div>
		<h4>教师</h4>	
		<p>教师信息</p>
		<BtnGroup></BtnGroup>
		<Table></Table>
	</div>
	
</template>

<script>
	import BtnGroup from './BtnGroup.vue'
	import Table from './Table'
	export default {
		components: {
			Table,
			BtnGroup
		}
	}
</script>

<style>
</style>