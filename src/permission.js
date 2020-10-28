import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({
    showSpinner: false
}) // NProgress Configuration


console.log(router.beforeEach, 'beforeEach')

router.beforeEach((to, from, next) => {
    if (to.path === '/') {
        next({
            path: '/login',
        })
    } else {
        next()
    }
})