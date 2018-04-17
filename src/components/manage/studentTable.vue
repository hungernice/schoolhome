<template>
	<div>
		<table class="table table-bordered table-condensed table-striped table-hover">
			<thead>
				<tr>
					<th class="text-center">学号</th>
					<th class="text-center">姓名</th>
					<th class="text-center">性别</th>
					<th class="text-center">班级</th>
					<th class="text-center">设备ID</th>
					<th class="text-center">设备密码</th>
					<th class="text-center">反选</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="text-center">2011130102</td>
					<td class="text-center">陈xiao泳</td>
					<td class="text-center">男</td>
					<td class="text-center">测试班级</td>
					<td class="text-center">1232154</td>
					<td class="text-center">123544353435</td>
					<td class="text-center">
						<a style="cursor:pointer" data-toggle="modal" data-target="#stdDialog">编辑</a>
						<input type="checkbox" name="item" class="checkBox">
					</td>
				</tr>
				<tr>
					<td class="text-center">2011130101</td>
					<td class="text-center">陈xiao泳1</td>
					<td class="text-center">女</td>
					<td class="text-center">测班级1</td>
					<td class="text-center">1232154</td>
					<td class="text-center">12354435300</td>
					<td class="text-center">
						<a style="cursor:pointer" data-toggle="modal" data-target="#stdDialog">编辑</a>
						<input type="checkbox" name="item" class="checkBox">
					</td>
				</tr>
				<tr>
					<td class="text-center">2011130101</td>
					<td class="text-center">陈xiao泳1</td>
					<td class="text-center">女</td>
					<td class="text-center">测班级1</td>
					<td class="text-center">1232154</td>
					<td class="text-center">12354435300</td>
					<td class="text-center">
						<a style="cursor:pointer" data-toggle="modal" data-target="#stdDialog">编辑</a>
						<input type="checkbox" name="item" class="checkBox">
					</td>
				</tr>
			</tbody>
		</table>
		<std-dialog></std-dialog>
	</div>

</template>

<script>
	import stdDialog from './stdDialog.vue'
	export default {
		components: {
			stdDialog
		}
	}
</script>

<style>

</style>