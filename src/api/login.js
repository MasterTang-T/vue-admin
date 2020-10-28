import request from '@/lib/request';

export const login = (userInfo) => {
    return request({
        url: "/login",
        method: "POST",
        data: userInfo
    })
}