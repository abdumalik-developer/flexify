import Div from "@/components/tags/Div.vue";
import Span from "@/components/tags/Span.vue";
import { shallowReactive } from "vue";

export let tags = shallowReactive([
    {
        name: 'Div',
        component: Div
    },
    {
        name: 'Span',
        component: Span
    },
    {
        name: 'H1'
    },
    {
        name: 'H2'
    },
    {
        name: 'H3'
    },
    {
        name: 'P'
    }
]);