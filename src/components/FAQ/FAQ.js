'use client';

import React, { useState } from "react";
import '@/components/FAQ/FAQ.css';

export default function FAQ({ title, description }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq group">
      <div className={`title text-xl ${open ? "text-green-500" : ""}`}>
        {title}
      </div>
      <div className={`description mt-2 ${open ? "flex" : "hidden"}`}>
        {description}
      </div>
      <button
        onClick={(e) => setOpen(!open)}
        className={open ? "rotate-180" : ""}
      >
        ^
      </button>
    </div>
  );
}