<template>
    <header class="header">
        <h1 class="header__logo">ef-jay</h1>
        <ul class="header__links">
            <nuxt-link class="header__links-link" to="/">Home</nuxt-link>
            <nuxt-link class="header__links-link" to="/jobs">Jobs</nuxt-link>
            <nuxt-link class="header__links-link" to="/news">News</nuxt-link>
            <nuxt-link class="header__links-link" to="/jokes">Jokes</nuxt-link>

            <nuxt-link class="header__links-icon" to="/"><van-icon name="wap-home" /></nuxt-link>
            <nuxt-link class="header__links-icon" to="/jobs"><van-icon name="invition" /></nuxt-link>
            <nuxt-link class="header__links-icon" to="/news"><van-icon name="graphic" /></nuxt-link>
            <nuxt-link class="header__links-icon" to="/jokes"><van-icon name="smile" /></nuxt-link>
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
            align-items: center;
            justify-content: center;

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

            &-icon{
                display: none;
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

    @media  screen and (max-width: 554px) {
        .header{
            &__links{
                display: inline-flex;
                align-items: center;

                &-link{
                    display: none;
                }
                &-icon{
                    display: block;
                    font-size: 1.5em;
                    margin: 0 0 0 6vmin;
                
                    &:hover{
                        border-bottom: 2px solid white
                    }
                }
            }
        }

        .nuxt-link-exact-active{
            background-color: #ffffff00;
            color: rgb(253, 255, 125);
            

            &:hover{
                background-color: #ffffff00;
                color: white;
                border-bottom: 2px solid white
            }
        }
    }
</style>