<template>
    
  <div class="container">
    <appHeader />
    <nuxt />
  </div>

</template>

<script>
import AppHeader from '../components/AppHeader.vue'
export default {
  components: {
    appHeader: AppHeader
  }
}
</script>

<style lang="scss">
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    li{
        list-style-type: none
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    .container{
        background-color:darken($color: white, $amount: 3);
        min-height: 100vh;
    }

    .inner-container{
        padding: 1em;   
    }

</style>
