<template>
	<div>
		<table class="table table-bordered table-hover table-striped">
			<thead>
				<tr>
					<th class="text-center">班级名称</th>
					<th class="text-center">班主任姓名</th>
					<th class="text-center">班主任号码</th>
					<th class="text-center">反选</th>
				</tr>
			</thead>
			<tbody>
				<tr class="text-center">
					<td>zg班</td>
					<td>张三</td>
					<td>18818704610</td>
					<td>
						<a style="cursor:pointer" data-toggle="modal" data-target="#techDialog">编辑</a>
						<input type="checkbox" name="item" class="checkBox">
					</td>
				</tr>
				<tr class="text-center">
					<td>zg班</td>
					<td>张三</td>
					<td>18818704610</td>
					<td>
						<a style="cursor:pointer" data-toggle="modal" data-target="#techDialog">编辑</a>
						<input type="checkbox" name="item" class="checkBox">
					</td>
				</tr>
				<tr class="text-center">
					<td>zg班</td>
					<td>张三</td>
					<td>18818704610</td>
					<td>
						<a style="cursor:pointer" data-toggle="modal" data-target="#techDialog">编辑</a>
						<input type="checkbox" name="item" class="checkBox">
					</td>
				</tr>
			</tbody>
		</table>	
		<teacher-dialog></teacher-dialog>
	</div>

</template>

<script>
	import teacherDialog from './teacherDialog.vue'
	export default {
		components: {
			teacherDialog
		}
	}
</script>

<style>
</style>