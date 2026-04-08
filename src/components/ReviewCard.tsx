type ReviewCardProps = {
  text: string;
  name: string;
  date: string;
};

export function ReviewCard({ text, name, date }: ReviewCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-lg shadow-slate-900/10 transition duration-300 hover:-translate-y-1">
      {/* TEXTO */}
      <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
        “{text}”
      </p>

      {/* FOOTER */}
      <div className="mt-6 border-t border-slate-200 pt-4 text-sm text-slate-500">
        <p className="font-semibold text-slate-800">{name}</p>
        <p>{date}</p>
      </div>
    </article>
  );
}
