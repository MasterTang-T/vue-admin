<template>
<section class="app-main">
    <transition name="fade-transform" mode="out-in">
        <router-link :to="{path:curPath}"></router-link>
    </transition>
</section>
</template>

<script>
export default {
    props:['curPath']
}
</script>

<style>

</style>