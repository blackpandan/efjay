<template>
	<div class="inner-container">
		<jokes v-for="(joke, index) in jokes" :key="index" :joke="joke"></jokes>
		<div class="error-container" v-if="$fetchState.pending">
            <div class="controller">
				<van-loading type="spinner" size="80px" color="#6F2FBD"/>
            </div>
        </div>
        <div class="error-container" v-else-if="$fetchState.error">
            <div class="controller">
                <p>An Error Has Occured</p>
            </div>
        </div>
	</div>
</template>

<script>
import Jokes from '../../components/Jokes.vue';
import axios from 'axios';

export default{
	head(){
		return{
			title: "Jokes",
			meta: [
				{hid: "description", name:'description', content:'Well some dad jokes, yep the type your parents are likely to crack'},
				{hid:"author", name:"author", content: "James Faith"}
			]
		}
	},
	components: {
		"jokes":Jokes,
	},
	data(){
		return{
			jokes: []
		}
	},
	async fetch(){
		try{
			const config = {
				headers: {
					"Accept":"application/json"
				}
			}
			const res = await axios.get("https://icanhazdadjoke.com/search",config)
			this.jokes = res.data.results;
		}catch(err){
			console.log(err)
		};
	}
}

</script>

<style lang="scss" scoped>
	 .error-container{
        display: flex;
        min-height: 50vh;
        place-items: center;
        align-items: center;
        justify-content: center;
		text-align: center;

    }
</style>
