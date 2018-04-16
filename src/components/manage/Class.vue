<template>
	<div>
		<h4>班级</h4>	
		<p>班级信息</p>
		<BtnGroup></BtnGroup>
		<Table></Table>
	</div>
</template>

<script>
	import BtnGroup from './BtnGroup.vue'
	import Table from './Table.vue'
	export default {
		components: {
			BtnGroup,
			Table
		}
	}
</script>

<style scoped="scoped">
	.cont-head{
		width: 100%;
    	 height: 70px;
    	margin-top: 10px;    	
    	padding-left: 45px;    	   
    	border-bottom: 1px solid #eee;
	}
	.cont-head p{
	    line-height: 30px;
	}
</style>