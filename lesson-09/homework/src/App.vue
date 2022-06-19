<template>
    <div class="wrapper mt-5">
      <router-view/>
    </div>
</template>

<script>
import FirstView from '@/views/FirstView.vue'

export default {
    components: {FirstView},
}
</script>

