<template>
    <header class="header">
        <h1 class="header__logo">ef-jay</h1>
        <ul class="header__links">
            <nuxt-link class="header__links-link" to="/">Home</nuxt-link>
            <nuxt-link class="header__links-link" to="/jobs">Jobs</nuxt-link>
            <nuxt-link class="header__links-link" to="/news">News</nuxt-link>
            <nuxt-link class="header__links-link" to="/jokes">Jokes</nuxt-link>
        </ul>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .header{
        left: 0;
        right: 0;
        display: flex;
        flex-direction:  row;
        background-color: #6f2dbd;
        color: white;
        align-items: center;
        justify-content: space-between;        
        padding: 1em 1em 1em 1em;

        &__logo{
            font-size: 1.5em;
        }

        &__links{
            display: flex;
            flex-direction: row;

            &-link{
                background-color: white;
                color: #463739;
                padding: 0.5em 1.3em 0.5em 1.3em;
                border-radius: 0.8em;
                font-size: 0.95em;

                &:not(:first-child){
                    margin: 0 0 0 1em;
                }

                &:hover{
                    background-color: darken($color: white, $amount: 10);
                    color: #463739
                }
            }

        }
    }

    .nuxt-link-exact-active{
        background-color: #463739;
        color: white;

        &:hover{
            background-color: white;
            color: #463739
        }
    }
</style>