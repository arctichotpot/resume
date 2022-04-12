import { saveAs } from 'file-saver';

export function createFile (content, file) {

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });

    console.log(blob)
    saveAs(blob, `resume.${file}`);
}
