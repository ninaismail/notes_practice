import { createPortal } from "react-dom";
import { useRef } from "react";
export default function Modal({ children }) {
  const modal = useRef(document.getElementById("portal"))

  return modal ? createPortal(<>{children}</>, document.getElementById("portal")) : null;
}