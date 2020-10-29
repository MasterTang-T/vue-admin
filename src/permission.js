import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import {
    getLoginStatus
} from '@/lib/auth'
NProgress.configure({
    showSpinner: false
}) // NProgress Configuration

router.beforeEach((to, from, next) => {
    NProgress.start()
    const LoginStatus = getLoginStatus() || false;
    if (LoginStatus) {
        NProgress.done()
        if (to.path === '/login' || to.path === '/') {
            next({ path:'/home'})
        }
        next()
    } else {
        NProgress.done()
        if (to.path === '/login') {
            next()
        } else {
            next({
                path: '/login',
            })
        }
      
    }
})