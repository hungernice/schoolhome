<template>
	<div class="modal fade" tabindex="-1" aria-hidden ="false" id="techDialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">教师编辑</h4>
				</div>
				<div class="modal-body">
					<form class="form-horizontal">
						<div class="form-group">
							<div class="col-md-3 col-md-offset-1">
								<label class="control-label">班级</label>
							</div>
							<div class="col-md-6">
								<select class="form-control">
									<option>测试班1</option>
									<option>测试班2</option>
									<option>测试班3</option>
								</select>
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-3 col-md-offset-1">
								<label class="control-label">教师</label>
							</div>
							<div class="col-md-6">
								<select class="form-control">
									<option>张三</option>
									<option>李四</option>
									<option>钱五</option>
								</select>
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-3 col-md-offset-1">
								<label class="control-label">班主任号码</label>
							</div>
							<div  class="col-md-6">
								<input type="text" class="form-control" value="132222121114" />
							</div>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button class="btn btn-danger" data-dismiss="modal" data-target="#techDialog">取消</button>
					<button class="btn btn-success">确定</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>