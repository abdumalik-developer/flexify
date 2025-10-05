<script setup>
import useDrop from "@/composables/useDrop.js";
import { getCurrentInstance} from "vue";
import { useTuningStore } from "@/stores/TuningStore.js";

const tuningStore = useTuningStore();

const {components, drop} = useDrop();

const instance = getCurrentInstance();

function toggleHighlight()
{
    
    tuningStore.setHightlighComponent( tuningStore.highlightedComponent === instance ? null :  instance )

}

</script>
<template>
    <div 
        :class="tuningStore.getComponentClasses(instance).classes" 
        @drop.stop="drop" 
        @dragover.prevent 
        @click.stop="toggleHighlight"

    >
        <component :is="component" v-for="component in components"></component>
    </div>
</template>