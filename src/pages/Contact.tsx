import { useState } from "react";
import type { FormEvent } from "react";

import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";

import Breadcrumb from "../components/common/Breadcrumb";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* =========================
          HERO
      ========================== */}
      <section className="bg-emerald-950 py-16 text-white sm:py-20">
        <Container>
          <Breadcrumb
            items={[
              {
                label: "Contact",
              },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Get in Touch
            </p>

            <h1 className="mt-3 text-amber-50 text-4xl font-bold sm:text-5xl">
              Contact Our College
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Have a question about admissions, academics, placements or campus
              facilities? Our team is here to help.
            </p>
          </div>
        </Container>
      </section>

      {/* =========================
          CONTACT INFORMATION
      ========================== */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Contact Details */}
            <div>
              <SectionHeading
                eyebrow="Contact Information"
                title="We'd Love to Hear From You"
                description="Reach out to the appropriate team for information and assistance."
              />

              <div className="mt-8 space-y-4">
                {/* Address */}
                <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                    <MapPin size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">Campus Address</h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      ABC Engineering College
                      <br />
                      Nagpur, Maharashtra
                      <br />
                      India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                    <Phone size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">Phone</h3>

                    <a
                      href="tel:+919999999999"
                      className="mt-1 block text-sm text-slate-600 transition hover:text-emerald-800"
                    >
                      +91 99999 99999
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                    <Mail size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">Email</h3>

                    <a
                      href="mailto:info@examplecollege.edu"
                      className="mt-1 block text-sm text-slate-600 transition hover:text-emerald-800"
                    >
                      info@examplecollege.edu
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800">
                    <Clock3 size={23} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">Office Hours</h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Monday – Friday: 9:00 AM – 5:00 PM
                      <br />
                      Saturday: 9:00 AM – 1:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================
                CONTACT FORM
            ========================== */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
              <div className="mb-7">
                <h2 className="text-2xl font-bold text-slate-900">
                  Send Us a Message
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Fill out the form and our team will get back to you.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                  <h3 className="font-bold text-emerald-900">
                    Message Submitted
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-emerald-800">
                    Thank you for contacting us. Our team will get back to you
                    shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-sm font-semibold text-emerald-900 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Full Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold text-slate-800"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-800"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-slate-800"
                    >
                      Subject
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>

                      <option value="admissions">Admissions</option>

                      <option value="academics">Academics</option>

                      <option value="placements">Placements</option>

                      <option value="facilities">Facilities</option>

                      <option value="general">General Enquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-slate-800"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="How can we help you?"
                      className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-900 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-emerald-800"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================
     
{/* ==========================
    MAP SECTION
========================== */}
      <section className="bg-slate-50 py-16">
        <Container>
          <SectionHeading
            eyebrow="Find Us"
            title="Visit Our Campus"
            description="Our campus is located in Nagpur, Maharashtra."
            centered
          />

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
            <iframe
              title="ABC Engineering College location in Nagpur"
              src="https://maps.google.com/maps?q=Nagpur%2C%20Maharashtra%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Map showing Nagpur, Maharashtra, India"
            />

            <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  ABC Engineering College
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Nagpur, Maharashtra, India
                </p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Nagpur%2C%20Maharashtra%2C%20India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
              >
                Get Directions ↗
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
