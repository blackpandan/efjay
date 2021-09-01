<template>
  <div class="inner-container">
    <div class="jobs-controller">
        <job v-for="(job, index) in jobs" :job="job" :key="index"></job>
    </div>
    <div class="error-container" v-if="$fetchState.pending">
      <div class="controller">
        <van-loading type="spinner" size="80px" color="#6F2FBD" />
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
import Job from '../../components/Job.vue';
import axios from 'axios';

export default {
    components: {
        "job":Job
    },
    data(){
        return{
            jobs:[]
        } 
    },
    activated(){
        if (this.$fetchState.timestamp <= Date.now() - 600000) {
        this.$fetch()
      }
    },
    async fetch(){
        const config = {
            params: {
              "limit": 100
            },
            headers:{
            "Accept": "application/json"
            }
        };

        const data = await axios.get("https://remotive.io/api/remote-jobs").then(response=>{
            this.jobs = response.data.jobs;
            console.log(response);
        }).catch(error=>{
            console.log(error);
        });
    }   
}
</script>

<style lang="scss" scoped>
.jobs-controller {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}

.error-container {
  display: flex;
  min-height: 45vh;
  place-items: center;
  align-items: center;
  justify-content: center;
}
</style>