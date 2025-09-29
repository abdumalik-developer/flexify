<script setup>
import { ref } from 'vue';
import SwitcherButton from './SwitcherButton.vue';
import TheTagsCollection from './TheTagsCollection.vue';
import TheTuningMachine from './TheTuningMachine.vue';


const TAGS_TAB_ALIAS = 'tags';
const TUNING_TAB_ALIAS = 'tuning-machine';

let activeTab = ref(TAGS_TAB_ALIAS);

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
        <div class="my-3.5 flex flex-col gap-2">
            <TheTagsCollection v-if="isActiveTab( TAGS_TAB_ALIAS )"/>
            <TheTuningMachine v-if="isActiveTab( TUNING_TAB_ALIAS )" />
        </div>
    </div>
</template>