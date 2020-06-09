<template>
  <div id="app">
      <router-view>
      </router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                activeIndex: this.$route.path,
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                this.$router.push(key);
            }
        }
    }
</script>

<style>
</style>
