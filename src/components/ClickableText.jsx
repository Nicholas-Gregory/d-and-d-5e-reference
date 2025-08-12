import { useState } from "react";

export default function ClickableText({ text, onClick }) {
  const [hovering, setHovering] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`${hovering && 'thin-border bg-brown'}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {text}
    </span>
  )
}