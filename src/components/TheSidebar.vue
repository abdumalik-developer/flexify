<script setup>
import SwitcherButton from './SwitcherButton.vue';
import Tag from './Tag.vue';
import { CubeIcon, DocumentTextIcon } from '@heroicons/vue/24/solid';

</script>
<template>
    <div class="bg-gray-800 rounded-lg p-4">
        <div class="flex bg-gray-700 p-1 rounded-2xl text-white text-sm">
            <SwitcherButton class="bg-gray-600 cursor-pointer">Tags</SwitcherButton>
            <SwitcherButton class="cursor-pointer">Tuning</SwitcherButton>
        </div>
        <div class="my-3.5 flex flex-col gap-2">
            <Tag>
                <template v-slot:icon>
                    <CubeIcon class="size-6"/>
                </template>
                <template v-slot:text>
                    Div
                </template>
            </Tag>
            <Tag>
                <template v-slot:icon>
                    <DocumentTextIcon class="size-6"/>
                </template>
                <template v-slot:text>
                    Span
                </template>
            </Tag>
        </div>
    </div>
</template>