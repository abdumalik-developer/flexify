<script setup>
import useDrop from "@/composables/useDrop.js";
import { getCurrentInstance } from "vue";
import { highlightedComponent, setHightlighComponent } from "@/stores/TuningStore.js";

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




</script>
<template>
    <div 
        :class="{
            'min-h-20 border border-amber-400 border-dotted p-2 cursor-pointer': true,
            'bg-black/20': highlightedComponent !== instance,
            'shadow-xl bg-amber-300/15': highlightedComponent === instance,
        }" 
        @drop.stop="drop" 
        @dragover.prevent 
        @click.stop="toggleHighlight"

    >
        <component :is="component" v-for="component in components"></component>
    </div>
</template>