import React from 'react'

type ErrorBoundaryProps = {
	children: React.ReactNode
}

type ErrorBoundaryState = {
	hasError: boolean
	error?: unknown
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
		return { hasError: true, error }
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="container py-8">
					<h1 className="text-xl font-semibold">Something went wrong.</h1>
					<p className="text-sm opacity-80 mt-2">Try refreshing the page.</p>
				</div>
			)
		}
		return this.props.children
	}
}


