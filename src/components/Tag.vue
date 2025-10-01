<script setup>
import { CubeIcon } from '@heroicons/vue/24/solid';
import { ref, useTemplateRef } from 'vue';

const rootElement = useTemplateRef('rootElement');

let isDragged = ref(false)

const props = defineProps({
    tag: Object
})

defineExpose({
    getRect: function(){
        return rootElement.value.getBoundingClientRect();
    },
    tag: props.tag
});


</script>
<template>
    <div  ref="rootElement"  :class="{
                    'p-2.5 rounded-xl text-white cursor-grab': true,
                    'bg-amber-300': isDragged,
                    'bg-gray-600': !isDragged
                    }" 
            draggable="true" 
            @dragstart="isDragged = true"
            @dragend="isDragged = false"        
        >
         <div class="flex items-center">
            <div>
                <CubeIcon class="size-6"/>
            </div>
            <div class="ml-2">
                {{ props.tag.name }}
            </div>
        </div>
    </div>
</template>