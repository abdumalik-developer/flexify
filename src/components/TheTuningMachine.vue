<script setup>
import { useTuningStore } from '@/stores/TuningStore';
import Display from './tuners/Display.vue';
import Width from './tuners/Width.vue';
import { computed } from 'vue';

const tuningStore = useTuningStore();

const tuner = computed(()=>tuningStore.getTuner(tuningStore.highlightedComponent).tuner);

</script>
<template>
    <div class="my-3.5 flex flex-col gap-2 bg-gray-600 p-2.5 rounded-xl text-white cursor-grab">
        <Display v-model="tuner.display"/>
        <Width v-model="tuner.width"/>
    </div>
</template>