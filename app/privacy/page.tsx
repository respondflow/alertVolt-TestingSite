export default function Privacy() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last Updated: February 3, 2026</p>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700">
              AlertVolt, Inc. ("AlertVolt," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our alerting service, including our website and SMS notification services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Personal Information</h3>
            <p className="text-gray-700 mb-3">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number (for SMS alert delivery)</li>
              <li>Company or team name</li>
              <li>Account credentials</li>
              <li>Payment information (processed by third-party payment processors)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Technical Information</h3>
            <p className="text-gray-700 mb-3">We automatically collect certain information when you use our services:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Usage data and analytics</li>
              <li>API usage logs and alert delivery metrics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Alert and Incident Data</h3>
            <p className="text-gray-700">
              We collect and process data related to alerts, incidents, and system events that you configure AlertVolt to monitor. This may include error messages, stack traces, system metrics, and other technical information necessary to deliver alerts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide, maintain, and improve our alerting services</li>
              <li>Deliver SMS, email, and other notifications as configured</li>
              <li>Process your transactions and manage your account</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section className="bg-volt-50 p-6 rounded-lg border border-volt-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">SMS and Phone Number Privacy</h2>
            <p className="text-gray-700 mb-3">
              <strong>Your phone number is used exclusively for delivering critical alerts and notifications.</strong> We take the privacy of your phone number and mobile data seriously and adhere to the following principles:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>No Sale to Third Parties:</strong> We do not sell, rent, lease, or share your phone number, SMS data, or any mobile information with third-party marketers, advertisers, or affiliates.</li>
              <li><strong>Service Use Only:</strong> Your phone number is used solely to deliver the alert notifications you have requested through our service.</li>
              <li><strong>Carrier Requirements:</strong> We share your phone number with SMS service providers (carriers) only as necessary to deliver messages.</li>
              <li><strong>Opt-Out Anytime:</strong> You can stop receiving SMS alerts at any time by replying STOP to any message or updating your account settings.</li>
              <li><strong>Message Frequency:</strong> SMS message frequency varies based on your alert configuration and system activity.</li>
              <li><strong>Standard Rates:</strong> Message and data rates may apply as determined by your mobile carrier.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Important:</strong> AlertVolt will never sell your mobile phone number or SMS-related data to third-party marketers or affiliates. Your mobile information is protected and used exclusively for service delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-3">We may share your information in the following circumstances:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., SMS delivery, email services, payment processing, hosting)</li>
              <li><strong>Legal Requirements:</strong> When required by law, subpoena, or other legal process</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              <li><strong>Team Members:</strong> With other members of your organization or team as configured in your account settings</li>
            </ul>
            <p className="text-gray-700 mt-3">
              We do not sell your personal information to third parties for their marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700">
              We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. Alert logs and incident data are retained according to your account settings and subscription plan. You may request deletion of your data by contacting us at support@alertvolt.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-3">
              We implement appropriate technical and organizational security measures to protect your information, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication requirements</li>
              <li>Secure data centers and infrastructure</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <p className="text-gray-700 mt-3">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights and Choices</h2>
            <p className="text-gray-700 mb-3">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Opt out of SMS alerts by replying STOP or updating your preferences</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
            </ul>
            <p className="text-gray-700 mt-3">
              To exercise these rights, please contact us at support@alertvolt.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700">
              We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings. Note that disabling cookies may affect the functionality of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700">
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-3">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded border border-gray-200">
              <p className="text-gray-700">
                <strong>AlertVolt, Inc.</strong><br />
                12 N Cheyenne Ave<br />
                Tulsa, OK 74103<br />
                United States<br />
                <br />
                Email: <a href="mailto:support@alertvolt.com" className="text-volt-600 hover:text-volt-700">support@alertvolt.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
