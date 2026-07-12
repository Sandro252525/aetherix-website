"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function AccordionItem({
  question,
  answer,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:border-blue-200">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-7"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-bold text-slate-950">
          {question}
        </span>

        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition duration-300 ${
            isOpen ? "rotate-180 bg-blue-600 text-white" : ""
          }`}
        >
          <ChevronDown size={20} />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-slate-100 px-6 py-5 leading-7 text-slate-600 sm:px-7">
            {answer}
          </p>
        </div>
      </div>
    </article>
  );
}