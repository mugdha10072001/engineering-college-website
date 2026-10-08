import Hero from "../components/home/Hero";
import QuickLinks from "../components/home/QuickLinks";
import AboutPreview from "../components/home/AboutPreview";
import Statistics from "../components/home/Statistics";
import ProgramsPreview from "../components/home/ProgramsPreview";
import PrincipalMessage from "../components/home/PrincipalMessage";
import FacilitiesPreview from "../components/home/FacilitiesPreview";
import PlacementHighlights from "../components/home/PlacementHighlights";
import NewsSection from "../components/home/NewsSection";
import EventsSection from "../components/home/EventsSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <AboutPreview />
      <Statistics />
      <ProgramsPreview />
      <PrincipalMessage />
      <FacilitiesPreview />
      <PlacementHighlights />
      <NewsSection />
      <EventsSection />
      <CTASection />
    </>
  );
}