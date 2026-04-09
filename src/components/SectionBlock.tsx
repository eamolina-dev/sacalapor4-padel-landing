import { type ReactNode } from "react";
import { ImageGrid } from "./ImageGrid";

type SectionBlockProps = {
  id: string;
  title: string;
  items: readonly string[];
  images: readonly string[];
  children?: ReactNode;
};

export function SectionBlock({
  id,
  title,
  items,
  images,
  children,
}: SectionBlockProps) {
  return (
    <section
      id={id}
      className="relative scroll-mt-28 rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/10 sm:p-8 md:p-10"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
          {title}
        </h2>
        <img
          src="/sacalapor4-images/logo-image.jpeg"
          alt="Logo Sacala x4"
          className="h-11 w-11 shrink-0 rounded-full border border-slate-200 object-cover shadow sm:h-14 sm:w-14"
        />
      </div>
      <ul className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="max-w-full break-words whitespace-normal rounded-2xl border border-[#24b35e]/35 bg-[#24b35e]/10 px-4 py-2 text-sm font-semibold leading-relaxed text-[#176b3d] sm:text-base"
          >
            {item}
          </li>
        ))}
      </ul>
      {children ? (
        <div className="mt-6 text-base text-slate-700">{children}</div>
      ) : null}
      <div className="mt-7">
        <ImageGrid images={images} altPrefix={title} />
      </div>
    </section>
  );
}
