<script>
import {open, save} from "@tauri-apps/plugin-dialog";

export default {
    data() {
        return {
            saveTitle: "Select new save location",
            loadTitle: "Load existing file",
            filters: [{name: "EMWIDTH", extensions: ["emwidth"]}]
        };
    },
    methods: {
        async saveFile() {
            const path = await save({title: this.saveTitle, filters: this.filters});
            this.$emit("save", path);
        },

        async loadFile() {
            const path = await open({title: this.loadTitle, multiple: false, directory: false, filters: this.filters});
            this.$emit("load", path);
        }
    }
}
</script>

<template>
  <div id="new">
    <button @click="saveFile">{{saveTitle}}</button><br>
    <button @click="loadFile" disabled>{{loadTitle}}</button>
  </div>
</template>
