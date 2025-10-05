import UniversalTag from "@/components/tags/UniversalTag.vue";
import { shallowReactive } from "vue";

export let tags = shallowReactive([
    {
        name: 'Div',
        component: UniversalTag,
        tagName: 'div'
    },
    {
        name: 'Span',
        component: UniversalTag,
        tagName: 'span'
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