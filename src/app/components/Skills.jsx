import { SkillDataProvider } from "@/app/components/SkillDataProvider";
import { Container } from "@/app/components/Container";
import { QualityStrip } from "@/app/components/QualityStrip";
import { SkillText } from "@/app/components/SkillText";

import { SKILL_DATA } from "@/constants";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden py-20 scroll-mt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <div
          className="h-full w-full"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,212,255,0.4) 0%, rgba(255,184,0,0.2) 50%, transparent 75%)",
            animation: "encGlowPulse 7s ease-in-out infinite alternate",
          }}
        />
      </div>

      <Container className="relative z-10 flex flex-col items-center">
        <SkillText />

        <div className="mt-4 flex max-w-5xl flex-row flex-wrap items-center justify-center gap-5">
          {SKILL_DATA.map((skill, i) => (
            <SkillDataProvider
              key={skill.skill_name}
              src={skill.image}
              name={skill.skill_name}
              width={skill.width}
              height={skill.height}
              index={i}
            />
          ))}
        </div>

        <QualityStrip />
      </Container>
    </section>
  );
}
