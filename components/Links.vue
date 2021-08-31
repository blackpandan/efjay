<template>
    
<ul class="links">
          <nuxt-link
            class="links-link"
            to="/jokes"
          >
            Jokes
          </nuxt-link>
          <nuxt-link class="links-link" to="/jobs">
            Jobs
          </nuxt-link>
          <nuxt-link class="links-link" to="/news">
            News
          </nuxt-link>
          <nuxt-link
            class="links-link"
            to="/about"
            v-if="clash"
          >
            About
          </nuxt-link>
           <nuxt-link
            class="links-link"
            to="/"
            v-if="!clash"
          >
            Home
          </nuxt-link>
</ul>

</template>

<script>
export default {
    props:{
        clash: {
            type: Boolean
        }
    }
}
</script>

<style lang="scss" scoped>
.links{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1em 0 1em 0;
      flex-wrap: wrap;

      &-link{
        padding: 0.8em 2em 0.8em 2em;
        margin: 0 0 0 1.5em;
        border-radius: 1em;
        font-weight: bold;
        color: white;
        background-color: #6F2BDB;

        &:hover{
            background-color: white;
            color: #463739;
            box-shadow: 0px 6px 6px lighten($color: grey, $amount: 25);
        }
      }

    }

    @media screen and (max-width:554px){
      .links{
        &-link{
          margin: 3vmin 0 0 5vmin
        }
      }
    }
</style>