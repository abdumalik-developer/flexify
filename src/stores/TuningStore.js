import { ref, shallowRef } from "vue";

export let highlightedComponent = shallowRef(null);

export const TAGS_TAB_ALIAS = 'tags';
export const TUNING_TAB_ALIAS = 'tuning-machine';

export let activeTab = ref(TAGS_TAB_ALIAS);

export function setHightlighComponent( component ){

    highlightedComponent.value = component
    
    activeTab.value = highlightedComponent.value ? TUNING_TAB_ALIAS : TAGS_TAB_ALIAS;

}