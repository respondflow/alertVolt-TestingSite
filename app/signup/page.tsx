'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    smsConsent: false,
    termsConsent: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for signing up! This is a demo - no data has been sent.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="bg-gray-50 min-h-full py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign Up for AlertVolt</h1>
          <p className="text-gray-600 mb-8">
            Start receiving critical alerts for your applications
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volt-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volt-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number (for SMS alerts) <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volt-500 focus:border-transparent"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company / Team Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-volt-500 focus:border-transparent"
                placeholder="Acme Inc."
              />
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4">
              <fieldset>
                <legend className="text-sm font-medium text-gray-900 mb-3">Consent & Agreements</legend>
                
                <div className="space-y-4">
                  {/* SMS Consent */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="smsConsent"
                        name="smsConsent"
                        required
                        checked={formData.smsConsent}
                        onChange={handleChange}
                        className="w-4 h-4 text-volt-600 border-gray-300 rounded focus:ring-volt-500"
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="smsConsent" className="text-sm text-gray-700">
                        <span className="font-medium">I agree to receive SMS alerts from AlertVolt.</span> By checking this box, I consent to receive automated text messages from AlertVolt at the phone number provided. Message frequency varies based on alert activity. Message and data rates may apply. Reply STOP to opt out at any time. Reply HELP for help. Consent is not required to use our services. <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>

                  {/* Terms and Privacy Consent */}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        id="termsConsent"
                        name="termsConsent"
                        required
                        checked={formData.termsConsent}
                        onChange={handleChange}
                        className="w-4 h-4 text-volt-600 border-gray-300 rounded focus:ring-volt-500"
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="termsConsent" className="text-sm text-gray-700">
                        I agree to the{' '}
                        <Link href="/terms" className="text-volt-600 hover:text-volt-700 underline font-medium">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-volt-600 hover:text-volt-700 underline font-medium">
                          Privacy Policy
                        </Link>
                        . <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-volt-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-volt-700 transition-colors"
              >
                Create Account
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-500 mt-6 text-center">
            Already have an account?{' '}
            <a href="#" className="text-volt-600 hover:text-volt-700 font-medium">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
