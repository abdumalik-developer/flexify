<script setup>

    let width = defineModel();

    const options = [
        // Fractional widths
        "w-0", "w-px", "w-0.5", "w-1", "w-1.5", "w-2", "w-2.5", "w-3", "w-3.5",
        "w-4", "w-5", "w-6", "w-7", "w-8", "w-9", "w-10", "w-11", "w-12",
        "w-14", "w-16", "w-20", "w-24", "w-28", "w-32", "w-36", "w-40",
        "w-44", "w-48", "w-52", "w-56", "w-60", "w-64", "w-72", "w-80", "w-96",

        // Fractional percentages
        "w-1/2", "w-1/3", "w-2/3", "w-1/4", "w-2/4", "w-3/4",
        "w-1/5", "w-2/5", "w-3/5", "w-4/5",
        "w-1/6", "w-2/6", "w-3/6", "w-4/6", "w-5/6",
        "w-1/12", "w-2/12", "w-3/12", "w-4/12", "w-5/12", "w-6/12",
        "w-7/12", "w-8/12", "w-9/12", "w-10/12", "w-11/12",

        // Full and viewport widths
        "w-full", "w-screen", "w-svw", "w-lvw", "w-dvw", "w-min", "w-max", "w-fit", "w-auto",

        // Arbitrary values (example pattern)
        "w-[1px]", "w-[2rem]", "w-[50%]", "w-[calc(100%-1rem)]"
    ];

    
</script>
<template>
    <div class="flex justify-between">
        <span>Width</span>
        <select class="outline-0" v-model="width">
            <option v-for="option in options" :value="option" class="bg-gray-600 text-right">{{ option }}</option>
        </select>
    </div>
</template>