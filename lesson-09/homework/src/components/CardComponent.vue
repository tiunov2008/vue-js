<template>
    <div @click="onEmmit(card.id)">
        <div class="item-wrapper d-flex flex-column">
            <img :src="require(`@/assets/img/${card.id}.jpeg`)" class="mb-3" alt="">
            <h2>{{card.title}}</h2>
            <div class="description">{{card.text}}
            </div>
        </div>
    </div>  
</template>

<script>

export default {
    props: {
        card:{
            type: Object,
            required: true,
        }
    },
    methods: {
        onEmmit(id) {
            console.log(1);
            console.log(id);
            this.$emit('onNavigate', id);
        }
    }
}
</script>