import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-zinc-200 rounded-md flex items-center justify-center">
                <span className="text-zinc-900 font-bold text-xl">C</span>
              </div>
              <span className="font-medium tracking-wide">CREACY</span>
            </div>

            <p className="text-sm text-zinc-400 max-w-xs">
              Capturing moments that transcend time, we transform fleeting instances into eternal visual narratives.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                  Portrait Photography
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                  Landscape Photography
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                  Commercial Photography
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                  Event Coverage
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} CREACY. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
              Instagram
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
              Behance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

