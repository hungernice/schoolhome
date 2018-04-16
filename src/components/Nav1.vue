<template>
	<!--<el-submenu index="1">
		<template slot="title"><i class="el-icon-message"></i></template>
		<el-menu-item-group>
			<el-menu-item index="1-1">				
				<router-link to="/class">班级</router-link>
			</el-menu-item>
			<el-menu-item index="1-2">
				<router-link to="/course">科目</router-link>
			</el-menu-item>
			<el-menu-item index="1-2">
				<router-link to="/student">学生</router-link>
			</el-menu-item>
			<el-menu-item index="1-2">
				<router-link to="teacher">老师</router-link>
			</el-menu-item>
		</el-menu-item-group>
	</el-submenu>-->
	<ul class="nav nav-sidebar">
		<li>管理相关</li>
		<li>
			<router-link to="/class">班级</router-link>
		</li>
		<li>
			<router-link to="/course">科目</router-link>
		</li>
		<li>
			<router-link to="/student">学生</router-link>
		</li>
		<li>
			<router-link to="teacher">教师</router-link>
		</li>
	</ul>
</template>

<script>
</script>

<style>

</style>