<template>
	<el-container style="width: 1500px;margin: 0 auto; height: 500px; border: 1px solid #eee">
		<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
			<el-menu :default-openeds="['1', '2','3']">
				<!--<el-submenu index="1">
					<template slot="title"><i class="el-icon-message"></i>管理相关</template>
					<el-menu-item-group>						
						<el-menu-item index="1-1">班级</el-menu-item>
						<el-menu-item index="1-2">科目</el-menu-item>
						<el-menu-item index="1-2">教师</el-menu-item>
						<el-menu-item index="1-2">学生</el-menu-item>
						<el-menu-item index="1-2">老师</el-menu-item>						
					</el-menu-item-group>
				</el-submenu>-->
				
				<nav1></nav1>
				<nav2></nav2>
				<!--<el-submenu index="2">
					<template slot="title"><i class="el-icon-menu"></i>考勤相关</template>
					<el-menu-item-group>
						<el-menu-item index="2-1">选项1</el-menu-item>
						<el-menu-item index="2-2">选项2</el-menu-item>
					</el-menu-item-group>
			
				</el-submenu>-->
				<nav3></nav3>
				
				<!--<el-submenu index="3">
					<template slot="title"><i class="el-icon-setting"></i>其他相关</template>
					<el-menu-item-group>
						
						<el-menu-item index="3-1">选项1</el-menu-item>
						<el-menu-item index="3-2">选项2</el-menu-item>
					</el-menu-item-group>
					

				</el-submenu>-->
			</el-menu>
		</el-aside>
	</el-container>
</template>

<script>
	import nav1 from './Nav1.vue'
	import nav2 from './Nav2.vue'
	import nav3 from './Nav3.vue'
	console.log(nav2)
	export default {
		name: "app",
		components: {
			nav1,
			nav2,
			nav3
		}
	}
</script>

<style>

</style>