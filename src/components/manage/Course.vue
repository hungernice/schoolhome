<template>
	<div>
		<h4>科目</h4>	
		<p>科目信息</p>
		<BtnGroup></BtnGroup>
		<Table></Table>
	</div>
</template>

<script>
	import Table from './Table.vue'
	import BtnGroup from './BtnGroup.vue'
	export default {
		components: {
			Table,
			BtnGroup
		}
	}
</script>

<style>
</style>