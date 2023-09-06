import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Views Components
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signUp',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: () => import('../views/TeacherView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue')
    },
    // Student Components

    {
      path: '/student',
      name: 'student',
      component: () => import('../student/Student.vue')
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: () => import('../student/Attendance.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('../student/Activity.vue')
    },
    {   
      path: '/studentreport',
      name: 'studentReport',
      component: () => import('../student/StudentReport.vue')
    },
    {
      path: '/behaviour',
      name: 'behaviour',
      component: () => import('../student/BehaviourPoint.vue')
    },
    {
      path: '/grading',
      name: '/grading',
      component: () => import('../student/Grading.vue')
    },
    {
      path: '/classnote',
      name: '/ClassNote',
      component: () => import('../student/ClassNote.vue')
    },
    {
      path: '/messages',
      name: '/messages',
      component: () => import('../student/Messages.vue')
    },
    {
      path: '/calendar',
      name: '/calendar',
      component: () => import('../student/Calendar.vue')
    },



    // subviews COMPONENTS
    {
      path: '/studentinfo',
      name: 'studentinfo',
      component: () => import('../student/subviews/StudentInfo.vue')
    },
    {
      path: '/studentAttendance',
      name: '/studentAttendance',
      component: () => import('../student/subviews/SudentAttendence.vue')
    },
    {
      path: '/timedactivity',
      name: '/timedactivity',
      component: () => import('../student/subviews/TimedActivity.vue')
    },
    {
      path: '/behaviourtypes',
      name: '/behaviourTypes',
      component: () => import('../student/subviews/BehaviourTypes.vue')
    },
    {
      path: '/gradingdetails',
      name: '/gradingDetails',
      component: () => import('../student/subviews/GradingDetails.vue')
    },
    {
      path: '/summary',
      name: '/summary',
      component: () => import('../student/subviews/Summary.vue')
    },



    // Administrator  views
    {
      path: '/schoolcalandar',
      name: '/schoolcalandar',
      component: () => import('../admin/SchoolCalandar.vue')
    },
  ]
})

export default router
