<template>
  <nuxt-link class="jokeCard" :to="'jokes/' + joke.id">
    <p class="jokeCard__joke">
      {{ joke.joke }}
    </p>
    <small class="jokeCard__id">{{ joke.id }}</small>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    joke: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
	.jokeCard{
		display: flex;
		flex-direction: column;
		background-color: white;
		box-shadow: 0px 6px 12px rgb(233, 232, 232);
		padding: 1em 1em 1em 1.5em;
		border-radius: 1em;

		&:not(:first-child){
			margin: 1em 0 0 0;
		}

		&__joke{
			padding: 0.5em 0 0.5em 0;
		}

		&__id{
			color: lighten($color: grey, $amount: 10);
		}
	}
</style>
