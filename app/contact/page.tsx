import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import ContactMap from "@/components/contact/contact-map"
import ContactFAQ from "@/components/contact/contact-faq"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import ParallaxEffect from "@/components/parallax-effect"
import Navigation from "@/components/navigation"

export default function ContactPage() {
  return (
    <main className="relative bg-zinc-950 text-zinc-200 min-h-screen overflow-hidden">
      <CustomCursor />
      <ParallaxEffect />
      <Navigation />

      {/* Contact Hero Section */}
      <ContactHero />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <ContactForm />

        <div className="space-y-12">
          {/* Contact Info */}
          <ContactInfo />

          {/* Contact Map */}
          <ContactMap />
        </div>
      </div>

      {/* Contact FAQ */}
      <ContactFAQ />

      {/* Footer */}
      <Footer />
    </main>
  )
}

