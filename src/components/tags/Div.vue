<script setup>
import useDrop from "@/composables/useDrop.js";

const {components, drop} = useDrop();

</script>
<template>
    <div class="min-h-20 border border-amber-400 border-dotted m-2" @drop.stop="drop" @dragover.prevent>
        <component :is="component" v-for="component in components"></component>
    </div>
</template>