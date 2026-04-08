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
      className="relative scroll-mt-28 rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/10 sm:p-8 md:p-10"
    >
      <img
        src="/sacalapor4-images/logo-image.jpeg"
        alt="Logo Sacala x4"
        className="absolute right-5 top-5 h-12 w-12 rounded-full border border-slate-200 object-cover shadow sm:h-14 sm:w-14"
      />
      <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">{title}</h2>
      <ul className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-[#24b35e]/35 bg-[#24b35e]/10 px-5 py-2.5 text-lg font-bold text-[#176b3d] sm:text-xl"
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
