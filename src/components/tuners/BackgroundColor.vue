<script setup>
import { reactive, ref, watch } from 'vue';


    let backgroundColor = defineModel();

    const colors = [
        "bg-red-500",
        "bg-orange-500",
        "bg-amber-500",
        "bg-yellow-500",
        "bg-lime-500",
        "bg-green-500",
        "bg-teal-500",
        "bg-blue-500",
        "bg-indigo-500",
        "bg-purple-500"
    ];

    const color = ref(null)

    watch(color, function(){
        backgroundColor.value = `${color.value}`; 
    })
    
</script>
<template>
    <div class="flex justify-between">
        <span>Bg color</span>
        <div>
            <select class="outline-0" v-model="color">
                <option v-for="option in colors" :value="option" class="bg-gray-600 text-right">{{ option }}</option>
            </select>
        </div>
    </div>
</template>