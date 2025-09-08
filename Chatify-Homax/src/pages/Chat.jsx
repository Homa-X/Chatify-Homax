import { useEffect, useRef, useState } from "react";
import { getUser } from "../lib/auth";

export default function Chat() {
  const user = getUser();
  const [messages, setMessages] = useState(() =>
    JSON.parse(localStorage.getItem("hkh_messages") || "[]")
  );
  const [text, setText] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function send(e) {
    e.preventDefault();
    if (!text.trim()) return;
    const msg = { id: Date.now(), author: user.name, text: text.trim(), at: new Date().toISOString() };
    const next = [...messages, msg];
    setMessages(next);
    localStorage.setItem("hkh_messages", JSON.stringify(next));
    setText("");
  }

  return (
    <section className="card tall">
      <h1>Chat</h1>
      <div className="chatBox">
        {messages.map(m => (
          <div key={m.id} className="bubble">
            <div className="meta">{m.author}</div>
            <div>{m.text}</div>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <form onSubmit={send} className="row">
        <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Type a message…" />
        <button className="btn primary">Send</button>
      </form>
    </section>
  );
}
