export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About AlertVolt</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-700 mb-4">
              AlertVolt is a developer alerting system designed to deliver critical incident notifications when they matter most. We leverage SMS and other communication channels to ensure you never miss a bug, outage, or system failure.
            </p>
            <p className="text-gray-700 mb-4">
              Built by developers, for developers, AlertVolt understands that when production breaks, you need to know immediately—not when you happen to check your email or Slack.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who It's For</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Software Engineers:</strong> Get alerted when your code encounters errors in production</li>
              <li><strong>On-Call Teams:</strong> Reliable alerting for incident response and escalation</li>
              <li><strong>SaaS Companies:</strong> Monitor critical services and maintain uptime SLAs</li>
              <li><strong>DevOps Teams:</strong> Infrastructure monitoring and automated incident response</li>
              <li><strong>Product Teams:</strong> Stay informed about user-impacting issues in real-time</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              We believe that critical alerts should be delivered through the most reliable channel available: SMS. While email can be ignored and chat notifications can be missed, a text message gets through.
            </p>
            <p className="text-gray-700 mb-4">
              AlertVolt combines the reliability of SMS with the flexibility of modern alerting systems, giving you multi-channel notifications, smart escalation, and complete audit trails—all in one platform.
            </p>
          </section>

          <section className="mb-12 bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Business Address</h3>
                <p className="text-gray-700">
                  AlertVolt, Inc.<br />
                  12 N Cheyenne Ave<br />
                  Tulsa, OK 74103<br />
                  United States
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
                <p className="text-gray-700">
                  Email: <a href="mailto:support@alertvolt.com" className="text-volt-600 hover:text-volt-700">support@alertvolt.com</a>
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              This address is provided in compliance with SMS messaging regulations and consumer protection requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why AlertVolt?</h2>
            <p className="text-gray-700 mb-4">
              Traditional monitoring tools send alerts to email or chat platforms where they can easily be missed. AlertVolt ensures your most critical alerts reach you via SMS, while still supporting email, webhooks, and integrations with tools like Slack and PagerDuty.
            </p>
            <p className="text-gray-700">
              With features like smart escalation, acknowledgements, and comprehensive audit logs, AlertVolt gives you everything you need to respond to incidents quickly and effectively.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
