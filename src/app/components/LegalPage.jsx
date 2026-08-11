import { Container } from "@/app/components/Container";

export function LegalPage({ title, children }) {
  return (
    <main className="min-h-[70vh] w-full pb-20 pt-28 sm:pt-32">
      <Container className="max-w-3xl">
        <h1 className="mb-8 font-display text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#FFB800] sm:text-4xl">
          {title}
        </h1>
        <div className="space-y-6 text-[15px] leading-7 text-gray-300 sm:text-base">
          {children}
        </div>
      </Container>
    </main>
  );
}

export function LegalSection({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-xl font-semibold text-white">{title}</h2>
      <div className="space-y-3 text-gray-300">{children}</div>
    </section>
  );
}
