<script setup>
import useDrop from "@/composables/useDrop.js";

const {children, drop} = useDrop();

import {useTuningStore} from '@/stores/TuningStore.js'

const {unsetHighlightedComponent} = useTuningStore();

</script>

<template>
    <div class="bg-gray-900 w-4/5 working-area rounded-lg min-h-[70vh] p-2" @drop.stop="drop" @dragover.prevent @click="unsetHighlightedComponent">
        <component :is="tag.component" :identity="tag.tagName" v-for="tag in children"></component>
    </div>
</template>