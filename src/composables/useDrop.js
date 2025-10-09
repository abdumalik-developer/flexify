import {tags} from "@/stores/ComponentStore.js";
import { shallowReactive } from "vue";

export default function(){
    
    const children = shallowReactive([]);

    return {
        drop(ev){  
            const tag = tags.find( (tag)=>tag.name === JSON.parse( ev.dataTransfer.getData('tag') ).name );
            children.push( tag );
        },
        children
    }

}