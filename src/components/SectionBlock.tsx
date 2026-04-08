import { type ReactNode } from "react";

type SectionBlockProps = {
  title: string;
  children: ReactNode;
};

export function SectionBlock({ title, children }: SectionBlockProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 md:text-sm">
        {title}
      </h2>
      <div className="mt-5 md:mt-6">{children}</div>
    </section>
  );
}
