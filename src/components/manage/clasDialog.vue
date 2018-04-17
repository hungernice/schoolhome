<template>
	<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="false">
		<div class="modal-dialog modalDialog">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title modalTitle" id="ModalLabel">编辑班级</h4>
				</div>
				<div class="modal-body">
					<form class="form-horizontal">
						<div class="form-group">
							<div class="col-md-2 col-md-offset-2">
								<label class="control-label">班级</label>
							</div>
							<div class="col-md-6">
								<input type="text" class="form-control" value="测试班" />
							</div>
						</div>						
					</form>						
					<div class="modal-footer modalFoot">
						<button type="button" class="btn btn-danger" data-dismiss="modal" data-target="#editModal">取消</button>
						<button type="button" class="btn btn-primary">提交</button></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>

</style>