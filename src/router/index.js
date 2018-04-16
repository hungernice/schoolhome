//import Vue from 'vue'
//import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Class from '@/components/manage/Class.vue'
import Course from '@/components/manage/Course.vue'
import Student from '@/components/manage/Student.vue'
import Teacher from '@/components/manage/Teacher.vue'
//Vue.use(Router)


//  {
//    path: '/',
//    name: 'HelloWorld',
//    component: HelloWorld
//  },
 let routes =     //new Router
[
    {
    	path: '/class',
    	name: 'class',
    	component: Class
    },
    {
    	path: '/course',
    	name: 'Course',
    	component: Course
    },
    {
    	path: '/student',
    	name: 'Student',
    	component: Student
    },
    {
    	path: '/teacher',
    	name: 'Teacher',
    	component: Teacher
    }
  ]


export default routes
