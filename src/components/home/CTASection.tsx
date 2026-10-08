import {
  ArrowRight,
  Download,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-amber-500 py-16 lg:py-20">
      {/* Decorative circles */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-[50px] border-emerald-950/10" />

      <Container>
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-950/70">
              Start Your Journey
            </span>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-emerald-950 sm:text-4xl lg:text-5xl">
              Ready to Build Your Future?
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-emerald-950/75">
              Explore our programs, learn about admissions and
              take the first step toward an exciting engineering
              career.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-950 px-6 py-3.5 font-bold text-white transition hover:bg-emerald-900"
            >
              Apply Now
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/downloads"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-emerald-950/20 bg-white/20 px-6 py-3.5 font-bold text-emerald-950 transition hover:bg-white"
            >
              <Download size={18} />
              Download Brochure
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-emerald-950/20 bg-transparent px-6 py-3.5 font-bold text-emerald-950 transition hover:bg-emerald-950 hover:text-white"
            >
              <Phone size={18} />
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}