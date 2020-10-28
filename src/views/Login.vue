<template>
<div class="login">
    <a-form-model layout="vertical" :model="formInline" @submit="handleSubmit" @submit.native.prevent :rules='rules'>
        <a-form-model-item prop='username' ref="username">
            <a-input v-model="formInline.username" placeholder="Username" size='large'>
                <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
            </a-input>
        </a-form-model-item>
        <a-form-model-item prop='password' ref="password">
            <a-input v-model="formInline.password" type="password" placeholder="Password" size='large'>
                <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input>
        </a-form-model-item>
        <a-form-model-item>
            <a-button type="primary" html-type="submit" block :disabled="formInline.user === '' || formInline.password === ''">
                Log in
            </a-button>
        </a-form-model-item>
    </a-form-model>
</div>
</template>

<script>
import {
    mapActions,
    mapState,
} from 'vuex'
export default {
    data() {
        return {
            formInline: {
                username: '',
                password: '',
            },
            rules: {
                username: [{
                    required: true,
                    message: 'Please input the username',
                    trigger: 'blur'
                }],
                password: [{
                    required: true,
                    message: 'Please input the password',
                    trigger: 'blur'
                }]
            }
        };
    },
    computed:{
        ...mapState({
            "isLogin":state => state.user.isLogin
        })
    },
    methods: {
        ...mapActions('user',[
            "login"
        ]),
       
        handleSubmit() {
            let _this = this;
            _this.login(_this.formInline).then(() => {
                if(_this.isLogin){
                    _this.$router.push({
                        path: "/home"
                    })
                }
            }).catch((err)=>{
                _this.$message.warning('登录失败')
                console.log(err)
            })
        },
       
    },
};
</script>

<style lang="less">
.login {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0b1447;
}
</style>
