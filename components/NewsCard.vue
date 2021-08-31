<template>
  <div class="newsCard">
    <a :href="news.url">
      <div class="newsCard__text">
        <p class="newsCard__text-title">{{ news.title }}</p>
      </div>
      <img :src="news.image" alt="" class="newsCard__img">
      <div class="newsCard__text-source">
        <p>Source: {{ news.source.name }}</p>
        <p>Date: {{ news.publishedAt }}</p>
      </div>
      
    </a>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
 .newsCard{
     display: flex;
     flex-direction: column;
     align-items: center;
    max-width:  60vmin;
     height: 70vmin;
     background-color: white;
     box-shadow: 0 1px 3.5px 0px grey;
     padding: 2em;
     border-radius: 1.7em;
     margin: 2em 0 0 0;

    &__img{
         max-width: 50vmin
     }

     &__text{
         display: flex;
         flex-direction: column;
         align-items: center;
         text-align: center;
         padding: 1vmin 1vmin 1vmin 1vmin;

        &-title{
            font-size: 1.2em;
        }

        &-source{
            padding: 1vmin 0 0 0;
            color: grey;
            font-size: 0.8em;
        }

     }

 }

 @media screen and (max-width: 554px) {
   .newsCard{
     height: fit-content;
     width: 70vmin
   }
 }
</style>
