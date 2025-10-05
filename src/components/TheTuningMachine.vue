<script setup>
import { useTuningStore } from '@/stores/TuningStore';
import { ref, watch } from 'vue';
import Display from './tuners/Display.vue';

const display = ref('block');

const tuningStore = useTuningStore();

watch(display, function( newValue ){
    tuningStore.boardComponentClasses.get(tuningStore.highlightedComponent).tuner.display = newValue;
});


</script>
<template>
    <div class="my-3.5 flex flex-col gap-2 bg-gray-600 p-2.5 rounded-xl text-white cursor-grab">
        <Display v-model="display"/>
    </div>
</template>