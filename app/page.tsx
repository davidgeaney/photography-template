import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FeaturedProject from "@/components/featured-project"
import PortfolioSection from "@/components/portfolio-section"
import AwardsSection from "@/components/awards-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import ParallaxEffect from "@/components/parallax-effect"
// Update the import for Navigation
import Navigation from "@/components/navigation"

// Replace the existing navigation with the new component
export default function Home() {
  return (
    <main className="relative bg-zinc-950 text-zinc-200 min-h-screen overflow-hidden">
      <CustomCursor />
      <ParallaxEffect />
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Featured Project */}
      <FeaturedProject />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Awards Section */}
      <AwardsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}

