import { type ReactNode } from "react";
import { ImageGrid } from "./ImageGrid";

type SectionBlockProps = {
  id: string;
  title: string;
  items: readonly string[];
  images: readonly string[];
  children?: ReactNode;
};

export function SectionBlock({ id, title, items, images, children }: SectionBlockProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/10 sm:p-8 md:p-10"
    >
      <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">{title}</h2>
      <ul className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-[#24b35e]/35 bg-[#24b35e]/10 px-4 py-2 text-sm font-semibold text-[#176b3d]"
          >
            {item}
          </li>
        ))}
      </ul>
      {children ? <div className="mt-6 text-base text-slate-700">{children}</div> : null}
      <div className="mt-7">
        <ImageGrid images={images} altPrefix={title} />
      </div>
    </section>
  );
}
