<script setup>
import useDrop from "@/composables/useDrop.js";
import { getCurrentInstance, reactive, computed } from "vue";
import { highlightedComponent, setHightlighComponent } from "@/stores/TuningStore.js";
import { ComputerDesktopIcon } from "@heroicons/vue/24/solid";

const {components, drop} = useDrop();

const instance = getCurrentInstance();

function toggleHighlight()
{
    if( highlightedComponent.value === instance )
    {
        
        setHightlighComponent( null );

    }else{

        setHightlighComponent( instance );

    }
}



const styleClasses = reactive({
    'min-h-20 border border-amber-400 border-dotted p-2 cursor-pointer': true,
    'bg-black/20': computed(()=> highlightedComponent.value !== instance),
    'shadow-xl bg-amber-300/15': computed(()=> highlightedComponent.value === instance)
});

defineExpose({
    styleClasses
});



</script>
<template>
    <div 
        :class="styleClasses" 
        @drop.stop="drop" 
        @dragover.prevent 
        @click.stop="toggleHighlight"

    >
        <component :is="component" v-for="component in components"></component>
    </div>
</template>