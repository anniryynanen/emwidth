<script>
import {message} from "@tauri-apps/plugin-dialog";

import {loadMeta} from "./meta.js";

import Page from "./Page.vue";
import SelectFolder from "./SelectFolder.vue";

export default {
    components: {
        Page,
        SelectFolder
    },
    data() {
        return {
            meta: undefined
        };
    },
    computed: {
        folderSelected() {
            return this.meta != undefined;
        }
    },
    methods: {
        async selectFolder(path) {
            try {
                this.meta = await loadMeta(path);
            }
            catch (e) {
                await message(
                    "There was a problem with the selected folder.\n\n" + (e.message || e),
                    {title: "Error!", kind: "error"});
            }
        }
    }
}
</script>

<template>
  <SelectFolder v-if="!folderSelected" @selectFolder="selectFolder"/>
  <Page v-else/>
</template>
