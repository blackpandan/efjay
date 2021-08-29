<template>
<div class="inner-container">
    <div class="news-controller">
        <newsCard v-for="(news, index) in articles" :news="news" :key="index"></newsCard>

        
    </div>
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
import axios from 'axios';
import NewsCard from '../../components/NewsCard.vue';
export default {
    head(){
        return{
            title: "News",
            meta: [
                {hid:'description', name: 'description', content: 'Latest News From Around The Globe Except Naija '},
                {hid:'author', name:'author', content:'James Faith'}
            ]
        }
    },
    components:{
        "newsCard":NewsCard,
    },
    data(){
        return{
            articles: []
        }
    },
    async fetch(){
        const config = {
            headers: {
                "Accept": "application/json",
            },
            params: {
                lang: "en",
                token: "1efe123087f26ab195a2840f09af3946",
                max: 33
            }
        };
        const data = await axios.get("https://gnews.io/api/v4/top-headlines",config).then(response=>{
            // console.log(response.data);
            this.articles = response.data.articles
        }).catch(error=>{

            console.log(error)
        })
    }

}
</script>

<style lang="scss" scoped>
    .news-controller{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }

    .error-container{
        display: flex;
        min-height: 45vh;
        place-items: center;
        align-items: center;
        justify-content: center;

    }
</style>