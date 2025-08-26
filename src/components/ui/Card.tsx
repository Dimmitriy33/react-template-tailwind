import React from 'react'

type CardProps = React.HTMLAttributes<HTMLDivElement>

export function Card({ className = '', ...props }: CardProps) {
	return <div className={`rounded-lg border border-neutral-200 bg-white shadow-sm ${className}`} {...props} />
}

export function CardHeader({ className = '', ...props }: CardProps) {
	return <div className={`px-4 py-3 border-b border-neutral-200 ${className}`} {...props} />
}

export function CardContent({ className = '', ...props }: CardProps) {
	return <div className={`px-4 py-3 ${className}`} {...props} />
}


