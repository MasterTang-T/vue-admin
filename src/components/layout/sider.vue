<template>
<div class="app-container">
    <a-layout id="components-layout-demo-custom-trigger" class="layer-content">
        <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
            <div class="logo" />
            <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
                <a-menu-item v-for="route in routes" :key="route.path" v-if="route.path === '/login'?false:true">
                    <a-icon type="user" />
                    <span>{{route.name}}</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
                
            </a-layout-content>
        </a-layout>
    </a-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            route_arr:[],
            collapsed:false
        }
    },
    created(){
        this.route_arr = this.$router.options.routes;
        console.log(this.route_arr)
    },
    computed: {
        routes() {
            return this.route_arr
        },
    }

}
</script>

<style scoped>
.app-container {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
}

.layer-content {
    height: 100%;
}

#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}
</style>
