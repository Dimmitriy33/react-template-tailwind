import React from 'react'

export function Header() {
	return (
		<header className="border-b border-neutral-200 bg-white/85 backdrop-blur">
			<div className="container h-14 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<span className="inline-block size-4 rounded-sm bg-neutral-900" aria-hidden="true" />
					<span className="text-base font-semibold tracking-tight text-neutral-900">Project Name</span>
				</div>
				<nav className="flex items-center gap-1 text-sm">
					<a href="/" className="px-2.5 py-1.5 rounded-md text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100">Home</a>
					<a href="/setup" className="px-2.5 py-1.5 rounded-md text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100">Setup</a>
				</nav>
			</div>
		</header>
	)
}


