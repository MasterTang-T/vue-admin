// 权限相关，设置和获取登录状态
export const setLoginStatus = (loginStatus, timeout) => {
    // timeout 过期时间，秒
    console.log(loginStatus,'xxxx')
    localStorage.setItem("loginStatus", loginStatus)
    if (timeout) {
        // setTimeout(() => {
        //     localStorage.removeItem('loginStatus')
        // },timeout*1000)
    }
}

export const getLoginStatus = () => {
    const loginStatus = localStorage.getItem("loginStatus")
    return loginStatus
}