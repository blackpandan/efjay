<template>
    <div class="jobCard">
        <nuxt-link :to="'/jobs/' + job.id">
            <div class="jobCard__text">
                <h1 class="jobCard__text-title">{{ job.title }}</h1>
                <p class="jobCard__text-companyName"><span class="jobCard__text-span">Company:</span> {{ job.company_name }}</p>
                <p class="jobCard__text-category"><span class="jobCard__text-span">Category:</span> {{ job.category }}</p>
                <p class="jobCard__text-candidateRequiredLocation"><span class="jobCard__text-span">Location:</span> {{ job.candidate_required_location }}</p>
                <p class="jobCard__text-salary"><span class="jobCard__text-span">Salary:</span> {{ job.salary }}</p>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    props: {
        job: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .jobCard{
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 5vmin 2vmin 2.5vmin 5vmin;
        box-shadow: 0px 6px 12px #c6c6c6;
        border-radius: 1em;
        width: 60vmin;
        height: 50vmin;
        margin: 2em 0 0 0;

        &__text{
            line-height: 2em;
            
            &-title{
                padding: 0 0 0.5vmin 0;
                font-size: 1.5em;
            }

            &-span{
                color: lighten($color: #000000, $amount: 50);
                padding: 0 0.5vmin 0 0;
            }
        }
    }

    @media screen and (max-width: 554px){
        .jobCard{
            width: 80vmin;
            height: fit-content;
        }
    }
</style>