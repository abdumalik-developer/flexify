<script setup>
import { useTuningStore } from '@/stores/TuningStore';
import Display from './tuners/Display.vue';

const tuningStore = useTuningStore();

</script>
<template>
    <div class="my-3.5 flex flex-col gap-2 bg-gray-600 p-2.5 rounded-xl text-white cursor-grab">
        <Display v-model="tuningStore.getTuner(tuningStore.highlightedComponent).tuner.display"/>
    </div>
</template>