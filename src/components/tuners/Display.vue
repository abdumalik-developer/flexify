<script setup>

    let display = defineModel();

    const options = [
        "block",
        "inline",
        "inline-block",
        "flow-root",
        "flex",
        "inline-flex",
        "grid",
        "inline-grid",
        "contents",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "list-item",
        "hidden",
        "sr-only",
        "not-sr-only"
    ];
    
</script>
<template>
    <div class="flex justify-between">
        <span>Display</span>
        <select class="outline-0" v-model="display">
            <option v-for="option in options" :value="option" class="bg-gray-600">{{ option }}</option>
        </select>
    </div>
</template>