import AdmissionHero from "../../components/admissions/AdmissionHero";
import AdmissionSteps from "../../components/admissions/AdmissionSteps";
import Eligibility from "../../components/admissions/Eligibility";
import ImportantDates from "../../components/admissions/ImportantDates";

export default function Admissions() {
  return (
    <>
      <AdmissionHero />
      <AdmissionSteps />
      <Eligibility />
      <ImportantDates />
    </>
  );
}