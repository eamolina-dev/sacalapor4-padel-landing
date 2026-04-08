type ReviewCardProps = {
  text: string;
};

export function ReviewCard({ text }: ReviewCardProps) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-900/10 transition duration-300 hover:-translate-y-1">
      <p className="text-base leading-relaxed text-slate-700">“{text}”</p>
    </article>
  );
}
