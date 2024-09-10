<template>


    <router-view v-slot="{ Component, route }">
        <keep-alive>
        <div :key="route.name">
            <Component :is="Component" />
        </div>
        </keep-alive>
        </router-view>
    <div id="f">
        
        <router-link to="/">О нас</router-link> ||
        <router-link to="/about">Контакты</router-link> ||
  </div>
</template>
<script>

export default {
    
}
</script>
<style scoped>
</style>