import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./pages/Home";

import About from "./pages/about/About";
import Management from "./pages/about/Management";

import Departments from "./pages/academics/Departments";
import Programs from "./pages/academics/Programs";
import Faculty from "./pages/academics/Faculty";

import Admissions from "./pages/admissions/Admissions";

import Facilities from "./pages/campus/Facilities";
import Laboratories from "./pages/campus/Laboratories";
import Gallery from "./pages/campus/Gallery";

import Placements from "./pages/career/Placements";

import Research from "./pages/research/Research";

import StudentActivities from "./pages/student/StudentActivities";
import Achievements from "./pages/student/Achievements";

import News from "./pages/media/News";
import Events from "./pages/media/Events";
import Notices from "./pages/media/Notices";

import Downloads from "./pages/Downloads";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="flex min-h-screen flex-col bg-white text-gray-900">
        <Header />

        <main className="flex-1">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* About */}
            <Route path="/about" element={<About />} />
            <Route path="/management" element={<Management />} />

            {/* Academics */}
            <Route path="/departments" element={<Departments />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/faculty" element={<Faculty />} />

            {/* Admissions */}
            <Route path="/admissions" element={<Admissions />} />

            {/* Campus */}
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/laboratories" element={<Laboratories />} />
            <Route path="/gallery" element={<Gallery />} />

            {/* Career */}
            <Route path="/placements" element={<Placements />} />

            {/* Research */}
            <Route path="/research" element={<Research />} />

            {/* Student Life */}
            <Route
              path="/student-activities"
              element={<StudentActivities />}
            />
            <Route path="/achievements" element={<Achievements />} />

            {/* Media */}
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Events />} />
            <Route path="/notices" element={<Notices />} />

            {/* Other */}
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/contact" element={<Contact />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;