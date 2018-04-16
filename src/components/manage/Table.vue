<template>
	<div>
		<table class="table table-bordered table-hover">
			<thead>
				<tr>
					<th>班级</th>
					<th>反选</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>电子一班</td>
					<td>
						<a style="cursor:pointer" data-toggle="modal" data-target="#editModal">编辑</a>
						<input type="checkbox" name="item" class="checkBox">
					</td>
				</tr>
				<tr>
					<td>电子二班</td>
					<td>
						<a style="cursor:pointer" data-toggle="modal" data-target="#editModal">编辑</a>
						<input type="checkbox" name="item" class="checkBox">
					</td>
				</tr>		
				<tr>
					<td>电子三班</td>
					<td>
						<a style="cursor:pointer" data-toggle="modal" data-target="#editModal">编辑</a>
						<input type="checkbox" name="item" class="checkBox">
					</td>
				</tr>	
			</tbody>
		</table>
		<div class="modal fade" style="left: 0%;" id="editModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="false">
	        <div class="modal-dialog modalDialog">
	          <div class="modal-content">
	            <div class="modal-header">
	              <h4 class="modal-title modalTitle" id="ModalLabel">编辑班级</h4></div>
	            <!--提示-->
	            <div class="alert alert-success msag"></div>
	            <div class="modal-body">
	              <div style="display: none;" class="form-group container col-sm-12">
	                <label for="ID" class="col-sm-4 control-label labelRight">班级名称</label>
	                <div class="col-sm-7">
	                  <input type="text" autofocus="autofocus" class="form-control" id="ClassID" value="7"></div>
	              </div>
	              <div class="form-group container col-sm-12">
	                <label for="classmate" class="col-sm-4 control-label labelRight">班级名称</label>
	                <div class="col-sm-7">
	                  <form id="msg_form">
	                    <input type="text" autocomplete="" class="form-control" id="ClassName" placeholder="请输入班级" value="电子一班"></form>
	                </div>
	              </div>
	              <div class="modal-footer modalFoot ">
	                <button type="button" class="btn btn-default Cancel" data-dismiss="modal">取消</button>
	                <button type="button" class="btn btn-primary Submit" id="Editsubmit" data-dismiss="modal">提交</button></div>
	            </div>
	          </div>
	        </div>
	      </div>	
      </div>
</template>

<script>
</script>

<style>
</style>