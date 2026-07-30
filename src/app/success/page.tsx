import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function SuccessPage() {
  return (
    <main className="flex-1 flex items-center justify-center min-h-screen">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Welcome aboard!</h1>
        <p className="text-zinc-400 mb-8">
          Your subscription is active. We'll reach out within 24 hours to
          onboard your sites and get everything set up.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
        >
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  )
}
