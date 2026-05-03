import Image from "next/image";
import Link from "next/link";

export function ProjectCard({ title, description, tags, demoUrl, codeUrl }) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#00D4FF22] bg-[#030014]/60 backdrop-blur-sm hover:border-[#00D4FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.12)]">
      <div className="relative p-6">
        <h1 className="text-2xl font-semibold text-white mb-3">{title}</h1>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>

        {/* Tags */}
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

        {/* Links */}
        <div className="flex gap-3">
          <Link
            href={demoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 py-2 text-center text-white rounded-lg button-primary text-sm font-medium transition-all"
          >
            Live Demo
          </Link>
          <Link
            href={codeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex-1 py-2 text-center text-gray-300 rounded-lg border border-[#00D4FF44] text-sm font-medium hover:bg-[#00D4FF10] hover:text-[#00D4FF] transition-all"
          >
            Code
          </Link>
        </div>
      </div>
    </div>
  );
}
