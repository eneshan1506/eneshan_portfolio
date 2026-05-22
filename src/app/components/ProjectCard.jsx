import Link from "next/link";

export function ProjectCard({
  title,
  description,
  tags,
  demoUrl,
  liveDemoLabel,
}) {
  return (
    <article className="relative overflow-hidden rounded-lg shadow-lg border border-[#00D4FF22] bg-[#030014]/60 backdrop-blur-sm hover:border-[#00D4FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.12)]">
      <div className="relative p-6">
        <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full border border-[#00D4FF44] text-[#00D4FF] bg-[#00D4FF10]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex">
          <Link
            href={demoUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${title} ${liveDemoLabel}`}
            className="w-full py-2 text-center text-white rounded-lg button-primary text-sm font-medium transition-all"
          >
            {liveDemoLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
