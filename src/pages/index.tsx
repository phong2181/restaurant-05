import { useState } from "react";
import Hero from "../componants/Hero";
import About from "../componants/About";
import Menu from "../componants/Menu";
import Contact from "../componants/Contact";
import Navigation from "../componants/Navigation";
import Footer from "../componants/Footer";
import Details from "../componants/Details";
import { Dish } from "../Types/Dish";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const handleViewDetails = (dish: Dish) => {
    setSelectedDish(dish);
  };

  const handleCloseModal = () => {
    setSelectedDish(null);
  };

  return (
    <div className="min-h-screen bg-cream-50">
        <Navigation 
            activeSection={activeSection}
            setActiveSection={setActiveSection}
        />
      {activeSection === "home" && (
        <Hero setActiveSection={setActiveSection} />
      )}

      <About activeSection={activeSection} setActiveSection={setActiveSection} />
      {activeSection === "menu" && (
        <Menu
          activeSection={activeSection}
          onViewDetails={handleViewDetails}
        />
      )}
      {activeSection === "contact" && (
        <Contact />
      )}
      {selectedDish && (
        <Details dish={selectedDish} onClose={handleCloseModal} />
      )}
      <Footer />
    </div>
  );
}
