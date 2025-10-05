<script setup>
import useDrop from "@/composables/useDrop.js";
import { getCurrentInstance, ref} from "vue";
import { useTuningStore } from "@/stores/TuningStore.js";

const tuningStore = useTuningStore();

const {children, drop} = useDrop();

const instance = getCurrentInstance();

const props = defineProps({
    identity: String
});

</script>
<template>
    <component 
        :is="props.identity"
        :class="tuningStore.getTuner( instance ).classes" 
        @drop.stop="drop($event)" 
        @dragover.prevent 
        @click.stop="tuningStore.toggleHighlightedComponent( instance )"

    >
        <component :is="tag.component" :identity="tag.tagName" v-for="tag in children"></component>
    </component>
</template>