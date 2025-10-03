<script setup>
import {  ref } from 'vue';
import SwitcherButton from './SwitcherButton.vue';
import TheTagsCollection from './TheTagsCollection.vue';
import TheTuningMachine from './TheTuningMachine.vue';
import { activeTab, TAGS_TAB_ALIAS, TUNING_TAB_ALIAS } from '@/stores/TuningStore.js';

function isActiveTab( alias )
{
    return activeTab.value === alias;

}

</script>
<template>
    <div class="bg-gray-800 rounded-lg p-4">
        <div class="flex bg-gray-700 p-1 rounded-2xl text-white text-sm">
            <SwitcherButton class="cursor-pointer" :class="{'bg-gray-600':isActiveTab(TAGS_TAB_ALIAS)}" @click="activeTab=TAGS_TAB_ALIAS">Tags</SwitcherButton>
            <SwitcherButton class="cursor-pointer" :class="{'bg-gray-600':isActiveTab(TUNING_TAB_ALIAS)}" @click="activeTab=TUNING_TAB_ALIAS">Tuning</SwitcherButton>
        </div>
        <div>
            <Transition
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                enter-active-class="transition duration-700"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
                
            >
                <TheTagsCollection v-if="isActiveTab( TAGS_TAB_ALIAS )"/>
            </Transition>
            
           <Transition
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                enter-active-class="transition duration-700"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <TheTuningMachine v-if="isActiveTab( TUNING_TAB_ALIAS )"/>
            </Transition>
        </div>
    </div>
</template>