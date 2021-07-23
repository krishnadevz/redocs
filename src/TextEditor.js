import Quill from "quill";
import { useCallback } from "react";
import "quill/dist/quill.snow.css";
import './index.css';

export default function TextEditor() {
  const wrapperRef = useCallback(wrapper => {
    if (wrapper == null) return

    wrapperRef.innerHTMl = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    new Quill(editor, { theme: "snow" });
  }, []);

  return <div className="container" ref={wrapperRef}></div>;
}
