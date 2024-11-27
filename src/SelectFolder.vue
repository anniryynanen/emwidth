<script>
import {open} from "@tauri-apps/plugin-dialog";

export default {
    data() {
        return {
            title: "Select save folder"
        };
    },
    methods: {
        async selectFolder() {
            const path = await open({title: this.title, directory: true, recursive: true,
                multiple: false});

            if (path)
                this.$emit("selectFolder", path);
        },
    }
}
</script>

<template>
  <div id="selectFolder">
    <button @click="selectFolder">{{title}}</button>
  </div>
</template>
