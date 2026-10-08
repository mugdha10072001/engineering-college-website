import {
  ArrowLeft,
  Home,
  SearchX,
} from "lucide-react";

import { Link } from "react-router-dom";

import Container from "../components/common/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-50 text-emerald-800">
            <SearchX size={40} />
          </div>

          <p className="mt-8 text-7xl font-black tracking-tight text-emerald-900 sm:text-8xl">
            404
          </p>

          <h1 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Page Not Found
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
            Sorry, the page you are looking for doesn't exist or may have
            been moved. Please return to the homepage or explore another
            section of our website.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-900 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
            >
              <Home size={18} />
              Go to Homepage
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}