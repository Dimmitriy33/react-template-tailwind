import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'secondary'
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
	const base = 'inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transition-colors'
	const styles =
		variant === 'primary'
			? 'bg-white text-neutral-900 border border-brand-600 hover:bg-brand-50 focus-visible:ring-brand-600'
			: 'text-brand-600 hover:text-brand-500 hover:bg-brand-50 focus-visible:ring-brand-600'
	return <button className={`${base} ${styles} ${className}`} {...props} />
}


