<template>
	<div  class="modal fade" tabindex="-1" id="stdDialog" aria-hidden="false">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title">编辑学生</h4>
				</div>
				<div class="modal-body">
					<form class="form-horizontal">
						<div class="form-group">
							<div class="col-md-2 col-md-offset-2">
								<label class="control-label">班级名称</label>
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
							<div class="col-md-2 col-md-offset-2">
								<label class="control-label">学号</label>
							</div>
							<div class="col-md-6">
								<select class="form-control">
									<option>0010</option>
									<option>0011</option>
									<option>0011</option>
									
								</select>
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-2 col-md-offset-2">
								<label class="control-label">姓名</label>
							</div>
							<div class="col-md-6">
								<input type="text" class="form-control" value="张三" />
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-2 col-md-offset-2">
								<label class="control-label">性别</label>
							</div>
							<div class="col-md-6">
								<select class="form-control">
									<option>男</option>
									<option>女</option>
								</select>
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-2 col-md-offset-2">
								<label class="control-label">设备ID</label>
							</div>
							<div class="col-md-6">
								<input type="password" class="form-control" value="15648" />
							</div>
						</div>
					</form>
				</div>
				<div class="modal-footer">					
					<button class="btn btn-danger" data-dismiss="modal" data-target="#stdDialog">取消</button>
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