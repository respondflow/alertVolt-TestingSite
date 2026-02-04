import Link from 'next/link'

interface ButtonProps {
  href?: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export default function Button({ 
  href, 
  children, 
  variant = 'primary', 
  className = '',
  type = 'button',
  onClick 
}: ButtonProps) {
  const baseStyles = 'inline-block px-6 py-3 rounded-lg font-medium transition-colors text-center'
  
  const variantStyles = {
    primary: 'bg-volt-600 text-white hover:bg-volt-700',
    secondary: 'bg-white text-volt-600 border-2 border-volt-600 hover:bg-volt-50'
  }
  
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`
  
  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    )
  }
  
  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  )
}
