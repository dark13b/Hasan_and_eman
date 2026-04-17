import React from "react";

export default function AvailabilityDot() {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: 10,
        height: 10,
        borderRadius: "999px",
        background: "var(--primary)"
      }}
    />
  );
}
