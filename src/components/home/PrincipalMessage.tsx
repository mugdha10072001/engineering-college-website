import { Quote } from "lucide-react";
import Container from "../common/Container";

export default function PrincipalMessage() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid overflow-hidden rounded-3xl bg-emerald-950 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Principal Image */}
          <div className="relative min-h-[400px]">
            <img
              src="/images/faculty/principal.jpg"
              alt="Principal of ABC Engineering College"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-xl font-bold">
                Dr. Priya Sharma
              </p>

              <p className="mt-1 text-sm text-emerald-200">
                Principal
              </p>
            </div>
          </div>

          {/* Message */}
          <div className="relative flex items-center p-8 sm:p-12 lg:p-16">
            <Quote
              size={90}
              className="absolute right-8 top-8 text-white/5"
            />

            <div className="relative">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
                Principal's Message
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Education That Inspires Innovation
              </h2>

              <p className="mt-6 text-base leading-8 text-emerald-100">
                "Our vision is to create an educational environment
                where every student gets the opportunity to discover
                their potential, develop practical skills and become
                a responsible contributor to society."
              </p>

              <p className="mt-4 text-base leading-8 text-emerald-100">
                We continuously invest in modern infrastructure,
                faculty development, research and industry
                partnerships to ensure our students are ready for
                the challenges of tomorrow.
              </p>

              <div className="mt-8">
                <p className="font-semibold text-white">
                  Dr. Priya Sharma
                </p>

                <p className="mt-1 text-sm text-emerald-300">
                  Principal, ABC Engineering College
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}