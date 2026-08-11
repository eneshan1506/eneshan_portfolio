"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectCover({ image, title, imageAlt }) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(image) && !failed;

  return (
    <div className="relative h-44 w-full shrink-0 overflow-hidden border-b border-[#00D4FF22] bg-[#0a0618] sm:h-48">
      {showImage ? (
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-300 hover:scale-[1.03]"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.22),transparent_55%),linear-gradient(160deg,#0a0618,#120a24)]"
        />
      )}
    </div>
  );
}

export function ProjectCard({
  title,
  description,
  tags,
  demoUrl,
  liveDemoLabel,
  image,
  imageAlt,
}) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-lg border border-[#00D4FF22] bg-[#030014]/60 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#00D4FF] hover:shadow-[0_0_30px_rgba(0,212,255,0.12)]">
      <ProjectCover image={image} title={title} imageAlt={imageAlt} />

      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="mb-3 font-display text-2xl font-semibold text-white">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-300">{description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#00D4FF44] bg-[#00D4FF10] px-3 py-1 text-xs text-[#00D4FF]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex">
          <Link
            href={demoUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${title} ${liveDemoLabel}`}
            className="button-primary w-full cursor-pointer rounded-lg py-2 text-center text-sm font-medium text-white transition-all duration-200"
          >
            {liveDemoLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
