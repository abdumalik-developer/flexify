<script setup>
</script>
<template>
    <div class="bg-gray-600 p-2.5 rounded-xl text-white cursor-grab">
         <div class="flex items-center">
            <div>
                <slot name="icon"></slot>
            </div>
            <div class="ml-2">
                <slot name="text"></slot>
            </div>
        </div>
    </div>
</template>