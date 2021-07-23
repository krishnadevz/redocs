import Quill from 'quill'
import {useCallback} from 'react'
import "quill/dist/quill.snow.css"
export default function TextEditor() {
    const wrapperRef= useCallback((wrapper) => {
        if (wrapper == null) return 
        const editor =document.createElement("div")
        wrapper.append(editor)
       new Quill("#container",{theme:"snow"})



       return () =>{
           wrapperRef.innerHTMl=""
       }
    }, [])
       

        return <div id="container" ref={wrapperRef} ></div>
    
}
