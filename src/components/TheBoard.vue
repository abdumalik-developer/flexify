<script setup>
import useDrop from "@/composables/useDrop.js";

const {components, drop} = useDrop();

</script>

<template>
    <div class="bg-gray-900 w-4/5 working-area rounded-lg min-h-[70vh]" @drop="drop($event)" @dragover.prevent>
        <component :is="component" v-for="component in components"></component>
    </div>
</template>