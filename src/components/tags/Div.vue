<script setup>
import useDrop from "@/composables/useDrop.js";
import { getCurrentInstance, reactive, computed, ref, onMounted } from "vue";
import { getComponentClasses, highlightedComponent, setHightlighComponent } from "@/stores/TuningStore.js";

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

const styleClasses = getComponentClasses(instance).classes;

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