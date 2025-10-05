import { defineStore } from "pinia";
import { computed, reactive, ref, shallowRef } from "vue";

export const useTuningStore = defineStore('tuning-store', {
    state(){
        
        const TAGS_TAB_ALIAS = 'tags';
        const TUNING_TAB_ALIAS = 'tuning-machine';

        return {
            TAGS_TAB_ALIAS,
            TUNING_TAB_ALIAS,
            activeTab: TAGS_TAB_ALIAS,
            highlightedComponent: shallowRef(null),
            boardComponentClasses: new Map()
        }

    },
    actions:{
        setActiveTab( value )
        {

            this.activeTab = value;

        },
        setHightlighComponent( component )
        {
            
            this.highlightedComponent = component

            this.activeTab = this.highlightedComponent ? this.TUNING_TAB_ALIAS : this.TAGS_TAB_ALIAS;

        },
        getComponentClasses( component )
        {

            const tuner = reactive({
                display: 'flex'
            });

            const defaultClasses = computed(()=>({
                'min-h-20 border border-amber-400 border-dotted p-2 cursor-pointer': true,
                'bg-black/20': this.highlightedComponent !== component,
                'shadow-xl bg-amber-300/15': this.highlightedComponent === component,
                [tuner.display]: true
            }));

            const defaultTuner = {
                'classes' : defaultClasses,
                'tuner': tuner
            };
            
            if( !this.boardComponentClasses.get( component ) )
            {   
                this.boardComponentClasses.set( component, defaultTuner );
            }

            return this.boardComponentClasses.get(component);

        }        
    },
    getters: {

        isTagsTabActive(){
            return this.activeTab === this.TAGS_TAB_ALIAS;
        },
        
        isTuningTabActive(){
            return this.activeTab === this.TUNING_TAB_ALIAS;
        }

    }

});
