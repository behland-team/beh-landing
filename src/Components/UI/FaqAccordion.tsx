"use client";
import { useId, useState } from "react";

type Item = { id?: string; title: string; content: string | React.ReactNode };

type Props = {
  items: Item[]|any;
  type?: "single" | "multiple";      // default: "single"
  defaultOpen?: number[];            // indexes to open by default
  className?: string;
};

export default function FaqAccordion({
  items,
  type = "single",
  defaultOpen = [0],
  className = "",
}: Props) {
  const [open, setOpen] = useState<number[]>(
    type === "multiple" ? defaultOpen : defaultOpen.slice(0, 1)
  );

  const toggle = (idx: number) => {
    setOpen((prev) => {
      const isOpen = prev.includes(idx);
      if (type === "multiple") {
        return isOpen ? prev.filter((i) => i !== idx) : [...prev, idx];
      }
      return isOpen ? [] : [idx];
    });
  };

  return (
    <div className={`w-full  rounded-2xl   ${className}`}>
      {items.map((item:any, idx:any) => {
        const expanded = open.includes(idx);
        const panelId = useId();
        const buttonId = useId();
        return (
          <div key={item.id ?? idx} className="p-4 border-b border-dashed  border-[#CC6D1461]">
            <button
              id={buttonId}
              aria-controls={panelId}
              aria-expanded={expanded}
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between gap-4 text-right"
            >
              <span className="font-semibold text-gray-900">{item.title}</span>

              {/* caret icon */}
              <svg
                className={`h-5 w-5 shrink-0 transition-transform text-text-orange ${expanded ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.21l3.71-3.98a.75.75 0 111.08 1.04l-4.24 4.55a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
              </svg>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pt-3 text-cream-medium leading-relaxed text-xs md:text-sm font-semibold">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
