import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
	const location = useLocation()

	const isActive = (path: string) => location.pathname === path

	return (
		<header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/90 backdrop-blur-md shadow-sm">
			<div className="container mx-auto h-16 flex items-center justify-between px-4">
				{/* Logo/Brand */}
				<Link to="/" className="flex items-center gap-3 group no-underline hover:no-underline">
					<div className="relative">
						<div className="size-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105" />
						<div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					</div>
					<span className="text-lg font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
						react-template-x
					</span>
				</Link>

				{/* Navigation */}
				<nav className="flex items-center gap-1">
					<Link
						to="/"
						className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 no-underline hover:no-underline ${
							isActive('/') ? 'text-blue-600' : 'text-neutral-900 hover:text-blue-600'
						}`}
					>
						<span className="relative z-10">Home</span>
					</Link>
					<Link
						to="/setup"
						className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 no-underline hover:no-underline ${
							isActive('/setup') ? 'text-blue-600' : 'text-neutral-900 hover:text-blue-600'
						}`}
					>
						<span className="relative z-10">Setup</span>
					</Link>
				</nav>

				{/* Right side - could be used for user menu, theme toggle, etc. */}
				<div className="flex items-center gap-2">
					<button className="p-2 rounded-lg text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100 transition-all duration-200">
						<svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</header>
	)
}
