<script>
import Page from "./Page.vue";
import SelectFolder from "./SelectFolder.vue";

export default {
    components: {
        Page,
        SelectFolder
    },
    data() {
        return {
            saveFolder: undefined
        };
    },
    methods: {
        selectFolder(path) {
            this.saveFolder = path;
        }
    }
}
</script>

<template>
  <SelectFolder v-if="!saveFolder" @selectFolder="selectFolder"/>
  <Page v-else/>
</template>
