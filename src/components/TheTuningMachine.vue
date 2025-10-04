<script setup>
import { highlightedComponent } from '@/stores/TuningStore';
import { ref, watch } from 'vue';

    const display = ref('block');

    watch(display, function( newValue ){
        highlightedComponent.value.exposed.styleClasses[newValue] = true;
    });
</script>
<template>
    <div class="my-3.5 flex flex-col gap-2 bg-gray-600 p-2.5 rounded-xl text-white cursor-grab">
        <div class="flex justify-between">
            <span>Display</span>
            <select class="outline-0" v-model="display">
                <option value="block" class="bg-gray-600">block</option>
                <option value="inline" class="bg-gray-600">inline</option>
                <option value="inline-block" class="bg-gray-600">inline-block</option>
                <option value="flow-root" class="bg-gray-600">flow-root</option>
                <option value="flex" class="bg-gray-600">flex</option>
                <option value="inline-flex" class="bg-gray-600">inline-flex</option>
                <option value="grid" class="bg-gray-600">grid</option>
                <option value="inline-grid" class="bg-gray-600">inline-grid</option>
                <option value="contents" class="bg-gray-600">contents</option>
                <option value="table" class="bg-gray-600">table</option>
                <option value="inline-table" class="bg-gray-600">inline-table</option>
                <option value="table-caption" class="bg-gray-600">table-caption</option>
                <option value="table-cell" class="bg-gray-600">table-cell</option>
                <option value="table-column" class="bg-gray-600">table-column</option>
                <option value="table-column-group" class="bg-gray-600">table-column-group</option>
                <option value="table-footer-group" class="bg-gray-600">table-footer-group</option>
                <option value="table-header-group" class="bg-gray-600">table-header-group</option>
                <option value="table-row-group" class="bg-gray-600">table-row-group</option>
                <option value="table-row" class="bg-gray-600">table-row</option>
                <option value="list-item" class="bg-gray-600">list-item</option>
                <option value="hidden" class="bg-gray-600">hidden</option>
                <option value="sr-only" class="bg-gray-600">sr-only</option>
                <option value="not-sr-only" class="bg-gray-600">not-sr-only</option>
            </select>
        </div>
    </div>
</template>