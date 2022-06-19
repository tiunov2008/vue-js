<template>
    <div :class="classItem" @click="onEmmit(card.id)">
        <img :src="require(`@/assets/img/${card.img}`)" alt="coffee">
        <div class="best__item-title">
            {{card.text}}
        </div>
        <div class="best__item-price">{{card.price}}</div>
    </div>
</template>

<script>
export default {
    props: {
        classItem: {
            type: String,
            ruquired: false,
        },
        card:{
            type: Object,
            ruquired: true,
        }
    },
    methods: {
        onEmmit(id) {
            this.$emit('onNavigate', id);
        }
    }
};
</script>
