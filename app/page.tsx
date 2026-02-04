import Button from '@/components/Button'
import FeatureCard from '@/components/FeatureCard'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get Alerted the Moment <span className="text-volt-600">Bugs Happen</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AlertVolt is a developer-first alerting system that delivers critical incident notifications via SMS, email, and webhooks. Never miss a bug again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/signup" variant="primary">
              Sign Up Now
            </Button>
            <Button href="/about" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Example Alert UI */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Real-Time Alerts, Delivered Instantly
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-volt-600">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-volt-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">AlertVolt</h3>
                    <span className="text-sm text-gray-500">Just now</span>
                  </div>
                  <p className="text-gray-700 mb-2">
                    <strong>🚨 Critical Error Detected</strong>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Production API error rate exceeded 5% threshold. Service: payment-processor. Error: Database connection timeout.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <div className="px-4 py-2 bg-volt-600 text-white text-sm rounded">
                      Acknowledge
                    </div>
                    <div className="px-4 py-2 bg-gray-200 text-gray-700 text-sm rounded">
                      View Details
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
              Example alert delivered via SMS, email, and webhook
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for Developers, On-Call Teams, and SaaS Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to stay on top of critical incidents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="📲"
            title="SMS-First Alerting"
            description="Get critical alerts delivered directly to your phone via SMS. High-priority notifications that cut through the noise."
          />
          <FeatureCard
            icon="🔔"
            title="Multi-Channel Support"
            description="SMS, email, webhooks, Slack, PagerDuty, and more. Route alerts to the right channel at the right time."
          />
          <FeatureCard
            icon="⚡"
            title="Lightning Fast"
            description="Sub-second alert delivery. When bugs happen, every second counts. AlertVolt gets you notified instantly."
          />
          <FeatureCard
            icon="🎯"
            title="Smart Escalation"
            description="Automatic escalation policies ensure critical alerts reach the right person, even if the first responder is unavailable."
          />
          <FeatureCard
            icon="✅"
            title="Acknowledgements"
            description="Track who's responding to incidents. Acknowledge alerts to let your team know you're on it."
          />
          <FeatureCard
            icon="📊"
            title="Audit Logs"
            description="Complete audit trail of all alerts, acknowledgements, and escalations. Perfect for post-mortems and compliance."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-volt-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Never Miss a Critical Bug?
          </h2>
          <p className="text-xl text-volt-100 mb-8 max-w-2xl mx-auto">
            Join developers and on-call teams who trust AlertVolt for mission-critical alerting.
          </p>
          <Button href="/signup" variant="secondary">
            Get Started Free
          </Button>
        </div>
      </section>
    </div>
  )
}
