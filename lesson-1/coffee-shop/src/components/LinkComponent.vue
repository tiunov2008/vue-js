<template>
    <li :class="classLink">
        <router-link :to="link">{{text}}<slot></slot></router-link>
    </li>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
        },
        text: {
            type: String,
        },
        classLink: {
            type: String,
        }
    },
};
</script>
