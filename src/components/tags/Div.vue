<script setup>
import { shallowReactive } from 'vue';
import {tags} from '@/stores/ComponentStore.js';

let components = shallowReactive([]);


function drop(ev)
{    
    const tag = tags.find((tag)=>tag.name === JSON.parse( ev.dataTransfer.getData('tag') ).name);
    components.push( tag.component );
}

</script>
<template>
    <div class="min-h-20 border border-amber-400 border-dotted m-2" @drop.stop="drop" @dragover.prevent>
        <component :is="component" v-for="component in components"></component>
    </div>
</template>