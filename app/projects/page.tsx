import ProjectsHero from "@/components/projects/projects-hero"
import ProjectsGallery from "@/components/projects/projects-gallery"
import ProjectsCategories from "@/components/projects/projects-categories"
import ProjectsShowcase from "@/components/projects/projects-showcase"
import ProjectsCTA from "@/components/projects/projects-cta"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import ParallaxEffect from "@/components/parallax-effect"
import Navigation from "@/components/navigation"

export default function ProjectsPage() {
  return (
    <main className="relative bg-zinc-950 text-zinc-200 min-h-screen overflow-hidden">
      <CustomCursor />
      <ParallaxEffect />
      <Navigation />

      {/* Projects Hero Section */}
      <ProjectsHero />

      {/* Projects Categories */}
      <ProjectsCategories />

      {/* Projects Gallery */}
      <ProjectsGallery />

      {/* Projects Showcase */}
      <ProjectsShowcase />

      {/* Projects CTA */}
      <ProjectsCTA />

      {/* Footer */}
      <Footer />
    </main>
  )
}

