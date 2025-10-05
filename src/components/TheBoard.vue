<script setup>
import useDrop from "@/composables/useDrop.js";

const {children, drop} = useDrop();

</script>

<template>
    <div class="bg-gray-900 w-4/5 working-area rounded-lg min-h-[70vh] p-2" @drop="drop($event)" @dragover.prevent>
        <component :is="tag.component" :identity="tag.tagName" v-for="tag in children"></component>
    </div>
</template>