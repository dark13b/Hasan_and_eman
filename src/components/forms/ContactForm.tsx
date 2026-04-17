import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    try {
      setTimeout(() => setStatus("success"), 800);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input className="w-full border border-border p-3" placeholder="Name" />
      <input className="w-full border border-border p-3" placeholder="Email" />
      <textarea className="w-full border border-border p-3" placeholder="Project brief" rows={6} />
      <button className="border border-border px-4 py-3" type="submit">
        {status === "submitting" ? "Sending..." : "Submit"}
      </button>
      {status === "success" && <p>Submitted successfully.</p>}
      {status === "error" && <p>Something went wrong.</p>}
    </form>
  );
}
