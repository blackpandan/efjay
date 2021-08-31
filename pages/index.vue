<template>
  <div class="inner-container">
    <div class="controller">
      <div class="welcomeCard">
        <div class="welcomeCard__texts">
          <h1 class="welcomeCard__texts-head">
            <pre>Hello, 
Welcome To Ef-Jay</pre></h1>
          <p>A place created out of my curiosity for API</p>
          <p>you might or might not find news and jokes here <b>:)</b></p>
        </div>
        <links :clash="true"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Links from '../components/Links.vue';

  export default{
    middleware (ctx) {
    ctx.$gtm.push({ event: 'ssr' })
  },
    components: {
      "links":Links
    }
  }
</script>



<style lang="scss">
.controller{
   display: flex;
   min-height: 70vh;
   place-items: center;
   align-items: center;
   justify-content: center;
 }

 .welcomeCard{
   display: flex;
   align-items: center;
   flex-direction: column;
   width: fit-content;
   max-width: 600px;
   height: fit-content;

    &__texts{
      display: flex;
      flex-direction:column;
      align-items: center;
      text-align: center;
      // justify-content: center;
      background-color: rgb(255, 255, 255);
      padding: 2vmin 5vmin 5vmin 5vmin;
      line-height: 1.7em;
      border-radius: 1em;
      box-shadow: 0px 6px 10px lighten($color: grey, $amount: 40);

      &-head{
        padding: 0.3em 0 0.5em 0;
        line-height: 1.2em;
      }
    }

    
 }


</style>
