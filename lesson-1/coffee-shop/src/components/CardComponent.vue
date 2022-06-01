<template>
    <div :class="classItem">
        <img :src="require(`@/assets/img/${img}`)" alt="coffee">
        <div class="best__item-title">
            {{text}}
        </div>
        <div class="best__item-price">{{price}}</div>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            ruquired: true,
        },
        price: {
            type: Number,
            ruquired: true,
        },
        img: {
            type: String,
            ruquired: true,
        },
        classItem: {
            type: String,
            ruquired: false,
        }
    },
};
</script>
