<template>
    <div class="container">
        <div class="grid d-flex justify-content-between flex-wrap"> 
            <card-component
                v-for="card in cards"
                v-key="card.id"
                :card="card"
                @onNavigate="navigate"
            />
        </div>
    </div>
</template>
<script>
import CardComponent from '@/components/CardComponent.vue'
import { navigate } from './mixins/navigate.js'
export default {
    components: {CardComponent},
    computed: {
        cards(){
            return this.$store.getters["getCards"];
        },
    },
    mixins: [navigate]
}
</script>