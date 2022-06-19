<template>
    <header>
        <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
            <link-component
                classLink="header__item"
                :link="links.header.link"
            >
            <img :src="require(`@/assets/logo/${links.header.icon}`)" alt="logo">
            </link-component>
            <link-component
                v-for="link in links.other"
                v-key="link.id"
                classLink="header__item"
                :text="link.text"
                :link="link.link"
            />
        </ul>
    </header>
</template>


<script>
import LinkComponent from '@/components/LinkComponent.vue'

export default {
    components: {LinkComponent},
    computed: {
        links(){
            return this.$store.getters["getHeaderLinks"];
        },
    },
}
</script>