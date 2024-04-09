import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'LandingPage',
            component: () => import('../views/LandingPage.vue')
        },
        {
            path: '/loanApplication',
            name: 'LoanApplication',
            component: () => import('../views/LoanApplication.vue')
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('../views/Home.vue'),
            children: [
                {
                    path: '',
                    redirect: 'dashboard'
                },
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    component: () => import('../components/SideBarLinks.vue/Dashboard.vue')
                },
                {
                    path: '/loan',
                    name: 'Loan',
                    component: () => import('../components/SideBarLinks.vue/Loan.vue')
                },
                {
                    path: '/creditAlert',
                    name: 'Payment',
                    component: () => import('../components/SideBarLinks.vue/creditAlert.vue')
                },
                {
                    path: '/verifications',
                    name: 'Verification',
                    component: () => import('../components/SideBarLinks.vue/Verifications.vue')
                },
                {
                    path: '/deduction',
                    name: 'Deduction',
                    component: () => import('../components/SideBarLinks.vue/Deduction.vue')
                },
                {
                    path: '/revenueAssurance',
                    name: 'RevenueAssurance',
                    component: () => import('../components/SideBarLinks.vue/revenueAssurance.vue')
                },
                {
                    path: '/reports',
                    name: 'Reports',
                    component: () => import('../components/SideBarLinks.vue/Reports.vue')
                },
                {
                    path: '/loanDiskOperation',
                    name: 'LoanDiskOperation',
                    component: () => import('../components/SideBarLinks.vue/loanDiskOperation.vue')
                },
                {
                    path: '/issuesLibrary',
                    name: 'IssuesLibrary',
                    component: () => import('../components/SideBarLinks.vue/issuesLibrary.vue')
                },
                {
                    path: '/portalBalance',
                    name: 'PortalBalance',
                    component: () => import('../components/SideBarLinks.vue/portalBalance.vue')
                }, 
            ]
        },
        {
            path: '/:catchAll(.*)',
            name: '404',
            component:  () => import('../views/404.vue')
        }

    ]
})

export default router