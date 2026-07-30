'use client'

import { useEffect } from 'react'
import { MessageSquare, Mail, Calendar } from 'lucide-react'

export default function Contact() {
  useEffect(() => {
    // Load GHL chat widget
    const script = document.createElement('script')
    script.src = 'https://widgets.leadconnectorhq.com/loader.js'
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js')
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-900/10 via-black to-black" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-green-400 mb-6">
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's talk about your project
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-zinc-400">
            Whether you need WordPress maintenance, AI automation, or custom development,
            we're here to help. Reach out and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Live Chat</h3>
                  <p className="text-sm text-zinc-400">Chat with us right now</p>
                </div>
              </div>
              <p className="text-sm text-zinc-500">
                Click the chat bubble in the bottom right corner to start a conversation.
                Our AI assistant can answer common questions instantly.
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-sm text-zinc-400">We reply within 2 hours</p>
                </div>
              </div>
              <a
                href="mailto:hello@ultrafast.support"
                className="text-green-400 hover:underline"
              >
                hello@ultrafast.support
              </a>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold">Book a Call</h3>
                  <p className="text-sm text-zinc-400">Free 15-min consultation</p>
                </div>
              </div>
              <p className="text-sm text-zinc-500">
                Schedule a free discovery call to discuss your needs and get a custom quote.
              </p>
            </div>
          </div>

          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            {/* GHL Form Embed */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/YOUR_FORM_ID"
              style={{ width: '100%', height: '500px', border: 'none', borderRadius: '12px' }}
              id="inline-YOUR_FORM_ID"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Contact Form"
              data-height="500"
              data-layout-iframe-id="inline-YOUR_FORM_ID"
              data-form-id="YOUR_FORM_ID"
              title="Contact Form"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
