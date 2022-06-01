<template>
    <router-link :to="link">{{text}}</router-link>
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
    },
};
</script>
