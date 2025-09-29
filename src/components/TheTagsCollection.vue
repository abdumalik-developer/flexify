<script setup>
import Tag from './Tag.vue';
import {CubeIcon, DocumentTextIcon} from '@heroicons/vue/24/solid';

</script>
<template>
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
</template>