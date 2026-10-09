
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "../components/common/MainLayout";

import Home from "../pages/Home";
import About from "../pages/about/About";
import Management from "../pages/about/Management";
import Departments from "../pages/academics/Departments";
import Programs from "../pages/academics/Programs";
import Faculty from "../pages/academics/Faculty";
import Admissions from "../pages/admissions/Admissions";
import Placements from "../pages/career/Placements";
import Facilities from "../pages/campus/Facilities";
import Laboratories from "../pages/campus/Laboratories";
import Research from "../pages/research/Research";
import StudentActivities from "../pages/student/StudentActivities";
import Notices from "../pages/media/Notices";
import Events from "../pages/media/Events";
import News from "../pages/media/News";
import Gallery from "../pages/campus/Gallery";
import Achievements from "../pages/student/Achievements";
import Downloads from "../pages/Downloads";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="management" element={<Management />} />

          <Route path="departments" element={<Departments />} />
          <Route path="programs" element={<Programs />} />
          <Route path="faculty" element={<Faculty />} />

          <Route path="admissions" element={<Admissions />} />
          <Route path="placements" element={<Placements />} />

          <Route path="facilities" element={<Facilities />} />
          <Route path="laboratories" element={<Laboratories />} />
          <Route path="research" element={<Research />} />
          <Route
            path="student-activities"
            element={<StudentActivities />}
          />

          <Route path="notices" element={<Notices />} />
          <Route path="events" element={<Events />} />
          <Route path="news" element={<News />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}