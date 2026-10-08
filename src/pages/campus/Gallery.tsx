import { Camera } from "lucide-react";

import Breadcrumb from "../../components/common/Breadcrumb";
import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import GalleryGrid from "../../components/campus/GalleryGrid";

const galleryImages = [
  {
    src: "/images/gallery/campus-main.jpg",
    alt: "College campus",
    title: "Main Campus",
    category: "Campus",
  },
  {
    src: "/images/gallery/college-building.jpg",
    alt: "College building",
    title: "College Building",
    category: "Campus",
  },
  {
    src: "/images/gallery/college-auditorium.jpg",
    alt: "College auditorium",
    title: "Main Auditorium",
    category: "Infrastructure",
  },
  {
    src: "/images/gallery/college-library.jpg",
    alt: "College library",
    title: "Central Library",
    category: "Facilities",
  },
  {
    src: "/images/gallery/computer-lab.jpg",
    alt: "Engineering laboratory",
    title: "Engineering Laboratory",
    category: "Academics",
  },
  {
    src: "/images/gallery/tech-fest.jpg",
    alt: "Technical event",
    title: "Technical Event",
    category: "Events",
  },
  {
    src: "/images/gallery/sports-day.jpg",
    alt: "Students participating in sports",
    title: "Sports Activities",
    category: "Student Life",
  },
  {
    src: "/images/gallery/annual-function.jpg",
    alt: "Annual college function",
    title: "Annual Function",
    category: "Events",
  },
  {
    src: "/images/gallery/college-night.jpg",
    alt: "Students on campus",
    title: "Campus Life",
    category: "Student Life",
  },
  {
    src: "/images/gallery/placement.jpg",
    alt: "Campus placement event",
    title: "Placement Drive",
    category: "Placements",
  },
  {
    src: "/images/gallery/tech-fest.jpg",
    alt: "Student workshop",
    title: "Technical Workshop",
    category: "Academics",
  },
  {
    src: "/images/gallery/research.jpg",
    alt: "Research event",
    title: "Research Conference",
    category: "Research",
  },
];

export default function Gallery() {
  return (
    <>
      {/* ================= Hero ================= */}
      <section className="bg-primary-dark py-16 text-white sm:py-20">
        <Container>
          <Breadcrumb
            items={[
              { label: "Campus", href: "/facilities" },
              { label: "Gallery" },
            ]}
          />

          <div className="mt-8 max-w-3xl">
            <p className="eyebrow">Campus Gallery</p>

            <h1 className="mt-3 text-4xl text-white sm:text-5xl">
              Moments From Our Campus
            </h1>

            <p className="mt-5 text-lg leading-8 text-white/70">
              Explore campus life, academic activities, events, facilities and
              memorable moments from our college community.
            </p>
          </div>
        </Container>
      </section>

      {/* ================= Gallery ================= */}
      <section className="section-padding">
        <Container>
          <SectionHeading
            eyebrow="Life at Our College"
            title="Photo Gallery"
            description="Take a visual tour of our campus, facilities, events and student activities."
            centered
          />

          <div className="mt-12">
            <GalleryGrid images={galleryImages} columns={4} />
          </div>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-light py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-secondary">
              <Camera size={27} />
            </div>

            <h2 className="heading-section mt-5">Experience Campus Life</h2>

            <p className="text-lead mt-4">
              Discover our academic environment, student activities and
              opportunities beyond the classroom.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}