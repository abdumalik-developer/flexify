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
        setHightlightedComponent( component )
        {
            
            this.highlightedComponent = component

            this.setActiveTab( this.highlightedComponent ? this.TUNING_TAB_ALIAS : this.TAGS_TAB_ALIAS );

            this.boardComponentClasses.get( component ).tuner.backgroundColor='bg-blue-500/10'
            
        },
        unsetHighlightedComponent(){

            this.boardComponentClasses.get( this.highlightedComponent ).tuner.backgroundColor=''
            
            this.highlightedComponent = null;

            this.setActiveTab( this.TAGS_TAB_ALIAS );
            
        },
        toggleHighlightedComponent( component )
        {

            this.highlightedComponent === component ? this.unsetHighlightedComponent() 
                                                    : this.setHightlightedComponent( component )
        
        },
        setDefaultTuner( component )
        {

            const tuner = reactive({
                display: 'block',
                minHeight: 'min-h-20',
                width: 'w-auto',
                backgroundColor:'bg-black/20'
            });
            
            const defaultClasses = computed(()=>({
                [tuner.minHeight]: true,
                [tuner.display]: true,
                [tuner.width]: true,
                [tuner.backgroundColor]: true,
                'border': true,
                'border-amber-400': true,
                'border-dotted': true,
                'p-2': true,
                'cursor-pointer': true,
                'shadow-xl': this.highlightedComponent === component,
                
            }));

            const defaultTuner = {
                'classes' : defaultClasses,
                'tuner': tuner
            };

            this.boardComponentClasses.set( component, defaultTuner );

            return this.boardComponentClasses.get( component );

        },
        getTuner( component )
        {

            return this.boardComponentClasses.get(component) ?? this.setDefaultTuner( component );

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
