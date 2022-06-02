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
    data() {
        return {
            links:{
                header:
                {
                    id: 0,
                    link: '/',
                    icon: 'Logo.svg',
                },
                other:[
                {
                    id: 1,
                    text: 'Our coffee',
                    link: '/our-coffee',
                },
                {
                    id: 2,
                    text: 'For your pleasure',
                    link: '/goods-page',
                },
                {
                    id: 3,
                    text: 'Contact us',
                    link: '/contacts',
                },
                ]
            }
        }
    }
}
</script>