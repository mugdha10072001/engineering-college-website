import {
  Award,
  Building2,
  GraduationCap,
  Users,
} from "lucide-react";
import Container from "../common/Container";

const statistics = [
  {
    value: "25+",
    label: "Years of Excellence",
    icon: Award,
  },
  {
    value: "5,000+",
    label: "Alumni Network",
    icon: GraduationCap,
  },
  {
    value: "100+",
    label: "Expert Faculty",
    icon: Users,
  },
  {
    value: "30+",
    label: "Modern Laboratories",
    icon: Building2,
  },
];

export default function Statistics() {
  return (
    <section className="bg-emerald-950 py-16">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex items-center gap-5 border-b border-white/10 pb-6 sm:border-b-0 sm:border-r sm:pb-0 sm:last:border-r-0 lg:justify-center"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400">
                  <Icon size={27} />
                </div>

                <div>
                  <p className="text-3xl font-bold text-white">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-sm text-emerald-100">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}