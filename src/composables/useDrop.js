import {tags} from "@/stores/ComponentStore.js";
import { shallowReactive } from "vue";

export default function(){
   
    return {
        drop(ev){    
            const tag = tags.find((tag)=>tag.name === JSON.parse( ev.dataTransfer.getData('tag') ).name);
            this.components.push( tag.component );
        },
        components: shallowReactive([])
    }

}