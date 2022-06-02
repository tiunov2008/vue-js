<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <ul class="footer d-flex flex-wrap">
                        <link-component
                            classLink="footer__item"
                            :link="links.header.link"
                        >
                        <img :src="require(`@/assets/logo/${links.header.icon}`)" alt="logo">
                        </link-component>
                        <link-component
                            v-for="link in links.other"
                            v-key="link.id"
                            classLink="footer__item"
                            :text="link.text"
                            :link="link.link"
                        />
                    </ul>
                </div>
            </div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
        </div>
    </footer>
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
                    icon: 'Logo_black.svg',
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