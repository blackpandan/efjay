<template>
    <div class="inner-container">
        <div class="controller">
            <div class="welcomeCard">
                <div class="welcomeCard__texts">
                    <h1 class="welcomeCard__texts-head">About</h1>
                    <p>Nothing To see, I have Nothing To Say</p>
                </div>
                <links :clash="false" />
            </div>
        </div>
    </div>
</template>

<script>
import Links from '../components/Links.vue'
export default {
    head(){
        return{
            title: "About"
        }
    },
    components: {
        "links":Links
    }
}
</script>