import { login } from '@/api/login'
import {setLoginStatus,getLoginStatus} from '@/lib/auth'
const state = {
    isLogin:getLoginStatus() || false,
}

const mutations = {
    SET_LOGIN_STATUS: (state, login_status) => {
        state.isLogin = login_status
    },
}

const actions = {
    login({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            login(userInfo).then((response) => {
                const { data } = response;
                commit('SET_LOGIN_STATUS', data.info.login_status);
                setLoginStatus(data.info.login_status,10);
                resolve()
            }).catch((error) => {
                
                reject(error)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}