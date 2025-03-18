import ServicesHero from "@/components/services/services-hero"
import ServiceCategories from "@/components/services/service-categories"
import ServiceProcess from "@/components/services/service-process"
import DetailedPricing from "@/components/services/detailed-pricing"
import ServiceTestimonials from "@/components/services/service-testimonials"
import ServiceCTA from "@/components/services/service-cta"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import ParallaxEffect from "@/components/parallax-effect"
import Navigation from "@/components/navigation"

export default function ServicesPage() {
  return (
    <main className="relative bg-zinc-950 text-zinc-200 min-h-screen overflow-hidden">
      <CustomCursor />
      <ParallaxEffect />
      <Navigation />

      {/* Services Hero Section */}
      <ServicesHero />

      {/* Service Categories */}
      <ServiceCategories />

      {/* Service Process */}
      <ServiceProcess />

      {/* Detailed Pricing */}
      <DetailedPricing />

      {/* Service Testimonials */}
      <ServiceTestimonials />

      {/* Service CTA */}
      <ServiceCTA />

      {/* Footer */}
      <Footer />
    </main>
  )
}

