<template>
	<div>
		<table class="table table-bordered table-hover">
			<thead>
				<tr>
					<th class="text-center">班级</th>
					<th class="text-center">反选</th>
				</tr>
			</thead>
			<tbody>
				<tr class="text-center">
					<td>电子一班</td>
					<td>
						<a style="cursor:pointer" data-toggle="modal" data-target="#editModal">编辑</a>
						<input type="checkbox" name="item" class="checkBox">
					</td>
				</tr>
				<tr class="text-center">
					<td>电子二班</td>
					<td>
						<a style="cursor:pointer" data-toggle="modal" data-target="#editModal">编辑</a>
						<input type="checkbox" name="item" class="checkBox">
					</td>
				</tr>		
				<tr class="text-center">
					<td>电子三班</td>
					<td>
						<a style="cursor:pointer" data-toggle="modal" data-target="#editModal">编辑</a>
						<input type="checkbox" name="item" class="checkBox">
					</td>
				</tr>	
			</tbody>
		</table>
		<clas-dialog></clas-dialog>
      </div>
</template>

<script>
	import clasDialog from './clasDialog.vue'
	export default {
		components: {
			clasDialog
		}
	}
</script>

<style>
</style>