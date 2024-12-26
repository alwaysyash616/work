import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "/home/alwaysyash/Documents/work/Sigma-Web-Development/video 93"

let files = await fs.readdir(basepath)
// console.log(files)
for (const item of files) {
    console.log("Running for", item)
    let ext = item.split(".")[item.split(".").length - 1]
    // console.log(ext)
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the file to this diretory
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            await fs.mkdir(path.join(basepath, ext))
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}