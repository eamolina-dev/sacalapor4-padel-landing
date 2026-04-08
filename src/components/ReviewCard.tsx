type ReviewCardProps = {
  text: string;
};

export function ReviewCard({ text }: ReviewCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-sm leading-relaxed text-slate-700 md:text-base">“{text}”</p>
    </article>
  );
}
