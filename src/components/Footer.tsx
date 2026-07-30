import { Zap, Globe, Mail, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-cyan-400 flex items-center justify-center">
                <Zap className="w-5 h-5 text-black" />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                UltraFast<span className="text-green-400">.support</span>
              </span>
            </a>
            <p className="text-zinc-400 text-sm max-w-sm mb-6">
              Professional WordPress care and AI-powered services.
              Keep your site fast, secure, and always up-to-date.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#wordpress" className="hover:text-white transition-colors">WordPress Care</a></li>
              <li><a href="#ai-services" className="hover:text-white transition-colors">AI Automation</a></li>
              <li><a href="#ai-services" className="hover:text-white transition-colors">Vibe Coding</a></li>
              <li><a href="#ai-services" className="hover:text-white transition-colors">VPS Management</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} UltraFast Support. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500">
            Built with AI, powered by humans.
          </p>
        </div>
      </div>
    </footer>
  )
}
