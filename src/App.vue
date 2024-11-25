<script>
import Empty from "./Empty.vue";
import Page from "./Page.vue";

export default {
    components: {
        Empty,
        Page
    },
    data() {
        return {
            path: undefined
        };
    },
    methods: {
        save(path) {
            if (!path) // Dialog was cancelled
                return;

            this.path = path;
        },
        load() {
        }
    }
}
</script>

<template>
  <Empty v-if="!path" @save="save" @load="load"/>
  <Page v-else/>
</template>
