<template>
	<div class="inner-container">
		<div class="controller">
			<div class="welcomeCard__texts">
				<p class="jokeCard__joke">{{ joke.joke }}</p>
				<small class="jokeCard__id">{{ joke.id }}</small>
			</div>
		</div>
	</div>

</template>

<script>
import axios from 'axios'

export default{
	data(){
		return {
			joke: {}
		}
	},
	async created(){
		const config = {
			headers : {
				"Accept":"application/json"
			}	
		}
		const res = await axios.get(`https://icanhazdadjoke.com/j/${this.$route.params.id}`, config)
		this.joke = res.data

		console.log(res)

	}
}

</script>
