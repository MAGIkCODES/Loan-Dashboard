import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: () => import('../components/Dashboard.vue')
        },
        {
            path: '/loan',
            name: 'Loan',
            component: () => import('../components/Loan.vue')
        },
        
        {
            path: '/creditAlert',
            name: 'Payment',
            component: () => import('../components/creditAlert.vue')
        },
        {
            path: '/verifications',
            name: 'Verification',
            component: () => import('../components/Verifications.vue')
        },
        {
            path: '/deduction',
            name: 'Deduction',
            component: () => import('../components/Deduction.vue')
        },

        {
            path: '/revenueAssurance',
            name: 'Deduction',
            component: () => import('../components/RevenueAssurance.vue')
        },
        {
            path: '/reports',
            name: 'Reports',
            component: () => import('../components/Reports.vue')
        },

    ]
})

export default router