import {login} from '@/api/login'
const state = {
    isLogin:false,
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
                commit('SET_LOGIN_STATUS',data.info.login_status);
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