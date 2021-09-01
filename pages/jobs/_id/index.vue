<template>
    <div class="inner-container">
        <div class="controller">
            <div class="bigJobCard">
                <h1 class="bigJobCard__header">{{ job.title }}</h1>
                <div class="bigJobCard__texts">
                    <p class="bigJobCard__texts"><span>Company</span>{{ job.company_name }}</p>
                    <p class="jobCard__text-category"><span class="jobCard__text-span">Category:</span> {{ job.category }}</p>
                    <p class="jobCard__text-candidateRequiredLocation"><span class="jobCard__text-span">Location:</span> {{ job.candidate_required_location }}</p>
                    <p class="jobCard__text-salary"><span class="jobCard__text-span">Salary:</span> {{ job.salary }}</p>
                </div>
                <div class="bigJobCard__description">
                    <h2 class="bigJobCard__description-title">Description</h2>
                    <p class="bigJobCard__description-text">{{ job.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

</style>