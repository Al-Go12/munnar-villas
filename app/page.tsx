import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import AccommodationSection from "@/components/AccommodationSection";
import DreamProjectSection from "@/components/DreamProjectSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import SightseeingSection from "@/components/SightseeingSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import BookStayCtaSection from "@/components/BookStayCtaSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#282B26]">
      <Navbar />
      <main className="flex-1">
        {/* Section 1: Cinematic Hero Section */}
        <HeroSection />

        {/* Section 2: Introducing The Resort */}
        <IntroSection />

        {/* Section 3: Stay With Us – Accommodation */}
        <AccommodationSection />

        {/* Section 4: Why Choose Munnar Villas? */}
        <WhyChooseSection />

        {/* Section 5: Experiences and Activities */}
        <ExperiencesSection />

        {/* Section 6: Explore Munnar – Sightseeing */}
        <SightseeingSection />

        {/* Section 7: Photo Gallery */}
        <GallerySection />

        {/* Section 8: Guest Testimonials */}
        <TestimonialsSection />

        {/* Our Dream Project: Swargam Medu Sandalwood Villas */}
        <DreamProjectSection />

        {/* Section 9: Location and Surroundings */}
        <LocationSection />

        {/* Section 10: Book Your Stay CTA */}
        <BookStayCtaSection />
      </main>

      {/* Section 11: Footer */}
      <Footer />

      {/* Additional Website Features: Floating WhatsApp & Mobile Sticky Bar */}
      <FloatingActions />
    </div>
  );
}
