import { computed, reactive, ref, shallowRef } from "vue";

export let highlightedComponent = shallowRef(null);

export const TAGS_TAB_ALIAS = 'tags';
export const TUNING_TAB_ALIAS = 'tuning-machine';

export let activeTab = ref(TAGS_TAB_ALIAS);

export function setHightlighComponent( component ){

    highlightedComponent.value = component
    
    activeTab.value = highlightedComponent.value ? TUNING_TAB_ALIAS : TAGS_TAB_ALIAS;

}

export let boardComponentClasses = new Map();

export function getComponentClasses( component )
{

    const tuner = reactive({
        display: 'flex'
    });

    const defaultClasses = computed(()=>({
        'min-h-20 border border-amber-400 border-dotted p-2 cursor-pointer': true,
        'bg-black/20': highlightedComponent.value !== component,
        'shadow-xl bg-amber-300/15': highlightedComponent.value === component,
        [tuner.display]: true
    }));

    const defaultTuner = {
        'classes' : defaultClasses,
        'tuner': tuner
    };
    
    if( !boardComponentClasses.get(component) )
    {   
        boardComponentClasses.set(component, defaultTuner);
    }

    return boardComponentClasses.get(component);

}