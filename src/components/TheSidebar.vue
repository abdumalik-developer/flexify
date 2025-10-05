<script setup>
import {  ref } from 'vue';
import SwitcherButton from './SwitcherButton.vue';
import TheTagsCollection from './TheTagsCollection.vue';
import TheTuningMachine from './TheTuningMachine.vue';
import { useTuningStore } from '@/stores/TuningStore.js';

const { TAGS_TAB_ALIAS, TUNING_TAB_ALIAS, setActiveTab } = useTuningStore();
const tuningStore = useTuningStore();

</script>
<template>
    <div class="bg-gray-800 rounded-lg p-4">
        <div class="flex bg-gray-700 p-1 rounded-2xl text-white text-sm">
            <SwitcherButton class="cursor-pointer" :class="{'bg-gray-600':tuningStore.isTagsTabActive}" @click="setActiveTab(TAGS_TAB_ALIAS)">Tags</SwitcherButton>
            <SwitcherButton class="cursor-pointer" :class="{'bg-gray-600':tuningStore.isTuningTabActive}" @click="setActiveTab(TUNING_TAB_ALIAS)">Tuning</SwitcherButton>
        </div>
        <div>
            <Transition
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                enter-active-class="transition duration-700"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
                
            >
                <TheTagsCollection v-if="tuningStore.isTagsTabActive"/>
            </Transition>
            
           <Transition
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                enter-active-class="transition duration-700"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <TheTuningMachine v-if="tuningStore.isTuningTabActive"/>
            </Transition>
        </div>
    </div>
</template>