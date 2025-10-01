<script setup>
import { reactive, useTemplateRef } from 'vue';
import Tag from '@/components/Tag.vue';

const tagRefs = useTemplateRef("tagRefs");

let draggedTag = null;

const tags = reactive([
    {
        name: 'Div'
    },
    {
        name: 'Span'
    },
    {
        name: 'H1'
    },
    {
        name: 'H2'
    },
    {
        name: 'H3'
    },
    {
        name: 'P'
    }
]);

function dragover(ev)
{
    
    const mouseY = ev.clientY;

    let insideElement = ( tagRefs.value.reduce( (result, current)=>{
        
        if( current.tag.name === draggedTag.name ) return result;

        if( current.getRect().y - mouseY < 0 && current.getRect().y + current.getRect().height - mouseY > 0 )
        {

            return current;

        }

        return result;


    }, null));

    if( !insideElement ) return;

    let indexToRemove = tags.findIndex((tag)=>tag.name === draggedTag.name);
    let indexToInsert = tags.findIndex((tag)=>tag.name === insideElement.tag.name);;

    if (indexToInsert === null || indexToRemove === null) return;
    
    tags.splice( indexToRemove, 1);
    tags.splice( indexToInsert, 0, draggedTag );
   
}


</script>
<template>
    <div class="my-3.5 flex flex-col gap-2" @dragover.prevent="dragover">
        <Tag ref="tagRefs" 
            v-for="tag in tags" 
            :key="tag.name" 
            @dragstart="draggedTag=tag" 
            @dragend="draggedTag=null"
            :tag="tag"
        />        
    </div>
</template>