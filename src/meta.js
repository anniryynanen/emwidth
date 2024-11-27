import {getVersion} from "@tauri-apps/api/app";
import * as path from "@tauri-apps/api/path";
import {exists, readTextFile, writeTextFile} from "@tauri-apps/plugin-fs";

const META_FILENAME = "_meta.json";

export async function loadMeta(saveFolder) {
    let meta = new Meta();
    meta.path = await path.join(saveFolder, META_FILENAME);
    meta.version = await getVersion();

    if (await exists(meta.path)) {
        const json = JSON.parse(await readTextFile(meta.path));

        if (json.version != meta.version)
            throw new Error("Unsupported version: " + json.version);

        meta.version = json.version;
        meta.nextPageId = json.nextPageId;
    }
    else {
        await meta.save();
    }
    return meta;
}

class Meta {
    constructor() {
        // Don't save path in the file
        Object.defineProperty(this, "path", {enumerable: false, writable: true});

        this.version = undefined;
        this.nextPageId = 0;
    }

    async save() {
        await writeTextFile(this.path, JSON.stringify(this, null, "    "));
    }
}
