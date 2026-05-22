import { SkillDataProvider } from "@/app/components/SkillDataProvider";
import { QualityStrip } from "@/app/components/QualityStrip";
import { SkillText } from "@/app/components/SkillText";

import { SKILL_DATA } from "@/constants";

export function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 scroll-mt-24"
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

      <div className="relative z-10">
        <SkillText />
      </div>

      <div className="relative z-10 flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
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
    </section>
  );
}
