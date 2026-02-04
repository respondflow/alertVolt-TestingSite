import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-volt-500 to-volt-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <span className="text-xl font-bold text-gray-900">AlertVolt</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-volt-600 transition-colors">
              About
            </Link>
            <Link href="/privacy" className="text-gray-700 hover:text-volt-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-700 hover:text-volt-600 transition-colors">
              Terms
            </Link>
            <Link 
              href="/signup" 
              className="bg-volt-600 text-white px-4 py-2 rounded-lg hover:bg-volt-700 transition-colors font-medium"
            >
              Sign Up
            </Link>
          </div>

          <div className="md:hidden">
            <Link 
              href="/signup" 
              className="bg-volt-600 text-white px-4 py-2 rounded-lg hover:bg-volt-700 transition-colors font-medium text-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
