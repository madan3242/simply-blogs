import EditorJS from "@editorjs/editorjs";
import { useEffect, useState } from "react";

export const Editor = () => {
    const [editor, setEditor] = useState();

    useEffect(() => {
        const editorjs = new EditorJS({
    
        });

    }, [])


  return (
    <div>
        <div className="" id="editor" />
    </div>
  )
}
