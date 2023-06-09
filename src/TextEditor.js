import { useCallback } from 'react'
import Quill from 'quill'
import "quill/dist/quill.snow.css"

export default function TextEditor() {
    
    const wrapperRef = useCallback((wrapper) => {
        if(wrapper == null) return
        const editor = document.createElement("div")
        wrapper.append(editor)
        new Quill(editor, { theme: "snow" })

        return () => {
            wrapperRef.innerHTML = ""
        }

    }, [])
    return <div className="container" ref={wrapperRef}></div>

}

